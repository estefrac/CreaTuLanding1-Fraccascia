import NavBar from "./components/NavBar/NavBar"
import ProductListContainer from "./components/ProductListContainer/ProductListContainer"
import ProductDetailContainer from "./components/ProductDetailContainer/ProductDetailContainer"
import {  BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

function App() {

  
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ProductListContainer greeting={"Bienvenidos a la tienda!"}/>}/>
          <Route path="/categoria/:categoria" element={<ProductListContainer greeting={"Bienvenidos a la tienda!"}/>}/>
          <Route path="/detail/:id" element={<ProductDetailContainer />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
