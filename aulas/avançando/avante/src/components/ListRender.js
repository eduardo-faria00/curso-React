import {useState} from 'react'

const ListRender = () => {
    
    const[list, setList] = useState(['Eduardo', 'Esther', 'Rebeca'])

    const[person, setPerson] = useState([
        {id: 1, nome: 'Eduardo', idade: 21},
        {id: 2, nome: 'Esther', idade: 19},
        {id: 3, nome: 'Rebeca', idade: 1}
    ])

    const handleDelete = ()=>{
        const rand = Math.floor(Math.random() * 4)

        setPerson((prevPerson)=>{
            return prevPerson.filter((person)=> rand !== person.id)
        })
    }

    return (
    <div>
        {/* Usando indice como key */}
        <ul>
            {list.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
        {/* Usando id como key */}
        <ul>
            {person.map((item) => (
                <li key={item.id}>{item.nome} - {item.idade}</li>
            ))}
        </ul>
        <button onClick={handleDelete}>delete user</button>
    </div>
  )
}

export default ListRender