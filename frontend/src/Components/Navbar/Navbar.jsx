import { Link } from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {
    
    return <header className="navbar-container">
        <nav className="navbar-link-container">
            <button className="navbar-button">
                <Link className="navbar-link" to={"/"}>Main page</Link>
            </button>
            <button className="navbar-button">
                <Link className="navbar-link" to={"/tables"}>Tables</Link>
            </button>
        </nav>
    </header>
}