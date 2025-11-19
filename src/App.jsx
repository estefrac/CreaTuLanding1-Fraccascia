import {  BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar"
import ProductListContainer from "./components/ProductListContainer/ProductListContainer"
import ProductDetailContainer from "./components/ProductDetailContainer/ProductDetailContainer"
import Cart from "./components/Cart/Cart"
import Checkout from "./components/Checkout/Checkout";
import Error404 from "./components/Error404/404";
import {CartProvider} from "./context/CartContext"

import './App.css'

function App() {

  
  return (
    <div className="app">
      <BrowserRouter>
        <CartProvider>
          <NavBar/>

          <Routes>
            <Route path="/" element={<ProductListContainer greeting={"Bienvenidos a la tienda!"}/>}/>
            <Route path="/categoria/:categoria" element={<ProductListContainer greeting={"Bienvenidos a la tienda!"}/>}/>
            <Route path="/detail/:id" element={<ProductDetailContainer />}/>
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
