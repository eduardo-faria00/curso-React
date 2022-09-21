import { useContext } from "react"
import ChangeCounter from "../components/ChangeCounter"
import { CounterContext } from "../context/CounterContext"

const About = () => {
  const {counter} = useContext(CounterContext)

  return <div>
    <h1>About</h1>
    <p>valor do contador: {counter}</p>
    <ChangeCounter/>
  </div>
}

export default About
