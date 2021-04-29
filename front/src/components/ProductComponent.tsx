import React from 'react'
import { Link } from 'react-router-dom'
import { ProductResponse } from '../gen/rpc/product/product_response'
import { View, Text, Image, StyleSheet } from 'react-native'

const styleContainer = {
  textDecoration: 'none',
  color: 'black',

  paddingLeft: 12,
  paddingRight: 12,
}
const style = StyleSheet.create({
  inner: { flexDirection: 'column', alignItems: 'center' },
  image: {
    height: 240,
    width: 240,
    resizeMode: 'cover',
  },

  name: {
    fontFamily: 'font-family: Montserrat, sans-serif;',
    width: 180,
    fontSize: 18,
    lineHeight: 22,
    textAlign: 'center',
    letterSpacing: 1.6,
    fontWeight: '600',
  },

  price: { marginTop: 6, color: '#f0f', fontSize: 16 },
})

export default function ProductComponent({
  product,
}: {
  product: ProductResponse
}) {
  return (
    <Link style={styleContainer} to={`/products/${product.id}`}>
      <View style={style.inner}>
        <Image style={style.image} source={{ uri: product.imageUrl }} />
        <Text style={style.name}>{product.name}</Text>

        <Text style={style.price}>${product.price}</Text>
      </View>
    </Link>
  )
}
