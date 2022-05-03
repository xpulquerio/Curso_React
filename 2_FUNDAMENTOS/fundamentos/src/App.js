//Components
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import MyComponent from './components/MyComponent';

//Syles / CSS
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>FUNDAMENTOS</h1>
      Componente principal 1:<FirstComponent/><br></br>
      Componente principal 2:<TemplateExpressions/><br></br>
      Componente principal 3:<MyComponent/><br></br>    
    </div>
  );
}

export default App;
