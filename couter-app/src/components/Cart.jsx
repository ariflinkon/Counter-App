import React from 'react'

const productNames = {
  1: 'Laptop',
  2: 'Phone',
  3: 'Headphones',
}

const Cart = ({ cart }) => {
  const totalCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0)

  return (
    <div>
      <h3 className="mb-3">Cart</h3>
      {Object.entries(cart).length === 0 ? (
        <div className="alert alert-info">No items in cart.</div>
      ) : (
        <ul className="list-group mb-3">
          {Object.entries(cart).map(([productId, count]) => (
            <li key={productId} className="list-group-item d-flex justify-content-between align-items-center">
              {productNames[productId]} (ID {productId})
              <span className="badge bg-secondary rounded-pill">{count}</span>
            </li>
          ))}
        </ul>
      )}
      <h5>Total Items: <span className="badge bg-success">{totalCount}</span></h5>
    </div>
  )
}

export default Cart
