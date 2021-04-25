// @generated by protobuf-ts 2.0.0-alpha.20 with parameters long_type_number,generate_dependencies
// @generated from protobuf file "rpc/order/order_service.proto" (package "rpc.order", syntax proto3)
// tslint:disable
import { ShowRequest } from './show_request'
import { OrderResource } from './order_resource'
import { Empty } from '../../google/protobuf/empty'
import { ServiceType } from '@protobuf-ts/runtime-rpc'
/**
 * @generated ServiceType for protobuf service rpc.order.Order
 */
export const Order = new ServiceType('rpc.order.Order', [
  { name: 'Create', options: {}, I: Empty, O: OrderResource },
  { name: 'Show', options: {}, I: ShowRequest, O: OrderResource },
])