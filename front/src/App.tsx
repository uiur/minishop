import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import transport from './client/transport'
import { UserClient } from './rpc/user_service.client'
import { UserResponse } from './rpc/user_response'
import { UsersResponse } from './rpc/users_response'

function User({ user }: { user: UserResponse }) {
  return (
    <div>
      <p>id: {user.id}</p>
      <p>name: {user.name} </p>
    </div>
  )
}

function App() {
  const [user, setUser] = useState<UserResponse | null>(null)
  const [users, setUsers] = useState<Array<UserResponse>>([])

  useEffect(() => {
    ;(async () => {
      const client = new UserClient(transport)
      const { response: data } = await client.show({ id: 3 })
      setUser(data)
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      const client = new UserClient(transport)
      const { response: data } = await client.index({})
      setUsers(data.users)
    })()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {user && <User user={user} />}
        {users.map((user) => {
          return <User user={user} />
        })}
      </header>
    </div>
  )
}

export default App
