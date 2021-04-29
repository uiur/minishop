import { useHistory } from 'react-router-dom'
import OrderSummaryComponent from '../../components/OrderSummaryComponent'
import { useCart } from '../useCart'

export default function ConfirmPage() {
  const { data: cart } = useCart()

  const history = useHistory()
  const shippingAddress = cart?.shippingAddress

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

      <button
        onClick={() => {
          history.push(`/orders/${cart.id}/complete`)
        }}
      >
        CONFIRM
      </button>
    </>
  )
}
