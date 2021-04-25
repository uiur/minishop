import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import transport from '../client/transport'
import { CartClient } from '../gen/rpc/order/cart_service.client'
import { useCart } from './useCart'

const client = new CartClient(transport)
export default function CartPage() {
  const { data: cart, mutate } = useCart()

  const updateProduct = useCallback(
    (productId: string, quantity: number) => {
      if (cart === undefined) return
      client
        .updateProduct({
          orderId: cart.id,
          productId: productId,
          quantity: quantity,
        })
        .then(({ response }) => {
          mutate(response)
        })
    },
    [cart]
  )

  return (
    <div>
      <h1>SHOPPING CART</h1>
      {cart !== undefined && (
        <div>
          <h2>{cart.id}</h2>
          <div>
            {cart.orderItems.map((orderItem) => {
              const product = orderItem.product
              if (!product) return null

              return (
                <div>
                  <img style={{ width: 80 }} src={product.imageUrl}></img>
                  <Link to={`/products/${product.id}`}>{product.name}</Link>: $
                  {orderItem.price} x {orderItem.quantity} = ${orderItem.amount}{' '}
                  <button
                    onClick={() =>
                      updateProduct(product.id, orderItem.quantity + 1)
                    }
                  >
                    +
                  </button>{' '}
                  <button
                    onClick={() =>
                      updateProduct(product.id, orderItem.quantity - 1)
                    }
                  >
                    -
                  </button>{' '}
                  <button onClick={() => updateProduct(product.id, 0)}>
                    REMOVE
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
