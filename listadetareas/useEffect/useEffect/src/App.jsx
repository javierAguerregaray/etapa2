import React, { useState, useEffect } from 'react';

function ListaTachable() {
  const [elementos, setElementos] = useState([
    { id: 1, texto: 'Elemento 1', tachado: false },
    { id: 2, texto: 'Elemento 2', tachado: false },
    { id: 3, texto: 'Elemento 3', tachado: false }
  ]);

  useEffect(() => {
    // Manipular el estilo para tachar el texto
    elementos.forEach(elemento => {
      const elementoDom = document.getElementById(`elemento-${elemento.id}`);
      if (elementoDom) {
        if (elemento.tachado) {
          elementoDom.style.textDecoration = 'line-through';
        } else {
          elementoDom.style.textDecoration = 'none';
        }
      }
    });

    // Devolver una función de limpieza (opcional)
    return () => {
      // Realizar tareas de limpieza si es necesario
    };
  }, [elementos]); // El efecto se ejecutará cuando elementos cambie

  const toggleTachado = () => {
    setElementos(prevElementos => {
      return prevElementos.map(elemento =>
        ({ ...elemento, tachado: !elemento.tachado })
      );
    });
  };

  return (
    <div>
      <ul>
        {elementos.map(elemento => (
          <li
            key={elemento.id}
            id={`elemento-${elemento.id}`}
          >
            {elemento.texto}
          </li>
        ))}
      </ul>
      <button onClick={toggleTachado}>Toggle Tachado</button>
    </div>
  );
}

export default ListaTachable;


