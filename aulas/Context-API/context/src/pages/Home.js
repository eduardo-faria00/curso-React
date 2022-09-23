// import { useContext } from 'react'
import ChangeCounter from '../components/ChangeCounter'
// import { CounterContext } from '../context/CounterContext'

// hook para usar o contexto
import { useCounterContext } from '../hooks/useCounterContext'
import { useTitleColorContext} from '../hooks/useTitleColorContext'

const Home = () => {
  // contexto sendo usado da forma convencional
  // const { counter } = useContext(CounterContext)
  
  // contexto sendo usado com hook
  const {counter} = useCounterContext()
  // contexto mais complexo
  const {color, dispatch} = useTitleColorContext()
  
  // alterando o valor do contexto complexo
  const setTitleColor = (color) => {
    dispatch({type: color})
  }

  return (
    <div>
      <h1 style={{color: color}}>Home</h1>
      <p>valor do contador: {counter}</p>
      {/* alterando o valor do contexto */}
      <ChangeCounter/>
      {/* alterando contexto complexo */}
      <div><button onClick={() => setTitleColor("RED")}>titulo vermelho</button></div>
    </div>
  )
}

export default Home
