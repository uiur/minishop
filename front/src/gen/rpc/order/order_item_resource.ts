// @generated by protobuf-ts 2.0.0-alpha.20 with parameters long_type_number,generate_dependencies
// @generated from protobuf file "rpc/order/order_item_resource.proto" (package "rpc.order", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from '@protobuf-ts/runtime'
import type { IBinaryWriter } from '@protobuf-ts/runtime'
import { WireType } from '@protobuf-ts/runtime'
import type { BinaryReadOptions } from '@protobuf-ts/runtime'
import type { IBinaryReader } from '@protobuf-ts/runtime'
import { UnknownFieldHandler } from '@protobuf-ts/runtime'
import { MessageType } from '@protobuf-ts/runtime'
import { ProductResponse } from '../product/product_response'
/**
 * @generated from protobuf message rpc.order.OrderItemResource
 */
export interface OrderItemResource {
  /**
   * @generated from protobuf field: string id = 1;
   */
  id: string
  /**
   * @generated from protobuf field: int32 price = 2;
   */
  price: number
  /**
   * @generated from protobuf field: int32 quantity = 3;
   */
  quantity: number
  /**
   * @generated from protobuf field: int32 amount = 4;
   */
  amount: number
  /**
   * @generated from protobuf field: rpc.product.ProductResponse product = 5;
   */
  product?: ProductResponse
}
// @generated message type with reflection information, may provide speed optimized methods
class OrderItemResource$Type extends MessageType<OrderItemResource> {
  constructor() {
    super('rpc.order.OrderItemResource', [
      { no: 1, name: 'id', kind: 'scalar', T: 9 /*ScalarType.STRING*/ },
      { no: 2, name: 'price', kind: 'scalar', T: 5 /*ScalarType.INT32*/ },
      { no: 3, name: 'quantity', kind: 'scalar', T: 5 /*ScalarType.INT32*/ },
      { no: 4, name: 'amount', kind: 'scalar', T: 5 /*ScalarType.INT32*/ },
      { no: 5, name: 'product', kind: 'message', T: () => ProductResponse },
    ])
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: OrderItemResource
  ): OrderItemResource {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* string id */ 1:
          message.id = reader.string()
          break
        case /* int32 price */ 2:
          message.price = reader.int32()
          break
        case /* int32 quantity */ 3:
          message.quantity = reader.int32()
          break
        case /* int32 amount */ 4:
          message.amount = reader.int32()
          break
        case /* rpc.product.ProductResponse product */ 5:
          message.product = ProductResponse.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.product
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
    message: OrderItemResource,
    writer: IBinaryWriter,
    options: BinaryWriteOptions
  ): IBinaryWriter {
    /* string id = 1; */
    if (message.id !== '')
      writer.tag(1, WireType.LengthDelimited).string(message.id)
    /* int32 price = 2; */
    if (message.price !== 0) writer.tag(2, WireType.Varint).int32(message.price)
    /* int32 quantity = 3; */
    if (message.quantity !== 0)
      writer.tag(3, WireType.Varint).int32(message.quantity)
    /* int32 amount = 4; */
    if (message.amount !== 0)
      writer.tag(4, WireType.Varint).int32(message.amount)
    /* rpc.product.ProductResponse product = 5; */
    if (message.product)
      ProductResponse.internalBinaryWrite(
        message.product,
        writer.tag(5, WireType.LengthDelimited).fork(),
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
 * @generated MessageType for protobuf message rpc.order.OrderItemResource
 */
export const OrderItemResource = new OrderItemResource$Type()
