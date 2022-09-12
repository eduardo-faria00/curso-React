import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

function Product() {
  // parametros para rota dinamica
  const { id } = useParams()
  // carregamento de dado individual
  const url = `http://localhost:3000/products/${id}`
  const { data: product, loading, error } = useFetch(url)

  return (
    <>
      {error && <p>{error}</p>}
      {loading && <p>Carregando...</p>}
      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>{product.price}</p>
          {/* nested route */}
          <Link to={`/products/${product.id}/info`}>Mais informações</Link>
        </div>
      )}
    </>
  )
}

export default Product
