// @generated by protobuf-ts 2.0.0-alpha.20 with parameters long_type_number,generate_dependencies
// @generated from protobuf file "user_service.proto" (syntax proto3)
// tslint:disable
import { UsersResponse } from './users_response'
import { UserIndexRequest } from './user_index_request'
import { UserCreateRequest } from './user_create_request'
import { UserResponse } from './user_response'
import { UserShowRequest } from './user_show_request'
import { ServiceType } from '@protobuf-ts/runtime-rpc'
/**
 * @generated ServiceType for protobuf service User
 */
export const User = new ServiceType('User', [
  { name: 'Show', options: {}, I: UserShowRequest, O: UserResponse },
  { name: 'Create', options: {}, I: UserCreateRequest, O: UserResponse },
  { name: 'Index', options: {}, I: UserIndexRequest, O: UsersResponse },
])
