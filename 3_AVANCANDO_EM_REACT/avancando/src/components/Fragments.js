import React from 'react'

const Fragments = ({propFragment}) => {
  return (
    //Fazer isso não polui o elemento pai
    <>
        <h2>Primeiro Título</h2>
        <h3>Segundo Título</h3>
        <h4>{propFragment}</h4>
    </>
  )
}

export default Fragments