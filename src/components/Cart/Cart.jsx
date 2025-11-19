import { useContext } from "react"
import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext.jsx"
import CartItem from "../CartItem/CartItem.jsx"

import "./Cart.css"


const Cart = () => {
    const { cart, totalPrice, deleteProductById, clearCart } = useContext(CartContext);
    
    // early return si el carrito está vacío
    if (cart.length === 0) {
        return (
            <div className="cart-empty">
                <h2>Tu carrito está vacío</h2>
                <p>Agrega productos para comenzar tu compra</p>
                <a href="/" className="cart-link-home">Ir a la tienda</a>
            </div>
        );
    }
    
    return (
        <div className="cart-container">
            <div className="cart-header-top">
                <h1 className="cart-title">Carrito de Compras</h1>
                <button className="cart-btn-clear" onClick={clearCart}>Vaciar carrito</button>
            </div>
            <div className="cart-items">{
                    cart.map((productCart) => (
                        <CartItem 
                            key={productCart.id} 
                            productCart={productCart}
                            deleteProductById={deleteProductById}
                        />
                    ))
                }
            </div>
            
            <div className="cart-total">
                <h2>Total: ${totalPrice()}</h2>
                <Link to="/checkout" className="cart-btn-checkout">Finalizar compra</Link>
            </div>
        </div>
    )
}

export default Cart