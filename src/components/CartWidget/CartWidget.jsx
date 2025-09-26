import iconCart from "../../assets/img/icon-cart.svg"
import "./CartWidget.css"

const CartWidget = () => {
    return (
        <div className="cartwidget">
         <img src={iconCart} className="cart-icon" alt="Cart"/>
         <span className="cart-count">0</span>
        </div>
    );
};

export default CartWidget;