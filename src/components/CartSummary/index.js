import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })

      const cartItems = cartList.length

      return (
        <div className="checkout-con">
          <h1 className="order-total">
            Order Total: <span className="cost-item">Rs {total}/-</span>
          </h1>
          <p className="items-in-cart">{cartItems} Items in cart</p>
          <button type="button" className="checkout-btn">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
