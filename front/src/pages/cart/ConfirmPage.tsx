import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import transport from '../../client/transport'
import OrderSummaryComponent from '../../components/OrderSummaryComponent'
import { CartClient } from '../../gen/rpc/order/cart_service.client'
import { useCart } from '../useCart'

const client = new CartClient(transport)

export default function ConfirmPage() {
  const { data: cart } = useCart()

  const history = useHistory()
  const shippingAddress = cart?.shippingAddress

  const confirm = useCallback(async () => {
    if (cart === undefined) return
    if (!window.confirm('Are you sure you want to confirm this order?')) return

    await client.complete({ orderId: cart.id })

    localStorage.removeItem('cart_id')
    history.push(`/orders/${cart.id}/complete`)
  }, [cart?.id])

  if (cart === undefined) return null

  return (
    <>
      <h1>CONFIRM</h1>
      <OrderSummaryComponent order={cart}></OrderSummaryComponent>

      <div>
        <h2>SHIPPING</h2>

        {shippingAddress !== undefined && (
          <>
            <div>{shippingAddress.name}</div>
            <div>{shippingAddress.country}</div>
            <div>{shippingAddress.city}</div>
            <div>{shippingAddress.zip}</div>
            <div>{shippingAddress.address1}</div>
            <div>{shippingAddress.address2}</div>
            <div>{shippingAddress.phone}</div>
          </>
        )}
      </div>

      <button onClick={confirm}>CONFIRM</button>
    </>
  )
}
