import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      {/* A tag link substitui a tag a */}
      <h2>React Router</h2>
      <div className="options">

        {/* <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link> */}
        {/* utilizando link ativo */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">Sobre</NavLink>

      </div>
    </nav>
  )
}

export default Navbar
