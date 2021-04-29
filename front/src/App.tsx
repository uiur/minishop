import './App.css'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import React from 'react'
import ProductPage from './pages/ProductPage'
import ProductsPage from './pages/ProductsPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/cart/CheckoutPage'
import ConfirmPage from './pages/cart/ConfirmPage'
import CompletePage from './pages/cart/CompletePage'
import { View, Text } from 'react-native'
import { useCart } from './hooks/useCart'

function App() {
  const { data: cart } = useCart()
  const navStyle = {
    textDecoration: 'none',
    color: 'black',
  }

  return (
    <Router>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View
          style={{ flexDirection: 'row', height: 80, paddingHorizontal: 50 }}
        >
          <View style={{ paddingVertical: 30 }}>
            <Link style={navStyle} to="/">
              <Text>TOP</Text>
            </Link>
          </View>
          <View style={{ marginLeft: 20, paddingVertical: 30 }}>
            <Link style={navStyle} to="/cart">
              <Text>CART {cart?.orderItems?.length || ''}</Text>
            </Link>
          </View>
        </View>

        <View style={{ paddingHorizontal: 50 }}>
          <Switch>
            <Route path="/" exact>
              <ProductsPage></ProductsPage>
            </Route>

            <Route path="/products/:id">
              <ProductPage></ProductPage>
            </Route>

            <Route path="/cart" exact>
              <CartPage></CartPage>
            </Route>

            <Route path="/cart/checkout" exact>
              <CheckoutPage></CheckoutPage>
            </Route>

            <Route path="/cart/confirm" exact>
              <ConfirmPage></ConfirmPage>
            </Route>

            <Route path="/orders/:id/complete" exact>
              <CompletePage></CompletePage>
            </Route>
          </Switch>
        </View>
      </View>
    </Router>
  )
}

export default App
