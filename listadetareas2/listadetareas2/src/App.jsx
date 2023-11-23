import { useState, useEffect } from 'react'

 const tareaInicial = 
[{id: 1, tarea: "limpiar", estado: "rechazar"},
{id: 2, tarea: "estudiar", estado: "hecho"},
{id: 3, tarea: "caminar", estado: "pendiente"},

]

function App() {
 const [tareas, setTareas]= useState (tareaInicial)

function agregar (tarea){
  console.log ("agregando ", tarea)
  //agregar una tarea
}

  return (
    <>
      <h1>lista de tareas</h1>
    <TaskForm alAgregar= {agregar} />
    <TaskList tareas= {tareas} />
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
function TaskList ({tareas}){
return(
<ul>
{tareas.map(tare => <TaskItem key= {tare.id} tare = {tare}   />) }
</ul>

)
}

function TaskItem ( { tare} ){
return (
  <li>
    <span>{tare.tarea}</span>
    <span>{tare.estado}</span>
  </li>
)

}


export default App
