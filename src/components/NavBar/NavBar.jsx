import CartWidget from "../CartWidget/CartWidget"
import logo from "../../assets/img/logo.svg"
import { Link } from "react-router-dom"
import "./NavBar.css"

const NavBar = () => {

    return(
        <nav className="navbar">
            <div className="navbar-content">
            <Link to="/"><img src={logo} className="logo" alt="Logo" /></Link>
            <ul className="categorias">
                <li><Link to="/categoria/Deportes" className="nav-link">Deportes</Link></li>
                <li><Link to="/categoria/Cultura" className="nav-link">Cultura</Link></li>
                <li><Link to="/categoria/Frases" className="nav-link">Frases</Link></li>
            </ul>
            <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar;