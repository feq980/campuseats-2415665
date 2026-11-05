import { Link } from 'react-router'
import { useCart } from '../hooks/useCart.js'

function OrdersPage() {
  const { orders } = useCart()

  if (orders.length === 0) {
    return (
      <section>
        <h2 className="section-title">My orders</h2>
        <p className="muted">No orders yet. <Link to="/">Browse vendors</Link></p>
      </section>
    )
  }

  return (
    <section>
      <h2 className="section-title">My orders</h2>
      <ul className="order-list">
        {orders.map((order) => (
          <li key={order.id} className="card">
            <p className="cart-name">
              Pickup {order.pickupTime} | Mahallah {order.mahallah}
            </p>
            <p className="muted">
              {/* TODO: list the items, e.g. "2x Nasi Lemak Ayam, 1x Teh Tarik" */}
              {order.lines.map((l) => `${l.qty}x ${l.item.name}`).join(', ')}
            </p>
            <p className="price">RM {order.total.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default OrdersPage