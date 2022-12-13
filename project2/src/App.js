import './App.css';
import { useState } from 'react';
import CompraDisco from './Components/CompraDisco';


function App() {
  const discos=[
    {
      nombre:'Disco1',
      color:'yellow',
      precio:50
    }, {
      nombre:'Disco2',
      color:'blue',
      precio:100
    }, {
      nombre:'Disco3',
      color:'darkmagenta',
      precio:150
    }
  ]
  const [total,setTotal] = useState(0);
  return (
    
    
    
    <>
    <h1>Total a pagar: ${total}</h1>
    <div className='cajaCentral'>
    <CompraDisco nombre={discos[0].nombre} color={discos[0].color} precio={discos[0].precio} setTotal={setTotal}/>
    <CompraDisco nombre={discos[1].nombre} color={discos[1].color} precio={discos[1].precio} setTotal={setTotal}/>
    <CompraDisco nombre={discos[2].nombre} color={discos[2].color} precio={discos[2].precio} setTotal={setTotal}/>
    </div>
    </>
      


      

      
    
  );
}

export default App;
