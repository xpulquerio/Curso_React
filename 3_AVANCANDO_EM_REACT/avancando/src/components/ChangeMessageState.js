import React from 'react'

const ChangeMessageState = ({handleMessage}) => {
    const messages = ["Oi", "Olá", "Oi, tudo bem?"]
  return (
    <div>
        <button onClick={() => handleMessage(messages[0])}>Número 1</button>
        <button onClick={() => handleMessage(messages[1])}>Número 2</button>
        <button onClick={() => handleMessage(messages[2])}>Número 3</button>
    </div>
  )
}

export default ChangeMessageState