import { createContext, useState } from 'react'

export const CounterContext = createContext()

// criando provider
export const CounterContextProvider = ({ children }) => {
  const [counter, setCounter] = useState()

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  )
}
