import NavBar from "./components/NavBar/NavBar"
import ProductListContainer from "./components/ProductListContainer/ProductListContainer"
import './App.css'

function App() {

  return (
    <div className="app">
      <NavBar/>
      <ProductListContainer greeting={"Bienvenidos a la tienda!"}/>
    </div>
  )
}

export default App
