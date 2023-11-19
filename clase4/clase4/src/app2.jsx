import { useState } from 'react'
import './App.css'



function App2() {
  const [count2, setCount] = useState(0)
 
  return (
    <>   
      <h2>candidato 1</h2>
      <div className="card">
        <button onClick={() => setCount((count2) => count2 + 1)}>
          +
        </button>
        <button onClick={() => setCount((count2) => count2 - 1)}>
          -
        </button>
               <div>cantidad de votantes  <p>candidato 1</p> <h1>{count2}</h1></div>

        
      </div>
      
    </>
  )
}




export default App2