import './End.css'

function End({retry, score}) {
  return (
    <div>
      <h1>Fim de jogo!</h1>
      <h2>Sua Pontuação foi: <span>{score}</span></h2>
    </div>
  )
}

export default End