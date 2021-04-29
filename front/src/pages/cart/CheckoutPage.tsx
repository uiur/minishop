import React, { useCallback, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import transport from '../../client/transport'
import CartSummaryComponent from '../../components/CartSummaryComponent'
import { CartClient } from '../../gen/rpc/order/cart_service.client'
import { OrderResource } from '../../gen/rpc/order/order_resource'
import { ShippingAddressResource } from '../../gen/rpc/order/shipping_address_resource'
import { useCart } from '../useCart'

type ShippingAddressParams = Omit<ShippingAddressResource, 'id'>

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
    <form>
      <h2>SHIPPING ADDRESS</h2>
      <div>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.currentTarget.value)}
          value={name}
        />
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => setCountry(e.currentTarget.value)}
          value={country}
          placeholder="Country"
        ></input>
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => setCity(e.currentTarget.value)}
          value={city}
          placeholder="City"
        ></input>
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => setZip(e.currentTarget.value)}
          value={zip}
          placeholder="Zip"
        ></input>
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => setAddress(e.currentTarget.value)}
          value={address1}
          placeholder="Address"
        ></input>
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => setAddress2(e.currentTarget.value)}
          value={address2}
          placeholder="Address2"
        ></input>
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => setPhone(e.currentTarget.value)}
          value={phone}
          placeholder="Phone"
        ></input>
      </div>
    </form>
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

  return (
    <div>
      <h1>CHECKOUT</h1>
      {cart !== undefined && (
        <div>
          <CartSummaryComponent cart={cart}></CartSummaryComponent>

          <div>
            {cart !== undefined && (
              <ShippingAddressForm
                cart={cart}
                onChange={(params) => setShippingAddress(params)}
              />
            )}
          </div>

          <div>
            <button onClick={onNext}>NEXT</button>
          </div>
        </div>
      )}
    </div>
  )
}
