import './App.css';
//components
import MyComponent from "./components/MyComponent";
import Title from './components/Title';

import { useState } from "react";


function App() {
  const n = 20;
  const [name] = useState("Ewerson");
  const redTitle = true;
  return (
    <div className="App">
      {/* CSS Global */}
      <h1>React com CSS</h1>
      {/* CSS de Componente */}
      <MyComponent />
      <p>Este parágrafo é do App.js</p>
      {/* INLINE CSS */}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>Este elemento foi estilizado de forma inline</p> {/*Primeira chave é para inserir algo dinâmico e a chave interna é para inserir um objeto */}
      <p style={{ color: "magenta", padding: "25px", borderTop: "2px solid red" }}>Este elemento foi estilizado de forma inline</p> {/*Primeira chave é para inserir algo dinâmico e a chave interna é para inserir um objeto */}
      {/* INLINE CSS dinâmico*/}
      <h2 style={n < 10 ? ({ color: "purple" }) : ({ color: "pink" })}>Este é um estilo dinâmico</h2>
      <h2 style={n > 10 ? ({ color: "purple" }) : ({ color: "pink" })}>Este é um estilo dinâmico</h2>
      <h2 style={name === "Ewerson" ? ({ color: "red", backgroundColor: "#000" }) : (null)}>Ewerson Pulquerio Santos</h2>
    {/*Classe Diâmica*/}
    <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter class dinâmica</h2> 
    {/* CSS Modules */}
    <Title/>
    <h2 className="my_title">Testando</h2>
    </div>
  );
}

export default App;
