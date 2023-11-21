import { useState } from 'react'
import './App.css'

function App() {

  const [list, setList] = useState ([  ])
const [value, setValue] = useState("")

return (
<div className='App'>
<input value ={value} onChange={(e) => setValue(e.target.value)}/>
<button onClick={()=> { setList([...list, value]); setValue ("")}}>+</button>
<hr />
<ul>
{
list.map ((l, li) =>


<li key={l.number}>
  <input type="checkbox" />
  <span>(l)</span>
<button onClick={()=>setList(list.filter(x => x !==l )) }>x</button>
</li>
)

}

</ul>
</div>


)

}

export default App;