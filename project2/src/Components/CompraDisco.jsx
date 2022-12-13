import React from 'react'




function CompraDisco({nombre,precio,color,setTotal}) {
  const comprar=()=>{
    setTotal((elementos) => elementos+precio);

  }
  return <>
  <div className='discos' style={{backgroundColor:color}}>
    <h1>{nombre}</h1>
    
      

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

export default CompraDisco;