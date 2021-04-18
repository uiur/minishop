import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import transport from './client/transport'
import { UserClient } from './rpc/user_service.client'
import { UserResponse } from './rpc/user_response'
import { UsersResponse } from './rpc/users_response'
import useSWR from 'swr'
import { User } from './rpc/user_service'
import { ProductClient } from './rpc/product_service.client'
import { ProductResponse } from './rpc/product_response'

function useUser(id: number) {
  const client = new UserClient(transport)
  const fetcher = () =>
    new Promise<UserResponse>((resolve, reject) =>
      client.show({ id: id }).then(({ response }) => resolve(response), reject)
    )
  return useSWR(['User/Show', id], fetcher)
}

function useUsers() {
  const client = new UserClient(transport)
  const fetcher = () =>
    new Promise<UserResponse[]>((resolve, reject) =>
      client.index({}).then(({ response }) => resolve(response.users), reject)
    )
  return useSWR(['User/Index'], fetcher)
}

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

function ProductComponent({ product }: { product: ProductResponse }) {
  return (
    <div key={product.id} className="product">
      <div>
        <img className="product-image" src={product.imageUrl}></img>
      </div>
      <div>{product.name}</div>

      <div>${product.price}</div>
    </div>
  )
}

function App() {
  const { data: products } = useProducts()

  return (
    <div>
      <header>
        <span>cart</span>
      </header>

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
    </div>
  )
}

export default App
