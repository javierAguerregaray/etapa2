import { useState } from 'react'
import './App.css'

function App() {

  const [list = string, setList] = React.useState  (["hola"]);
const [value = string, setValue] = React.useState ("hola");



//const [filtro, setFiltro] = React.useState('');
//const [contactos, setContactos] = React.useState([]);

return (
<div className='App'>
<input value ={value} onChange={(e) => setValue(e.target.value)}/>
<button onClick={()=> { setList([...list, value]); setValue ("")}}>agregar</button>
<hr />
<ul>
{
list.map ((l, li) =>


<li key={l.number}>
  <input type="checkbox" />
  <span>(l)</span>
<button onClick={()=>setList(list.filter(x => x !==l )) }>eliminar</button>
</li>
)

}

</ul>
</div>


)

}

export default App;