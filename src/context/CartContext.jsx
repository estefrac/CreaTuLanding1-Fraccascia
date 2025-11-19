import { createContext, useState, useEffect } from "react";
import { toast } from "sonner";

// Creamos el contexto del carrito de compras
const CartContext = createContext();

const CartProvider = ({ children }) => {
    const cartLocalStorage = JSON.parse(localStorage.getItem('cart'));
    const [cart, setCart] = useState(cartLocalStorage ? cartLocalStorage : []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addProduct = (newProduct) => {
        const existingProduct = cart.find(productCart => productCart.id === newProduct.id);

        if (existingProduct) {
            const updatedCart = cart.map(productCart =>
                productCart.id === newProduct.id
                    ? { ...productCart, quantity: productCart.quantity + newProduct.quantity }
                    : productCart
            );
            setCart(updatedCart);
            toast.success("Cantidad actualizada en el carrito");
        } else {
            setCart([...cart, newProduct]);
            toast.success("Producto agregado al carrito");
        }
    }

    const totalQuantity = () => {
        const quantity = cart.reduce((total, productCart) => total + productCart.quantity, 0);
        return quantity;
    }

    const totalPrice = () => {
        const price = cart.reduce((total, productCart) => total + (productCart.precio * productCart.quantity), 0);
        return price.toFixed(2);
    }

    const deleteProductById = (id) => {
        const updatedCart = cart.filter(productCart => productCart.id !== id);
        setCart(updatedCart);
        toast.info("Producto eliminado del carrito");
    }

    const clearCart = () => {
        setCart([]);
        toast.info("Carrito vaciado");
    }

    return (
        <CartContext.Provider value={{ cart, addProduct, totalQuantity, totalPrice, deleteProductById, clearCart }}>
            {children}
        </CartContext.Provider>
    )
};

export { CartContext, CartProvider };