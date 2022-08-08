import './App.css';
import { useState, useEffect } from 'react'
// custom hook
import { useFetch } from './hooks/useFetch';

const url = 'http://localhost:3000/products'

function App() {
  const [products, setProducts] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  //custom hook
  const {data: items, httpConfig, loading, error} = useFetch(url)
  //get data
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url)
      const data = await res.json()
      setProducts(data)
    }

    fetchData()
  }, [])
  //add data
  const handleSubmit = async (event) => {
    event.preventDefault()
    const product = {
      name,
      price
    }

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(product)
    // })
    
    // const addedProduct = await res.json()
    // setProducts((prevProduct)=>[...prevProduct, addedProduct])

    // utilizando custom hook
    httpConfig(product, "POST")
    
    setName('')
    setPrice('')
  }

  const handleDelete = (id)=>{
    httpConfig(id, "DELETE")
  }

  return (
    <div className="App">
      <h1>http</h1>
      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
      {!error && (
        <ul>
        {items && items.map((product) => (
          <li key={product.id}>
            {product.name} - R$: {product.price}
            <button onClick={() => handleDelete(product.id)}>Excluir</button>
            </li>
        ))}
      </ul>
      )}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" value={name} name='name' onChange={(event)=> setName(event.target.value)} />
          </label>
          <label>
            Preço:
            <input type="number" value={price} name='price' onChange={(event)=> setPrice(event.target.value)} />
          </label>
          {loading && <input type="submit" disabled value='aguarde' />}
          {!loading && <input type="submit" value='criar' />}
        </form>
      </div>
    </div>
  );
}

export default App;
