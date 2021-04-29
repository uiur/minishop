import React from 'react'
import { Link } from 'react-router-dom'
import {
  OrderResource,
  OrderResource_Status,
} from '../gen/rpc/order/order_resource'
import { View, Text, Image } from 'react-native'

export default function OrderSummaryComponent({
  order,
}: {
  order: OrderResource
}) {
  return (
    <View style={{ maxWidth: 480 }}>
      {order.orderItems.map((orderItem) => {
        const product = orderItem.product
        if (!product) return null

        return (
          <View
            key={orderItem.id}
            style={{ flexDirection: 'row', alignItems: 'center' }}
          >
            <Image
              style={{ width: 60, height: 60 }}
              source={{ uri: product.imageUrl }}
            />
            <Text
              style={{
                fontWeight: '600',
                fontSize: 14,
                marginLeft: 20,
                flex: 2,
              }}
            >
              {product.name}
            </Text>
            <Text style={{}}>{orderItem.quantity}</Text>
            <Text style={{ marginLeft: 20 }}>${orderItem.amount}</Text>
          </View>
        )
      })}

      <View
        style={{ marginTop: 20, height: 2, backgroundColor: 'lightgray' }}
      />

      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Text style={{ flex: 1 }}>Subtotal</Text>
        <Text>${order.amount}</Text>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 8 }}>
        <Text style={{ flex: 1 }}>Shipping</Text>
        <Text>$0</Text>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 8 }}>
        <Text style={{ flex: 1, fontWeight: '600' }}>Total</Text>
        <Text style={{ fontWeight: '600' }}>${order.amount}</Text>
      </View>

      {order.status === OrderResource_Status.ORDERED && (
        <View style={{ flexDirection: 'row', marginTop: 8 }}>
          <Text style={{ flex: 1 }}>Status</Text>
          <Text style={{}}>ORDERED</Text>
        </View>
      )}
    </View>
  )
}
