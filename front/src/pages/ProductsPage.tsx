import transport from '../client/transport'
import useSWR from 'swr'
import { ProductResponse } from '../gen/rpc/product/product_response'
import { ProductClient } from '../gen/rpc/product/product_service.client'
import ProductComponent from '../components/ProductComponent'
import React from 'react'

function useProducts() {
  const client = new ProductClient(transport)
  const fetcher = () =>
    new Promise<ProductResponse[]>((resolve, reject) =>
      client
        .index({})
        .then(({ response }) => resolve(response.products), reject)
    )

  return useSWR(['Product/Index'], fetcher)
}

export default function ProductsPage() {
  const { data: products } = useProducts()

  return (
    <section className="content">
      <header>
        <h1>ALL CLOTHES</h1>
      </header>
      <div className="products-container">
        {(products || []).map((product) => {
          return <ProductComponent key={product.id} product={product} />
        })}
      </div>
    </section>
  )
}
