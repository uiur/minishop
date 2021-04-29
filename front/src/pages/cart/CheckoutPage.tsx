import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../useCart'

export default function CheckoutPage() {
  const { data: cart } = useCart()

  return (
    <div>
      <h1>CHECKOUT</h1>
      {cart !== undefined && (
        <div>
          <div>
            {cart.orderItems.map((orderItem) => {
              const product = orderItem.product
              if (!product) return null

              return (
                <div>
                  <img style={{ width: 80 }} src={product.imageUrl}></img>
                  <Link to={`/products/${product.id}`}>{product.name}</Link>: $
                  {orderItem.price} x {orderItem.quantity} = ${orderItem.amount}{' '}
                </div>
              )
            })}
            <div>Subtotal: ${cart.amount}</div>
          </div>
        </div>
      )}
    </div>
  )
}
