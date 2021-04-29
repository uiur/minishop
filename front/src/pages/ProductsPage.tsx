import transport from '../client/transport'
import useSWR from 'swr'
import { ProductResponse } from '../gen/rpc/product/product_response'
import { ProductClient } from '../gen/rpc/product/product_service.client'
import ProductComponent from '../components/ProductComponent'
import React from 'react'
import { View, Text } from 'react-native'
import TextStyle from '../styles/TextStyle'

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
    <View style={{ flex: 1 }}>
      <Text style={TextStyle.title}>ALL CLOTHES</Text>

      <View style={{ marginTop: 20, flexDirection: 'row', flexWrap: 'wrap' }}>
        {(products || []).map((product) => {
          return (
            <View key={product.id}>
              <ProductComponent key={product.id} product={product} />
            </View>
          )
        })}
      </View>
    </View>
  )
}
