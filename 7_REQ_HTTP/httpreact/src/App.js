import './App.css';

import { useState, useEffect } from "react";
// 4 - custom hook
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products"

function App() {



  //4 - custom hook

  const { data: items, httpConfig, loading } = useFetch(url) //renomeando como items.

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  //1 - resgatando dados
  //    useEffect(() => {
  //    async function fetchData() {
  //     const res = await fetch(url)
  //
  //      const data = await res.json()
  //
  //       setProducts(data)
  //}
  //
  //fetchData();
  //
  //}, []);

  //2 - add de produtos
  const handleSubmit = async (e) => {

    e.preventDefault();

    const product = {
      name,
      price,
    };

    //    const res = await fetch(url, {
    //      method: "POST",
    //      headers: {
    //        "content-Type": "application/json"
    //      },
    //      body: JSON.stringify(product),
    //    });
    //
    //    //3 - Carregamento dinâmico
    //    const addedProduct = await res.json();
    //
    //    setProducts((prevProducts) => [...prevProducts, addedProduct]);

    //5 - refatorando post

    httpConfig(product, "POST");

    setName("");
    setPrice("");
  };


  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {/* 6 - loading */}
      {loading && <p>Carregando dados...</p>}
      {!loading &&
        <ul>
          {items && items.map((product) => ( //Se não for null, imprime os itens!
            <li key={product.id}>{product.name} - {product.price ? ("R$: " + product.price) : ("Sem preço")}</li>
          ))}
        </ul>
      }

      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="text"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <input type="submit" value="Criar" />
        </form>

      </div>

    </div>
  );
}

export default App;
