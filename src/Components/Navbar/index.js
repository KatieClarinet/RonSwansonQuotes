
import { Link } from "react-router-dom";
import './styles.css'

export default function Navbar() {
    return (
        <nav className="navbar">
    <Link to="/" className="li">Random</Link>
    <Link to="/search" className="li">Search</Link>
    </nav>
    )
}