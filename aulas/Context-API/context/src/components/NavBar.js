import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
      <h1>Context</h1>
      <div className="options">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Produtos</NavLink>
        <NavLink to="/about">Sobre</NavLink>
      </div>
    </nav>
  )
}

export default NavBar
