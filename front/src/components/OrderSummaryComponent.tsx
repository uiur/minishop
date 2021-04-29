import React from 'react'
import { Link } from 'react-router-dom'
import { OrderResource } from '../gen/rpc/order/order_resource'

export default function OrderSummaryComponent({
  order,
}: {
  order: OrderResource
}) {
  return (
    <div>
      {order.orderItems.map((orderItem) => {
        const product = orderItem.product
        if (!product) return null

        return (
          <div key={orderItem.id}>
            <img style={{ width: 80 }} src={product.imageUrl}></img>
            <Link to={`/products/${product.id}`}>{product.name}</Link>: $
            {orderItem.price} x {orderItem.quantity} = ${orderItem.amount}{' '}
          </div>
        )
      })}
      <div>Subtotal: ${order.amount}</div>
    </div>
  )
}
