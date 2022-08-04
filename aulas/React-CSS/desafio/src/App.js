import Card from './components/Card';

import './App.css';

function App() {
  const cars=[
    {name: 'monza', km: 999999, color: 'vermelho'},
    {name: 'corsa', km: 150000, color: 'prata'},
    {name: 'gol', km: 20000, color: 'branco'},
    {name: 'chevette', km: 9999, color: 'preto'}
  ]

  return (
    <div className="App">
      <h1>Desafio</h1>
      <div className="cards">
      {cars.map((car)=>(
        <Card car={car}/>
      ))}
      </div>
    </div>
  );
}

export default App;
