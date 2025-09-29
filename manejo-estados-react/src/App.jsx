import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Manejo de Estados en React</h1>
      <p>Has hecho clic {count} veces</p>
      <button onClick={() => setCount(count + 1)}>Sumar</button>
      <button onClick={() => setCount(count - 1)}>Restar</button>
      <button onClick={() => setCount(0)}>Reiniciar</button>
    </div>
  );
}

export default App;
