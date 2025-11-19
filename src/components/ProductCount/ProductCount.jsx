import { useState } from "react";
import { ShoppingCart, Minus, Plus} from "lucide-react";


const ProductCount = ({stock, addToCart, buyNow}) => {

    const [count, setCount] = useState(1);

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleIncrement = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };


  return (
    <div>
        <div className="quantity-section">
            <label className="quantity-label">
                Cantidad
            </label>
            <div className="quantity-controls">
                <button onClick={handleDecrement} className="quantity-button">
                    <Minus />
                </button>
                <span className="quantity-display">
                    {count}
                </span>
                <button onClick={handleIncrement} className="quantity-button">
                    <Plus />
                </button>
            </div>
        </div>
        <div className="action-buttons">
            <button onClick={ () => buyNow(count) } className="product-detail-btn product-detail-btn-primary">
                Comprar ahora
            </button>
            <button onClick={ () => addToCart(count) } className="product-detail-btn product-detail-btn-secondary">
                <ShoppingCart className="product-detail-btn-icon" />
                Agregar al carrito
            </button>
        </div>
    </div>
  )
}

export default ProductCount