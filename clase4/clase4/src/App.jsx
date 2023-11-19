import { useState } from 'react'
import './App.css'




function App3() {
 
  const [count3, setCount] = useState(0)

  return (
    <>   
      <h2>candidato 2</h2>
      <div className="card">
        <button onClick={() => setCount((count3) => count3 + 1)}>
          +
        </button>
        <button onClick={() => setCount((count3) => count3 - 1)}>
          -
        </button>
        <div>cantidad de votantes  <p>candidato 2</p> <h1>{count3}</h1></div>


        <p>
     
        </p>
      </div>

      <p className="read-the-docs">
        Trabajo práctico UTN - etapa 2
      </p>
    </>
  )
}



export default App3

