import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import transport from './client/transport';
import { UserClient } from './rpc/user_service.client'
import { UserResponse } from './rpc/user_response';

function App() {
  const [ user, setUser ] = useState<UserResponse | null>(null)

  useEffect(() => {
    (async () => {
      const client = new UserClient(transport)
      const { response: data } = await client.show({ id: 3 })
      setUser(data)
    })()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        { user && (
          <>
            <p>id: {user.id}</p>
            <p>name: {user.name} </p>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
