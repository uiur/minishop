import React, { useCallback, useState } from 'react'
import { useParams } from 'react-router-dom'
import useSWR, { mutate } from 'swr'
import transport from '../client/transport'
import ProductComponent from '../components/ProductComponent'
import { CartClient } from '../gen/rpc/order/cart_service.client'
import { ProductResponse } from '../gen/rpc/product/product_response'
import { ProductClient } from '../gen/rpc/product/product_service.client'
import { useCart } from '../hooks/useCart'
import { View, Text, Image } from 'react-native'
import Button from '../components/Button'

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
  const { data: cart, mutate: mutateCart } = useCart()
  const [message, setMessage] = useState<string>('')

  const onPress = useCallback(() => {
    if (cart === undefined) return

    const client = new CartClient(transport)
    client
      .updateProduct({ orderId: cart.id, productId: id, quantity: 1 })
      .then(() => {
        mutateCart()
        setMessage('the product has been added to the cart!')
      })
  }, [id, cart])

  if (!cart || !product) return null

  return (
    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
      <Image
        style={{ height: 360, width: 360, resizeMode: 'cover' }}
        source={{ uri: product.imageUrl }}
      />
      <Text
        style={{
          fontFamily: 'font-family: Montserrat, sans-serif;',
          width: 180,
          fontSize: 18,
          lineHeight: 22,
          textAlign: 'center',
          letterSpacing: 1.6,
          fontWeight: '600',
        }}
      >
        {product.name}
      </Text>

      <Text style={{ marginTop: 6, color: '#f0f', fontSize: 16 }}>
        ${product.price}
      </Text>

      <Button onPress={onPress} title="ADD TO CART" />

      {message.length > 0 && <Text style={{ marginTop: 20 }}>{message}</Text>}
    </View>
  )
}
