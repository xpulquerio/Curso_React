import './App.css';
//components
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      {/* Começando a trabalhar com formulários*/}
    <h2>Forms</h2>
    <MyForm user={{name: "Ewerson", email: "pulquerio.x@gmail.com", descricao: "Sou um advogado", role: 'admin'}} />
    </div>
  );
}

export default App;
