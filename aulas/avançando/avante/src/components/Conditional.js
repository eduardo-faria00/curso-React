import {useState} from 'react'

const Conditional = () => {
    const [x, setX] = useState(false)

    const [name, setName] = useState('Eduardo')

    return (
    <div>
        <h1>Isso será exibido?</h1>

        {x && <p>Se for true, sim</p>}
        {!x && <p>Se for false, não</p>}

        {name === 'Eduardo' ? (<p>Olá</p>) : (<p>Tchau</p>)}

    </div>
  )
}

export default Conditional