import React, { useCallback } from 'react'
import { Link, useHistory } from 'react-router-dom'
import transport from '../client/transport'
import { CartClient } from '../gen/rpc/order/cart_service.client'
import { useCart } from '../hooks/useCart'
import { View, Image, TouchableOpacity, Text } from 'react-native'
import Button from '../components/Button'
import TextStyle from '../styles/TextStyle'

const client = new CartClient(transport)
export default function CartPage() {
  const { data: cart, mutate } = useCart()
  const history = useHistory()

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

  if (cart === undefined) return null

  return (
    <View style={{ flex: 1, maxWidth: 480 }}>
      <Text style={TextStyle.title}>SHOPPING CART</Text>
      <View style={{ flexDirection: 'column' }}>
        {cart.orderItems.map((orderItem) => {
          const product = orderItem.product
          if (!product) return null

          return (
            <View
              key={orderItem.id}
              style={{ marginTop: 18, flexDirection: 'row' }}
            >
              <Image
                style={{ width: 80, height: 80 }}
                source={{ uri: product.imageUrl }}
              />
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  paddingLeft: 12,
                }}
              >
                <Text
                  style={{
                    alignItems: 'center',
                    fontSize: 16,
                    fontWeight: '600',
                  }}
                >
                  {product.name}
                </Text>

                <View
                  style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <View style={{ flex: 1, flexDirection: 'row' }}>
                    <TouchableOpacity
                      style={{
                        width: 24,
                        height: 24,
                        borderWidth: 2,
                        borderColor: '#f0f',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      onPress={() => {
                        updateProduct(product.id, orderItem.quantity - 1)
                      }}
                    >
                      <Text>-</Text>
                    </TouchableOpacity>
                    <View
                      style={{
                        width: 24,
                        height: 24,
                        borderWidth: 0,
                        borderColor: '#f0f',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Text>{orderItem.quantity}</Text>
                    </View>
                    <TouchableOpacity
                      style={{
                        width: 24,
                        height: 24,
                        borderWidth: 2,
                        borderColor: '#f0f',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      onPress={() => {
                        updateProduct(product.id, orderItem.quantity + 1)
                      }}
                    >
                      <Text>+</Text>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <Text>${orderItem.price}</Text>
                  </View>
                </View>
              </View>
            </View>
          )
        })}

        <View
          style={{ marginTop: 20, height: 2, backgroundColor: 'lightgray' }}
        />

        <View style={{ flexDirection: 'row', paddingVertical: 18 }}>
          <Text style={{ flex: 1 }}>Subtotal</Text>
          <Text>${cart.amount}</Text>
        </View>

        <Button
          disabled={cart.amount === 0}
          onPress={() => history.push('/cart/checkout')}
          title="CHECKOUT"
          style={{ marginTop: 20 }}
        />
      </View>
    </View>
  )
}
