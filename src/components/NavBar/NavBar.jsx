import CartWidget from "../CartWidget/CartWidget"
import logo from "../../assets/img/logo.svg"
import "./NavBar.css"

const NavBar = () => {

    return(
        <nav className="navbar">
            <img src={logo} className="logo" alt="Logo" />
            <ul className="categorias">
                <li>Inicio</li>
                <li>Todos los productos</li>
                <li>Stickers con tu logo</li>
                <li>Catálogo</li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar;