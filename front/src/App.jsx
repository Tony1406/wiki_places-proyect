import React from 'react';
import './App.css';

function App() {
  const handleClick = async () => {
    try {
      const response = await fetch('http://localhost:5000/registro', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      alert(JSON.stringify(data, null, 2)); // Muestra el registro en una alerta
    } catch (error) {
      console.error('Error al conectar con la API:', error);
    }
  };

  return (
    <div className="container">
      <button onClick={handleClick}>
        Obtener Registro
      </button>
    </div>
  );
}

export default App;
