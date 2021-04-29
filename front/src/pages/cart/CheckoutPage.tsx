import React, { useCallback, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import transport from '../../client/transport'
import Button from '../../components/Button'
import OrderSummaryComponent from '../../components/OrderSummaryComponent'
import { CartClient } from '../../gen/rpc/order/cart_service.client'
import { OrderResource } from '../../gen/rpc/order/order_resource'
import { ShippingAddressResource } from '../../gen/rpc/order/shipping_address_resource'
import { useCart } from '../../hooks/useCart'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import TextStyle from '../../styles/TextStyle'

type ShippingAddressParams = Omit<ShippingAddressResource, 'id'>

const style = StyleSheet.create({
  textInput: {
    marginTop: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 6,
  },
})

function ShippingAddressForm({
  cart,
  onChange,
}: {
  cart: OrderResource
  onChange: (params: ShippingAddressParams) => void
}) {
  const shippingAddress = cart.shippingAddress
  const [name, setName] = useState(shippingAddress?.name || '')
  const [country, setCountry] = useState(shippingAddress?.country || 'Japan')
  const [city, setCity] = useState(shippingAddress?.city || '')
  const [zip, setZip] = useState(shippingAddress?.zip || '')
  const [address1, setAddress] = useState(shippingAddress?.address1 || '')
  const [address2, setAddress2] = useState(shippingAddress?.address2 || '')
  const [phone, setPhone] = useState(shippingAddress?.phone || '')

  useEffect(() => {
    onChange({
      name,
      country,
      city,
      zip,
      address1,
      address2,
      phone,
    })
  }, [name, country, city, zip, address1, address2, phone])

  return (
    <View>
      <Text style={TextStyle.title}>SHIPPING ADDRESS</Text>
      <TextInput
        style={[style.textInput, { marginTop: 0 }]}
        placeholder="Name"
        onChangeText={setName}
        value={name}
      />

      <View style={{ flexDirection: 'row' }}>
        <TextInput
          style={[style.textInput, { flex: 1, marginRight: 4 }]}
          placeholder="Country"
          onChangeText={setCountry}
          value={country}
        />
        <TextInput
          style={[style.textInput, { marginLeft: 4, flex: 1 }]}
          placeholder="City"
          onChangeText={setCity}
          value={city}
        />
      </View>
      <TextInput
        style={style.textInput}
        placeholder="Postal Code"
        onChangeText={setZip}
        value={zip}
      />
      <TextInput
        style={style.textInput}
        placeholder="Address"
        onChangeText={setAddress}
        value={address1}
      />
      <TextInput
        style={style.textInput}
        placeholder="Address2"
        onChangeText={setAddress2}
        value={address2}
      />
      <TextInput
        style={style.textInput}
        placeholder="Phone"
        onChangeText={setPhone}
        value={phone}
      />
    </View>
  )
}

export default function CheckoutPage() {
  const { data: cart } = useCart()
  const [shippingAddress, setShippingAddress] = useState<
    ShippingAddressParams | undefined
  >()
  const history = useHistory()

  const onNext = useCallback(() => {
    if (cart === undefined || shippingAddress === undefined) return

    const client = new CartClient(transport)
    client
      .updateShippingAddress({
        orderId: cart.id,
        shippingAddress: { id: '', ...shippingAddress },
      })
      .then(() => {
        history.push('/cart/confirm')
      })
  }, [cart, shippingAddress])

  if (cart === undefined) return null

  return (
    <View style={{ maxWidth: 480 }}>
      <Text style={TextStyle.title}>CHECKOUT</Text>
      <View>
        <OrderSummaryComponent order={cart}></OrderSummaryComponent>

        <View style={{ marginTop: 20 }}>
          <ShippingAddressForm
            cart={cart}
            onChange={(params) => setShippingAddress(params)}
          />
        </View>

        <Button onPress={onNext} title="NEXT" />
      </View>
    </View>
  )
}
