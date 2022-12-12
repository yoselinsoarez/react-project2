import React from 'react'
import imagen1 from '../imagenes/chill.png';



function Cena({nombre,precio,color,setTotal}) {
  const comprar=()=>{
    setTotal()

  }
  return <>
  <div className='emojis' style={{backgroundColor:color}}>
    <h1>{nombre}</h1>
    <img src={imagen1}
      alt='chill'/>
      

    <div className='titulo'></div>
    <div className='precio'>
      {precio}$
      <div>
      <button onClick={comprar}>Comprar</button>
      </div>
    </div>

  </div>
  </>;
}

export default Cena;