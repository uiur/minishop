import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import transport from '../../client/transport'
import Button from '../../components/Button'
import OrderSummaryComponent from '../../components/OrderSummaryComponent'
import { CartClient } from '../../gen/rpc/order/cart_service.client'
import { useCart } from '../../hooks/useCart'
import { View, Text } from 'react-native'
import TextStyle from '../../styles/TextStyle'

const client = new CartClient(transport)

export default function ConfirmPage() {
  const { data: cart, mutate } = useCart()

  const history = useHistory()
  const shippingAddress = cart?.shippingAddress

  const confirm = useCallback(async () => {
    if (cart === undefined) return
    if (!window.confirm('Are you sure you want to confirm this order?')) return

    await client.complete({ orderId: cart.id })

    localStorage.removeItem('cart_id')
    mutate()
    history.push(`/orders/${cart.id}/complete`)
  }, [cart?.id, mutate])

  if (cart === undefined) return null

  return (
    <View style={{ flex: 1, maxWidth: 480 }}>
      <Text style={TextStyle.title}>CONFIRM</Text>
      <OrderSummaryComponent order={cart}></OrderSummaryComponent>

      <Text style={[TextStyle.title, { marginTop: 20 }]}>SHIPPING</Text>

      {shippingAddress !== undefined && (
        <>
          <Text>{shippingAddress.name}</Text>
          <Text>{shippingAddress.country}</Text>
          <Text>{shippingAddress.city}</Text>
          <Text>{shippingAddress.zip}</Text>
          <Text>{shippingAddress.address1}</Text>
          <Text>{shippingAddress.address2}</Text>
          <Text>{shippingAddress.phone}</Text>
        </>
      )}

      <Button onPress={confirm} title="CONFIRM" />
    </View>
  )
}
