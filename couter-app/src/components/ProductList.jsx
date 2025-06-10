import React from 'react'

const products = [
  { id: 1, name: 'Laptop' },
  { id: 2, name: 'Phone' },
  { id: 3, name: 'Headphones' },
]

const ProductList = ({ onAddToCart }) => {
  return (
    <div>
      <h3 className="mb-3">Products</h3>
      {products.map((product) => (
        <div key={product.id} className="card mb-3">
          <div className="card-body d-flex justify-content-between align-items-center">
            <span>{product.name}</span>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => onAddToCart(product.id)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductList
