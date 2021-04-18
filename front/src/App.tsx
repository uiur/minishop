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

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from 'react-router-dom'

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

function useProduct(id: string) {
  const client = new ProductClient(transport)
  const fetcher = () =>
    new Promise<ProductResponse>((resolve, reject) =>
      client.show({ id: id }).then(({ response }) => resolve(response), reject)
    )

  return useSWR(['Product/Show', id], fetcher)
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

function ProductsPage() {
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

function ProductPage() {
  const { id } = useParams<{ id: string }>()
  const { data: product } = useProduct(id)
  return (
    <section className="content">
      <header>
        <h1>PRODUCT</h1>
      </header>
      <div>
        {product && <ProductComponent product={product}></ProductComponent>}
      </div>
    </section>
  )
}

function App() {
  return (
    <Router>
      <div>
        <header>
          <span>cart</span>
        </header>

        <Switch>
          <Route path="/" exact>
            <ProductsPage></ProductsPage>
          </Route>

          <Route path="/products/:id">
            <ProductPage></ProductPage>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
