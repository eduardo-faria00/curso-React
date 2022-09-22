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

  return (
    <div>
      <h1>Home</h1>
      <p>valor do contador: {counter}</p>
      {/* alterando o valor do contexto */}
      <ChangeCounter/>
    </div>
  )
}

export default Home
