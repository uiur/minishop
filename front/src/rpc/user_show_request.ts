// @generated by protobuf-ts 2.0.0-alpha.20 with parameters long_type_number,generate_dependencies
// @generated from protobuf file "user_show_request.proto" (syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from '@protobuf-ts/runtime'
import type { IBinaryWriter } from '@protobuf-ts/runtime'
import { WireType } from '@protobuf-ts/runtime'
import type { BinaryReadOptions } from '@protobuf-ts/runtime'
import type { IBinaryReader } from '@protobuf-ts/runtime'
import { UnknownFieldHandler } from '@protobuf-ts/runtime'
import { MessageType } from '@protobuf-ts/runtime'
/**
 * @generated from protobuf message UserShowRequest
 */
export interface UserShowRequest {
  /**
   * @generated from protobuf field: int64 id = 1;
   */
  id: number
}
// @generated message type with reflection information, may provide speed optimized methods
class UserShowRequest$Type extends MessageType<UserShowRequest> {
  constructor() {
    super('UserShowRequest', [
      {
        no: 1,
        name: 'id',
        kind: 'scalar',
        T: 3 /*ScalarType.INT64*/,
        L: 2 /*LongType.NUMBER*/,
      },
    ])
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: UserShowRequest
  ): UserShowRequest {
    let message = target ?? this.create(),
      end = reader.pos + length
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag()
      switch (fieldNo) {
        case /* int64 id */ 1:
          message.id = reader.int64().toNumber()
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
    message: UserShowRequest,
    writer: IBinaryWriter,
    options: BinaryWriteOptions
  ): IBinaryWriter {
    /* int64 id = 1; */
    if (message.id !== 0) writer.tag(1, WireType.Varint).int64(message.id)
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
 * @generated MessageType for protobuf message UserShowRequest
 */
export const UserShowRequest = new UserShowRequest$Type()
