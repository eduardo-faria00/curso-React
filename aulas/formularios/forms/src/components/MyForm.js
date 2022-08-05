import './MyForm.css'
import { useState } from 'react'


function MyForm({user}) {
    // definindo valores default para o state baseado na prop user
    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')
    const [bio ,setBio] = useState('')
    const [role, setRole] = useState('')

    const handleName = (event) => {
        setName(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(`nome: ${name} email: ${email} descrição: ${bio}`)
        // resetando os inputs após o submit
        setName('')
        setEmail('')
        setBio('')
    }

    return (
        <>
            {/* Envio de formulário */}
            <form onSubmit={handleSubmit}>
                {/* função isolada */}
                <label>
                    <span>Nome:</span>
                    <input type="text" name="nome" placeholder="Digite seu nome" onChange={handleName} value={name}/>
                </label>
                {/* função inline */}
                <label>
                    <span>E-mail:</span>
                    <input type="email" name="email" placeholder="Digite seu e-mail" onChange={(event)=> setEmail(event.target.value)} value={email}/>
                </label>
                <label>
                    <span>descrição:</span>
                    <textarea name="bio" placeholder='descrição do usuário' onChange={(e) => setBio(e.target.value)}value={bio}></textarea>
                </label>
                <label>
                    <span>função do sistema</span>
                    <select name="role" onChange={(e)=> setRole(e.target.value)} value={role}>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrador</option>
                    </select>
                </label>
                <button type='submit' className='submit'>enviar</button>
            </form>
        </>
    )
}

export default MyForm