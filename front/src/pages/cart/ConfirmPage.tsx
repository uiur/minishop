import CartSummaryComponent from '../../components/CartSummaryComponent'
import { useCart } from '../useCart'

export default function ConfirmPage() {
  const { data: cart } = useCart()
  const shippingAddress = cart?.shippingAddress

  return (
    <>
      <h1>CONFIRM</h1>
      {cart !== undefined && (
        <CartSummaryComponent cart={cart}></CartSummaryComponent>
      )}

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

      <button>CONFIRM</button>
    </>
  )
}
