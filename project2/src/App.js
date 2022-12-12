import './App.css';
import { useState } from 'react';
import Cena from './Components/Cena';

function App() {
  const emojis=[
    {
      nombre:'Happy',
      color:'yellow',
      precio:50
    }, {
      nombre:'Chill',
      color:'blue',
      precio:100
    }, {
      nombre:'Guiño',
      color:'darkmagenta',
      precio:150
    }
  ]
  const [total,setTotal] = useState(0);
  return (
    
    
    
    <>
    <h1>Total a pagar: ${total}</h1>
    <div className='cajaCentral'>
    <Cena nombre={emojis[0].nombre} color={emojis[0].color} precio={emojis[0].precio} setTotal={setTotal}/>
    <Cena nombre={emojis[1].nombre} color={emojis[1].color} precio={emojis[1].precio} setTotal={setTotal}/>
    <Cena nombre={emojis[2].nombre} color={emojis[2].color} precio={emojis[2].precio} setTotal={setTotal}/>
    </div>
    </>
      


      

      
    
  );
}

export default App;
