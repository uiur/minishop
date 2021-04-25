import React, { useCallback, useState } from 'react'
import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import transport from '../client/transport'
import ProductComponent from '../components/ProductComponent'
import { CartClient } from '../gen/rpc/order/cart_service.client'
import { ProductResponse } from '../gen/rpc/product/product_response'
import { ProductClient } from '../gen/rpc/product/product_service.client'
import { useCart } from './useCart'

function useProduct(id: string) {
  const client = new ProductClient(transport)
  const fetcher = () =>
    new Promise<ProductResponse>((resolve, reject) =>
      client.show({ id: id }).then(({ response }) => resolve(response), reject)
    )

  return useSWR(['Product/Show', id], fetcher)
}

export default function ProductPage() {
  const { id } = useParams<{ id: string }>()
  const { data: product } = useProduct(id)
  const { data: cart } = useCart()
  const [message, setMessage] = useState<string>('')

  const onPress = useCallback(() => {
    if (cart === undefined) return

    const client = new CartClient(transport)
    client
      .updateProduct({ orderId: cart.id, productId: id, quantity: 1 })
      .then(() => {
        setMessage('the product has been added to the cart!')
      })
  }, [id, cart])

  return (
    <section className="content">
      <header>
        <h1>PRODUCT</h1>
      </header>
      <div>
        {product && <ProductComponent product={product}></ProductComponent>}

        {cart && <button onClick={onPress}>ADD TO CART</button>}

        {message.length > 0 && <div>{message}</div>}
      </div>
    </section>
  )
}
