import './App.css';
import CarDetails from './components/CarDetails'

function App() {
  const cars = [
    { id: 1, nome: "Kwid", marca: "Renault", preco: 59090 },
    { id: 2, nome: "Gol", marca: "Volkswagen", preco: 72690 },
    { id: 3, nome: "HB20", marca: "Hyundai", preco: 71190 },
    { id: 3, nome: "Argo", marca: "Fiat", preco: 70447 },
  ];
  return (
    <div className="App">
      <h2>Lista de Carros:</h2>
      <div className="car-container">
      {cars.map((car) => (
        <CarDetails 
        id = {car.id}
        nome = {car.nome}
        marca = {car.marca}
        preco = {car.preco}/>
      ))}
      </div>
    </div>
  );
}

export default App;
