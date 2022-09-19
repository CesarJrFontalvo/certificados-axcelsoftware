import React from 'react'

const PlantillaPdf = ({data}) => {
  return (
    <div className='container'>
  
    <div className='row text-center'>
        <h1>{data.titulo}</h1>
    </div>

    <div>{data.contenido}</div>
</div>
  )
}

export default PlantillaPdf