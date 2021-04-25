// @generated by protobuf-ts 2.0.0-alpha.20 with parameters long_type_number,generate_dependencies
// @generated from protobuf file "rpc/order/order_resource.proto" (package "rpc.order", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from '@protobuf-ts/runtime'
import type { IBinaryWriter } from '@protobuf-ts/runtime'
import { WireType } from '@protobuf-ts/runtime'
import type { BinaryReadOptions } from '@protobuf-ts/runtime'
import type { IBinaryReader } from '@protobuf-ts/runtime'
import { UnknownFieldHandler } from '@protobuf-ts/runtime'
import { MessageType } from '@protobuf-ts/runtime'
import { OrderItemResource } from './order_item_resource'
/**
 * @generated from protobuf message rpc.order.OrderResource
 */
export interface OrderResource {
  /**
   * @generated from protobuf field: string id = 1;
   */
  id: string
  /**
   * @generated from protobuf field: rpc.order.OrderResource.Status status = 2;
   */
  status: OrderResource_Status
  /**
   * @generated from protobuf field: repeated rpc.order.OrderItemResource order_items = 3;
   */
  orderItems: OrderItemResource[]
}
/**
 * @generated from protobuf enum rpc.order.OrderResource.Status
 */
export enum OrderResource_Status {
  /**
   * @generated from protobuf enum value: CART = 0;
   */
  CART = 0,
  /**
   * @generated from protobuf enum value: ORDEDED = 1;
   */
  ORDEDED = 1,
}
// @generated message type with reflection information, may provide speed optimized methods
class OrderResource$Type extends MessageType<OrderResource> {
  constructor() {
    super('rpc.order.OrderResource', [
      { no: 1, name: 'id', kind: 'scalar', T: 9 /*ScalarType.STRING*/ },
      {
        no: 2,
        name: 'status',
        kind: 'enum',
        T: () => ['rpc.order.OrderResource.Status', OrderResource_Status],
      },
      {
        no: 3,
        name: 'order_items',
        kind: 'message',
        repeat: 1 /*RepeatType.PACKED*/,
        T: () => OrderItemResource,
      },
    ])
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: OrderResource
  ): OrderResource {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* string id */ 1:
          message.id = reader.string()
          break
        case /* rpc.order.OrderResource.Status status */ 2:
          message.status = reader.int32()
          break
        case /* repeated rpc.order.OrderItemResource order_items */ 3:
          message.orderItems.push(
            OrderItemResource.internalBinaryRead(
              reader,
              reader.uint32(),
              options
            )
          )
          break
        default:
          let u = options.readUnknownField
          if (u === 'throw')
            throw new globalThis.Error(
              `Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`
            )
          let d = reader.skip(wireType)
          if (u !== false)
            (u === true ? UnknownFieldHandler.onRead : u)(
              this.typeName,
              message,
              fieldNo,
              wireType,
              d
            )
      }
    }
    return message
  }
  internalBinaryWrite(
    message: OrderResource,
    writer: IBinaryWriter,
    options: BinaryWriteOptions
  ): IBinaryWriter {
    /* string id = 1; */
    if (message.id !== '')
      writer.tag(1, WireType.LengthDelimited).string(message.id)
    /* rpc.order.OrderResource.Status status = 2; */
    if (message.status !== 0)
      writer.tag(2, WireType.Varint).int32(message.status)
    /* repeated rpc.order.OrderItemResource order_items = 3; */
    for (let i = 0; i < message.orderItems.length; i++)
      OrderItemResource.internalBinaryWrite(
        message.orderItems[i],
        writer.tag(3, WireType.LengthDelimited).fork(),
        options
      ).join()
    let u = options.writeUnknownFields
    if (u !== false)
      (u == true ? UnknownFieldHandler.onWrite : u)(
        this.typeName,
        message,
        writer
      )
    return writer
  }
}
/**
 * @generated MessageType for protobuf message rpc.order.OrderResource
 */
export const OrderResource = new OrderResource$Type()