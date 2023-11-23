import { useState, useEffect } from 'react'

 const tareaInicial = 
[{id: 1, tarea: "limpiar", estado: "rechazar"},
{id: 2, tarea: "estudiar", estado: "hecho"},
{id: 3, tarea: "caminar", estado: "pendiente"},

]

function App() {
  const [proximoId, setProximoId]= useState(4)
 const [tareas, setTareas]= useState (tareaInicial)

//agrega una tarea
function agregar (tarea){

  
  const nuevo = {
    id: proximoId,
    tarea,
    estado:"pendiente"
  }
  setTareas([... tareas, nuevo])
  setProximoId(proximoId+1)
}
//cambia el estado
function cambiar (id) {
const actual = tareas.find(tare => tare.id === id)
const nuevo = {...actual, estado: actual.estado+"1"} 
const nuevos = tareas.map(tare => tare.id === id ? nuevo:tare)
setTareas(nuevos)  
}
//borra una tarea
function borrar (id) {
const nuevos =tareas.filter(tare => tare.id !== id)  
setTareas(nuevos)

}



  return (
    <>
      <h1>lista de tareas</h1>
    <TaskForm alAgregar= {agregar} />
    <TaskList tareas= {tareas} alCambiar={cambiar} alBorrar={borrar} />
    </>
  )

}

function TaskForm ({alAgregar}){
  const [tarea, setTarea] =useState ("")

  function cambiar (evento) {
    setTarea(evento.target.value)
  }

  function agregar (evento){
alAgregar(tarea)
setTarea("")
evento.preventDefault()

  }
return (
  <form >
<input type="text" value={tarea} onChange={cambiar} placeholder='ingrese tarea'/>
<button onClick={agregar}>agregar</button>

  </form>
)

}
function TaskList ({tareas, alCambiar, alBorrar}){
return(
<ul>
{tareas.map(tare =>
   <TaskItem   
   key= {tare.id} 
   tare = {tare} 
   alCambiar={alCambiar}
   alBorrar={alBorrar}

   />) }
</ul>

)
}

function TaskItem ( { tare, alCambiar, alBorrar} ){
return (
  <li>
    <span>{tare.tarea}</span>
    <span>{tare.estado}</span>
    <label for="estado"></label>
      <select name="estado" id="estado">
        <option value="hecho">Hecho</option>
        <option value="pendiente">Pendiente</option>
        <option value="rechazada">Rechazada</option>
              </select>
    <button onClick={() => alCambiar(tare.id)}>modificar estado</button>
    <button onClick={() => alBorrar(tare.id)}>eliminar tarea</button>
  </li>
)

}


export default App
