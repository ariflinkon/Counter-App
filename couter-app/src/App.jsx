import React, { useState } from 'react'
import ProductList from './components/ProductList'
import Cart from './components/Cart'

const App = () => {
  const [cart, setCart] = useState({})

  const handleAddToCart = (productId) => {
    setCart((prevCart) => ({
      ...prevCart,
      [productId]: (prevCart[productId] || 0) + 1,
    }))
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <ProductList onAddToCart={handleAddToCart} />
        </div>
        <div className="col-md-6">
          <Cart cart={cart} />
        </div>
      </div>
    </div>
  )
}

export default App
