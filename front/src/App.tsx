import './App.css'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import React from 'react'
import ProductPage from './pages/ProductPage'
import ProductsPage from './pages/ProductsPage'
import CartPage from './pages/CartPage'

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
        </Switch>
      </div>
    </Router>
  )
}

export default App
