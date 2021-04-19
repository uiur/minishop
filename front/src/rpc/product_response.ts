// @generated by protobuf-ts 2.0.0-alpha.20 with parameters long_type_number,generate_dependencies
// @generated from protobuf file "product_response.proto" (syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from '@protobuf-ts/runtime'
import type { IBinaryWriter } from '@protobuf-ts/runtime'
import { WireType } from '@protobuf-ts/runtime'
import type { BinaryReadOptions } from '@protobuf-ts/runtime'
import type { IBinaryReader } from '@protobuf-ts/runtime'
import { UnknownFieldHandler } from '@protobuf-ts/runtime'
import { MessageType } from '@protobuf-ts/runtime'
import { Timestamp } from './google/protobuf/timestamp'
/**
 * @generated from protobuf message ProductResponse
 */
export interface ProductResponse {
  /**
   * @generated from protobuf field: string id = 1;
   */
  id: string
  /**
   * @generated from protobuf field: string name = 2;
   */
  name: string
  /**
   * @generated from protobuf field: int32 price = 3;
   */
  price: number
  /**
   * @generated from protobuf field: string image_url = 4;
   */
  imageUrl: string
  /**
   * @generated from protobuf field: google.protobuf.Timestamp created_at = 5;
   */
  createdAt?: Timestamp
}
// @generated message type with reflection information, may provide speed optimized methods
class ProductResponse$Type extends MessageType<ProductResponse> {
  constructor() {
    super('ProductResponse', [
      { no: 1, name: 'id', kind: 'scalar', T: 9 /*ScalarType.STRING*/ },
      { no: 2, name: 'name', kind: 'scalar', T: 9 /*ScalarType.STRING*/ },
      { no: 3, name: 'price', kind: 'scalar', T: 5 /*ScalarType.INT32*/ },
      { no: 4, name: 'image_url', kind: 'scalar', T: 9 /*ScalarType.STRING*/ },
      { no: 5, name: 'created_at', kind: 'message', T: () => Timestamp },
    ])
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: ProductResponse
  ): ProductResponse {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* string id */ 1:
          message.id = reader.string()
          break
        case /* string name */ 2:
          message.name = reader.string()
          break
        case /* int32 price */ 3:
          message.price = reader.int32()
          break
        case /* string image_url */ 4:
          message.imageUrl = reader.string()
          break
        case /* google.protobuf.Timestamp created_at */ 5:
          message.createdAt = Timestamp.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.createdAt
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
    message: ProductResponse,
    writer: IBinaryWriter,
    options: BinaryWriteOptions
  ): IBinaryWriter {
    /* string id = 1; */
    if (message.id !== '')
      writer.tag(1, WireType.LengthDelimited).string(message.id)
    /* string name = 2; */
    if (message.name !== '')
      writer.tag(2, WireType.LengthDelimited).string(message.name)
    /* int32 price = 3; */
    if (message.price !== 0) writer.tag(3, WireType.Varint).int32(message.price)
    /* string image_url = 4; */
    if (message.imageUrl !== '')
      writer.tag(4, WireType.LengthDelimited).string(message.imageUrl)
    /* google.protobuf.Timestamp created_at = 5; */
    if (message.createdAt)
      Timestamp.internalBinaryWrite(
        message.createdAt,
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
 * @generated MessageType for protobuf message ProductResponse
 */
export const ProductResponse = new ProductResponse$Type()
