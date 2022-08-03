import { useState } from 'react'

const ManageData = () => {
    //[nome, mudar estado] = useState(valor do estado)
    const [number, setNumber] = useState(15)
    return (
        <div>
            <p>Valor: {number}</p>
            <button onClick={() => setNumber(25)}>mudar valor</button>
        </div>
    )
}

export default ManageData