import { useEffect, useState } from 'react'
import useSWR from 'swr'
import transport from '../client/transport'
import { OrderResource } from '../gen/rpc/order/order_resource'
import { OrderClient } from '../gen/rpc/order/order_service.client'

const client = new OrderClient(transport)
const fetcher = (path: string, id: string) => {
  return new Promise<OrderResource>((resolve, reject) =>
    client.show({ id: id }).then(({ response }) => resolve(response), reject)
  )
}

export function useCart() {
  const [cartId, setCartId] = useState<string | null>(null)

  useEffect(() => {
    const id = localStorage.getItem('cart_id')
    const client = new OrderClient(transport)
    if (id !== null) {
      setCartId(id)
    } else {
      client.create({}).then(({ response }) => {
        localStorage.setItem('cart_id', response.id)
        setCartId(response.id)
      })
    }
  }, [])

  return useSWR(cartId ? ['Order/Show', cartId] : null, fetcher)
}
