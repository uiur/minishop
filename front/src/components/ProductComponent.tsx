import React from 'react'
import { Link } from 'react-router-dom'
import { ProductResponse } from '../gen/rpc/product/product_response'

export default function ProductComponent({
  product,
}: {
  product: ProductResponse
}) {
  return (
    <Link to={`/products/${product.id}`}>
      <div key={product.id} className="product">
        <div>
          <img className="product-image" src={product.imageUrl}></img>
        </div>
        <div>{product.name}</div>

        <div>${product.price}</div>
      </div>
    </Link>
  )
}
