import useSWR from 'swr'
import transport from '../client/transport'
import { OrderResource } from '../gen/rpc/order/order_resource'
import { OrderClient } from '../gen/rpc/order/order_service.client'

const client = new OrderClient(transport)
function fetcher(path: string, id: string) {
  return new Promise<OrderResource>((resolve, reject) =>
    client.show({ id: id }).then(({ response }) => resolve(response), reject)
  )
}

export function useOrder(id: string | null) {
  return useSWR(id && ['Order/Show', id], fetcher)
}
