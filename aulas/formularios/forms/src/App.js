import './App.css';
import MyForm from './components/MyForm';
import { useState } from 'react'

function App() {
  
  return (
    <div className="App">
      <h1>Formulários</h1>
      <MyForm user={{name: 'Eduardo', email: 'edu@gmail.com'}}/>
    </div>
  );
}

export default App;
