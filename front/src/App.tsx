import './App.css'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import React from 'react'
import ProductPage from './pages/ProductPage'
import ProductsPage from './pages/ProductsPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/cart/CheckoutPage'
import ConfirmPage from './pages/cart/ConfirmPage'
import CompletePage from './pages/cart/CompletePage'

function App() {
  return (
    <Router>
      <div>
        <header>
          <Link to="/">TOP</Link> <Link to="/cart">CART</Link>
        </header>

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
      </div>
    </Router>
  )
}

export default App
