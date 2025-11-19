import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Toaster } from "sonner";
import { ClipLoader } from "react-spinners";

const NavBar = lazy(() => import("./components/NavBar/NavBar"));
const ProductListContainer = lazy(() => import("./components/ProductListContainer/ProductListContainer"));
const ProductDetailContainer = lazy(() => import("./components/ProductDetailContainer/ProductDetailContainer"));
const Cart = lazy(() => import("./components/Cart/Cart"));
const Checkout = lazy(() => import("./components/Checkout/Checkout"));
const Error404 = lazy(() => import("./components/Error404/404"));

import { CartProvider } from "./context/CartContext";

import './App.css';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <CartProvider>
          <Toaster position="bottom-right" richColors />
          <Suspense fallback={<div className="spinner-container"><ClipLoader color="#36d7b7" size={50} /></div>}>
            <NavBar />
            <Routes>
              <Route path="/" element={<ProductListContainer greeting={"Bienvenidos a la tienda!"} />} />
              <Route path="/categoria/:categoria" element={<ProductListContainer greeting={"Bienvenidos a la tienda!"} />} />
              <Route path="/detail/:id" element={<ProductDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </Suspense>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App
