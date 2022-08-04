
const UserDetails = ({nome, age, job}) => {
  return (
    <div>
        <h2>{nome}</h2>
        <p>{age}</p>
        <p>{job}</p>
        { age>=18 ? (<p>pode tirar CNH</p>) : (<p>Não pode tirar CNH</p>) }
    </div>
  )
}

export default UserDetails