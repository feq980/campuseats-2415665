import { useContext } from 'react'
import { CartContext } from '../context/cart-context.js'

// Every component reads the cart through this one hook.
export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    // TODO: throw new Error('useCart must be used inside <CartProvider>')
    throw new Error('useCart must be used inside <CartProvider>')
  }
  return context
}