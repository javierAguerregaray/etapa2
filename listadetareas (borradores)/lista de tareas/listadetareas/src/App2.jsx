import { useState } from 'react'
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: '', completed: false },
  ]);

  const addTask = (text) => {
    setTasks([...tasks, { id: tasks.length + 1, text, completed: false }]);
  };

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <h1>Lista de tareas UTN etapa 2</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            {task.text}
            <button onClick={() => toggleTask(task.id)}>
              {task.completed ? 'Desmarcar' : 'Marcar'}
            </button>
            <button onClick={() => deleteTask(task.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Nueva tarea"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              addTask(e.target.value);
              e.target.value = '';
            }
          }}
        />
        <button onClick={() => addTask(document.querySelector('input').value)}>
          Agregar Tarea
        </button>
      </div>
    </div>
  );
};

export default App;