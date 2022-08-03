// components
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import Conditional from './components/Conditional';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';

// importando a imagem de assets
import logo from './assets/logo512.png'
import './App.css';

function App() {
  const name = 'Esther'

  const cars = [
    { id: 1, brand: 'ferrari', km: 0, color: 'vermelho' },
    { id: 2, brand: 'VW', km: 1500, color: 'prata' },
    { id: 3, brand: 'Fiat', km: 2300, color: 'cinza' },
  ]

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      <>
        {/* Adicionando imagens de public */}
        <img src="/logo192.png" alt="logo react" />
        {/* Adicionando imagens de assets */}
        <img src={logo} alt="" />
      </>
      <ManageData />
      <ListRender />
      <Conditional />
      <ShowUserName name={name} />
      <CarDetails brand='Audi' km={0} color='azul' />
      {/* reutilização de CarDetails */}
      <CarDetails brand='BMW' km={1000} color='preto' />
      <CarDetails brand='Mercedes' km={2000} color='branco' />
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails 
          key={car.id} 
          brand={car.brand} 
          km={car.km} 
          color={car.color} />
      ))}
    </div>
  );
}

export default App;
