import './App.css'
// Config React Router
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
// componentes
import Navbar from './components/Navbar'
import SearchForm from './components/SearchForm'
// pages
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Info from './pages/Info'
import NotFound from './pages/NotFound'
import Search from './pages/Search'

function App() {
  return (
    <div className="App">
      {/* elementos fora do bloco do routes serão exibidos em todas as páginas */}
      <BrowserRouter>
        <Navbar />
        {/* fomrulário de busca */}
        <SearchForm/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* rota dinâmica */}
          <Route path="/products/:id" element={<Product />} />
          {/* nested route */}
          <Route path="/products/:id/info" element={<Info />} />
          {/* página de busca */}
          <Route path='/search' element={<Search/>}/>
          {/* redirecionamento */}
          <Route path='/company' element={<Navigate to='/about'/>}/>
          {/* not found route (404) */}
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
