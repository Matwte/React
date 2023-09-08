import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/" className="logo"><h1>Shoe-Shop</h1></Link>
        <ul className="menu">
            <li><Link className="menu-link" to="/">Inicio</Link></li>
            <li><Link className="menu-link" to="/productos">Productos</Link></li>
            <li><Link className="menu-link" to="/productos/botines">Botines</Link></li>
            <li><Link className="menu-link" to="/productos/zapatillas">Zapatillas</Link></li>
            <li><CartWidget /></li>
        </ul>
    </nav>
  )
}

export default Navbar