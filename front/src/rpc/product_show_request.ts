// @generated by protobuf-ts 2.0.0-alpha.20 with parameters long_type_number
// @generated from protobuf file "product_show_request.proto" (syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from '@protobuf-ts/runtime'
import type { IBinaryWriter } from '@protobuf-ts/runtime'
import { WireType } from '@protobuf-ts/runtime'
import type { BinaryReadOptions } from '@protobuf-ts/runtime'
import type { IBinaryReader } from '@protobuf-ts/runtime'
import { UnknownFieldHandler } from '@protobuf-ts/runtime'
import { MessageType } from '@protobuf-ts/runtime'
/**
 * @generated from protobuf message ProductShowRequest
 */
export interface ProductShowRequest {
  /**
   * @generated from protobuf field: string id = 1;
   */
  id: string
}
// @generated message type with reflection information, may provide speed optimized methods
class ProductShowRequest$Type extends MessageType<ProductShowRequest> {
  constructor() {
    super('ProductShowRequest', [
      { no: 1, name: 'id', kind: 'scalar', T: 9 /*ScalarType.STRING*/ },
    ])
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: ProductShowRequest
  ): ProductShowRequest {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* string id */ 1:
          message.id = reader.string()
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
    message: ProductShowRequest,
    writer: IBinaryWriter,
    options: BinaryWriteOptions
  ): IBinaryWriter {
    /* string id = 1; */
    if (message.id !== '')
      writer.tag(1, WireType.LengthDelimited).string(message.id)
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
 * @generated MessageType for protobuf message ProductShowRequest
 */
export const ProductShowRequest = new ProductShowRequest$Type()
