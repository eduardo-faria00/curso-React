import './App.css';
import Card from './components/Card';
import MyComponent from './components/MyComponent';
import {useState} from 'react'

function App() {
  const stl = 10
  const [stls, setStls] = useState(true)
  
  const changeClass = () => {
    setStls(!stls)
  }

  return (
    <div className="App">
      <h1>React com CSS</h1>
      <button>CSS global</button>
      <MyComponent/>
      {/* inline style */}
      <p style={{color: 'red', backgroundColor: 'black'}}>Este elemento foi estilizado de forma inline. Não faça isso.</p>
      {/* inline style dinâmico */}
      <p style={stl > 10 ? {color: 'pink', backgroundColor: 'black'} : {color: 'black', backgroundColor: 'pink'}}>inline style dinâmico</p>
      {/* classes dinâmicas */}
      <button onClick={changeClass} className={stls ? 'btn-azul' : 'btn-verde'}>Mudar classes</button>
      {/* CSS modules */}
      <Card/>
    </div>
  );
}

export default App;
