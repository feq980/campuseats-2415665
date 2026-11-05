// src/components/MenuList.jsx
import { useState } from 'react'

function MenuList({ items = [], onAdd }) {
  const [showPopularOnly, setShowPopularOnly] = useState(false)

  // Filter items if showPopularOnly is active
  const displayedItems = showPopularOnly
    ? items.filter((item) => item.popular)
    : items

  return (
    <div>
      {/* Filter toggle button */}
      <div style={{ marginBottom: '1rem' }}>
        <button
          type="button"
          className="btn"
          style={{
            background: showPopularOnly ? '#1b4332' : '#e4e7eb',
            color: showPopularOnly ? '#fff' : '#000',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
          onClick={() => setShowPopularOnly((prev) => !prev)}
        >
          {showPopularOnly ? 'Show All Items' : '🔥 Show Popular Only'}
        </button>
      </div>

      {/* Item grid */}
      <div className="grid">
        {displayedItems.map((item) => (
          <div key={item.id} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3>{item.name}</h3>
              {item.popular && (
                <span
                  style={{
                    background: '#fef3c2',
                    color: '#b45309',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '12px',
                    border: '1px solid #f59e0b'
                  }}
                >
                  Popular ⭐
                </span>
              )}
            </div>
            <p>{item.description}</p>
            <p><strong>RM {item.price.toFixed(2)}</strong></p>
            <button className="btn" onClick={() => onAdd(item)}>
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MenuList