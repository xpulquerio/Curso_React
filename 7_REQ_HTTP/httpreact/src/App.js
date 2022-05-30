import './App.css';

import { useState, useEffect } from "react";

const url = "http://localhost:3000/products"

function App() {

  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  //1 - resgatando dados
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url)

      const data = await res.json()

      setProducts(data)
    }

    fetchData();

  }, []);

  //2 - add de produtos
  const handleSubmit = async (e) => {

    e.preventDefault();

    const product = {
      name,
      price,
    };

    console.log(product); //comentário

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify(product),
    });
    
    //3 - Carregamento dinâmico
    const addedProduct = await res.json();

    setProducts((prevProducts) => [...prevProducts, addedProduct]);

    setName("");
    setPrice("");
  };


  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name} - {product.price ? ("R$: "+product.price) : ("Sem preço")}</li>
        ))}
      </ul>

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
