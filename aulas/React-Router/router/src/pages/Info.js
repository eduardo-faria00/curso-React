import { useParams } from 'react-router-dom'

function Info() {
  const { id } = useParams()
  return (
    <div>
      <h1>Mais informações sobre o produto</h1>
    </div>
  )
}

export default Info
