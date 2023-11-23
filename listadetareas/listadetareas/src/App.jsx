
import './App.css'

import { useState } from 'react'


const tareasInicio =[
      {id: 1, nombre:'limpiar' , estado: 'terminada'},
      {id: 2, nombre:'dormir' , estado: 'pendiente'},
    ]
function App() {
 const [tareas, setTareas]= useState (tareasInicio)
  return (


<>
<h1>Lista de tareas</h1>
<taskForm/>
<taskList/>
   
    </>
  )
}

function taskForm(){
return
<>
(<form>
  <input />
  <button></button>
</form>

)
</>
}



export default App
