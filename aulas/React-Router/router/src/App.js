import './App.css'
// Config React Router
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// componentes
import Navbar from './components/Navbar'
// pages
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Info from './pages/Info'

function App() {
  return (
    <div className="App">
      {/* elementos fora do bloco do routes serão exibidos em todas as páginas */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* rota dinâmica */}
          <Route path="/products/:id" element={<Product />} />
          {/* nested route */}
          <Route path="/products/:id/info" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
