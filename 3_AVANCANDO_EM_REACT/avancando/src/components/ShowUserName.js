import React from 'react'

const ShowUserName = (props) => {
  return (
    <div>
        <h2>Nome de usuário mandando direto: {props.name1}</h2>
        <h2>Nome de usuário mandando pela variável: {props.name2}</h2>
        <h2>Nome de usuário mandando pelo useState: {props.name3}</h2>

    </div>
  )
}

export default ShowUserName