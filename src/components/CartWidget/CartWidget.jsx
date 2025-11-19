import iconCart from "../../assets/img/icon-cart.svg";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import { Link } from "react-router-dom";
import "./CartWidget.css";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);
    const quantity = totalQuantity();

    return (
        <Link to="/cart" className="cartwidget">
         <img src={iconCart} className="cart-icon" alt="Cart"/>
         <span className="cart-count">{quantity !== 0 && quantity}</span>
        </Link>
    );
};

export default CartWidget;