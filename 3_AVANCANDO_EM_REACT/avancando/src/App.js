//import logo from './logo.svg';
import City from './assets/city.jpg';
import { useState } from 'react';


//Components
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFuncion from './components/ExecuteFuncion';
import Message from './components/Message';


//
import './App.css';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';


function App() {
  const name = "João";
  const [userName] = useState("Joaquim");
  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "Fiat", color: "Branca", newCar: true, km: 0 },
    { id: 3, brand: "Hyundai", color: "Vermelha", newCar: false, km: 100000 },
    { id: 4, brand: "Renault", color: "Cinza", newCar: false, km: 50000 },
  ];
  const users = [
    {id:0, nome : "Ewerson", idade:26, profissao:"Servidor Público" },
    {id:1, nome : "Janiele", idade:27, profissao:"Tabeliã Substituta" },
    {id:2, nome :"Fulano", idade:17, profissao:"Desempregado" },
    {id:3, nome : "Cricrano", idade:15, profissao:"Desempregado" }]
  const [message, setMessage] = useState("Mensagem Original");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  function showMessage() {
    console.log("Evento do componente pai");
  }

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
          key={car.id}
          brand={car.brand}
          km={car.km}
          color={car.color}
          newCar={car.newCar} />

      ))}
      {/* Trabalando com Fragments */}
      <Fragments propFragment="teste" />
      {/* Children */}
      <Container myValue="teste">
        <div>
          Este é o conteúdo! Nossa!
        </div>
      </Container>
      <Container myValue="teste2">
        <div>
          Testando o container
        </div>
      </Container>
      {/* Executar função */}
      <ExecuteFuncion myFunction={showMessage} />
      {/*State lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {/*Desafio 4*/}
      {users.map((user) => (
        <UserDetails 
        key = {user.id} 
        nome={user.nome} 
        idade={user.idade} 
        profissao={user.profissao} />

      ))}

    </div>
  );
}

export default App;
