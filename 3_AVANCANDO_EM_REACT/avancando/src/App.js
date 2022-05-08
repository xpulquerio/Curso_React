//import logo from './logo.svg';
import City from './assets/city.jpg';
import { useState } from 'react';


//Components
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';


//
import './App.css';


function App() {
  const name = "João";
  const [userName] = useState("Joaquim");
  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "Fiat", color: "Branca", newCar: true, km: 0 },
    { id: 3, brand: "Hyundai", color: "Vermelha", newCar: false, km: 100000 },
    { id: 4, brand: "Renault", color: "Cinza", newCar: false, km: 50000 },
  ];

  return (
    <div className="App">
      <h1>Avançando nos Fundamentos React</h1>
      {/*Imagem em public*/}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/*Imagem em assets*/}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/*props*/}
      <ShowUserName name1="Ewerson" name2={name} name3={userName} />
      {/*destructuring*/}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false} />
      {/* Reaproveitamento */}
      <CarDetails brand="Ford" km={0} color="Red" newCar={true} />
      <CarDetails brand="Fiat" km={200000} color="Yellow" newCar={false} />
      {/*Loop com array de objetos*/}
      {cars.map((car) => (
        <CarDetails 
        brand={car.brand} 
        km={car.km} 
        color={car.color} 
        newCar={car.newCar} />
        
      ))}

    </div>
  );
}

export default App;
