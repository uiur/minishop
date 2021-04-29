import React from 'react'
import { useParams } from 'react-router'
import OrderSummaryComponent from '../../components/OrderSummaryComponent'
import { useOrder } from '../../hooks/useOrder'

export default function CompletePage() {
  const { id } = useParams<{ id: string }>()

  const { data: order } = useOrder(id)
  if (order === undefined) return null

  return (
    <>
      <h1>ORDER COMPLETE</h1>
      <OrderSummaryComponent order={order}></OrderSummaryComponent>
    </>
  )
}
