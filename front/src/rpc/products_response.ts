// @generated by protobuf-ts 2.0.0-alpha.20 with parameters long_type_number
// @generated from protobuf file "products_response.proto" (syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from '@protobuf-ts/runtime'
import type { IBinaryWriter } from '@protobuf-ts/runtime'
import { WireType } from '@protobuf-ts/runtime'
import type { BinaryReadOptions } from '@protobuf-ts/runtime'
import type { IBinaryReader } from '@protobuf-ts/runtime'
import { UnknownFieldHandler } from '@protobuf-ts/runtime'
import { MessageType } from '@protobuf-ts/runtime'
import { ProductResponse } from './product_response'
/**
 * @generated from protobuf message ProductsResponse
 */
export interface ProductsResponse {
  /**
   * @generated from protobuf field: repeated ProductResponse products = 1;
   */
  products: ProductResponse[]
}
// @generated message type with reflection information, may provide speed optimized methods
class ProductsResponse$Type extends MessageType<ProductsResponse> {
  constructor() {
    super('ProductsResponse', [
      {
        no: 1,
        name: 'products',
        kind: 'message',
        repeat: 1 /*RepeatType.PACKED*/,
        T: () => ProductResponse,
      },
    ])
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: ProductsResponse
  ): ProductsResponse {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* repeated ProductResponse products */ 1:
          message.products.push(
            ProductResponse.internalBinaryRead(reader, reader.uint32(), options)
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
    message: ProductsResponse,
    writer: IBinaryWriter,
    options: BinaryWriteOptions
  ): IBinaryWriter {
    /* repeated ProductResponse products = 1; */
    for (let i = 0; i < message.products.length; i++)
      ProductResponse.internalBinaryWrite(
        message.products[i],
        writer.tag(1, WireType.LengthDelimited).fork(),
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
 * @generated MessageType for protobuf message ProductsResponse
 */
export const ProductsResponse = new ProductsResponse$Type()
