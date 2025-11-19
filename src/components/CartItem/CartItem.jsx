import "./CartItem.css"

const CartItem = ({ productCart, deleteProductById }) => {
    return (
        <div className="cart-item">
            <div className="cart-item-img">
                <img src={productCart.imagen} alt={productCart.nombre} />
            </div>
            <div className="cart-item-details">
                <h3 className="cart-item-title">{productCart.nombre}</h3>
                <p className="cart-item-description">{productCart.descripcion}</p>
                <div className="cart-item-info">
                    <p><strong>Cantidad:</strong> {productCart.quantity}</p>
                    <p><strong>Precio unitario:</strong> ${productCart.precio}</p>
                    <p className="cart-item-subtotal"><strong>Subtotal:</strong> ${(productCart.precio * productCart.quantity).toFixed(2)}</p>
                </div>
            </div>
            <button 
                className="cart-item-remove" 
                onClick={() => deleteProductById(productCart.id)}
                title="Eliminar producto"
            >
                ✕
            </button>
        </div>
    )
}

export default CartItem
