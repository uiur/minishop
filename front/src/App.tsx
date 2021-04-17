import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import transport from './client/transport'
import { UserClient } from './rpc/user_service.client'
import { UserResponse } from './rpc/user_response'
import { UsersResponse } from './rpc/users_response'
import useSWR from 'swr'
import { User } from './rpc/user_service'

function UserComponent({ user }: { user: UserResponse }) {
  return (
    <div>
      <p>id: {user.id}</p>
      <p>name: {user.name} </p>
    </div>
  )
}

function useUser(id: number) {
  const client = new UserClient(transport)
  const fetcher = () =>
    new Promise<UserResponse>((resolve, reject) =>
      client.show({ id: id }).then(({ response }) => resolve(response), reject)
    )
  return useSWR(['User/Show', id], fetcher)
}

function useUsers() {
  const client = new UserClient(transport)
  const fetcher = () =>
    new Promise<UserResponse[]>((resolve, reject) =>
      client.index({}).then(({ response }) => resolve(response.users), reject)
    )
  return useSWR(['User/Index'], fetcher)
}

function App() {
  const { data: user } = useUser(3)
  const { data: users } = useUsers()

  return (
    <div className="App">
      <header className="App-header">
        {user && <UserComponent user={user} />}
        {(users || []).map((user) => {
          return <UserComponent key={user.id} user={user} />
        })}
      </header>
    </div>
  )
}

export default App
