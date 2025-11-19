import { useState, useContext } from "react";
import { addDoc, collection } from "firebase/firestore";

import { CartContext } from "../../context/CartContext";
import db from "../../db/db";
import FormCheckout from "../formCheckout/formCheckout.jsx";

import "./Checkout.css";

const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        nombre: '',
        email: '',
        telefono: ''
    });

    const [orderId, setOrderId] = useState(null);
    const [orderData, setOrderData] = useState(null);
    const { cart, totalPrice, clearCart } = useContext(CartContext);

    const handleInputChange = (event) => {
        setDataForm({ ...dataForm, [event.target.name]:event.target.value })
    }

    const sendOrder = (event) => {
        event.preventDefault();

        const order = {
            buyer: {...dataForm},
            products: [...cart],
            total: totalPrice()
        } 
        uploadOrder(order);
    }

    const uploadOrder = async(order) => {
        try {
            const orderRef = collection(db, "orders");
            const response = await addDoc(orderRef, order);
            setOrderId(response.id);
            setOrderData(order);
            clearCart();
        } catch (error) {
            console.error("Error al subir la orden: ", error);
        }
    }

    return (
        <div>
            {
                orderId ? (
                    <div className="order-confirmation">
                        <div className="order-confirmation-icon">✓</div>
                        <h2 className="order-confirmation-title">¡Gracias por tu compra, {orderData?.buyer.nombre}!</h2>
                        <p className="order-confirmation-text">Tu pedido ha sido procesado exitosamente</p>
                        <div className="order-confirmation-id">
                            <span className="order-id-label">Número de orden:</span>
                            <span className="order-id-value">{orderId}</span>
                        </div>

                        <div className="order-summary">
                            <h3 className="order-summary-title">Resumen de tu compra</h3>
                            <div className="order-products">
                                {orderData?.products.map((product) => (
                                    <div key={product.id} className="order-product-item">
                                        <img src={product.imagen} alt={product.nombre} className="order-product-img" />
                                        <div className="order-product-info">
                                            <p className="order-product-name">{product.nombre}</p>
                                            <p className="order-product-quantity">Cantidad: {product.quantity}</p>
                                        </div>
                                        <p className="order-product-price">${product.precio * product.quantity}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="order-total">
                                <span className="order-total-label">Total:</span>
                                <span className="order-total-value">${orderData?.total}</span>
                            </div>
                        </div>

                        <a href="/" className="order-confirmation-btn">Volver al inicio</a>
                    </div>
                ) : (
                    <FormCheckout 
                        dataForm={dataForm}
                        handleInputChange={handleInputChange}
                        sendOrder={sendOrder}
                    />
                )
            }
        </div>
    )
}

export default Checkout