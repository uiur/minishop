// @generated by protobuf-ts 2.0.0-alpha.20 with parameters long_type_number
// @generated from protobuf file "users_response.proto" (syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { UserResponse } from "./user_response";
/**
 * @generated from protobuf message UsersResponse
 */
export interface UsersResponse {
    /**
     * @generated from protobuf field: repeated UserResponse users = 1;
     */
    users: UserResponse[];
}
// @generated message type with reflection information, may provide speed optimized methods
class UsersResponse$Type extends MessageType<UsersResponse> {
    constructor() {
        super("UsersResponse", [
            { no: 1, name: "users", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => UserResponse }
        ]);
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UsersResponse): UsersResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated UserResponse users */ 1:
                    message.users.push(UserResponse.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: UsersResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated UserResponse users = 1; */
        for (let i = 0; i < message.users.length; i++)
            UserResponse.internalBinaryWrite(message.users[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message UsersResponse
 */
export const UsersResponse = new UsersResponse$Type();
