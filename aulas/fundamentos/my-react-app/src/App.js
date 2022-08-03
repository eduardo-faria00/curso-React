//componets
import FirstComponent from './components/FirstComponent';
import TemplateExpression from './components/TemplateExpression';
import Events from './components/Events';
import Challenge from './components/Challenge';
// styles / css
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent/>
      <TemplateExpression/>
      <Events/>
      <Challenge/>
    </div>
  );
}

export default App;
