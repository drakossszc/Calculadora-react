import { useState } from "react";

function App() {
  const [display, setDisplay] = useState("");

  const agregar = (valor) => {
    setDisplay(display + valor);
  };

  const calcular = () => {
    try {
      // Evalúa la operación matemática
      const resultado = Function(`"use strict"; return (${display})`)();
      setDisplay(String(resultado));
    } catch {
      setDisplay("Error");
    }
  };

  const limpiar = () => {
    setDisplay("");
  };

  const borrar = () => {
    setDisplay(display.slice(0, -1));
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#1e1e2f",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "300px",
          padding: "20px",
          background: "#2c2c3e",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          Calculadora
        </h2>

        <input
          type="text"
          value={display}
          readOnly
          placeholder="0"
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "15px",
            marginBottom: "15px",
            fontSize: "24px",
            textAlign: "right",
            border: "none",
            borderRadius: "10px",
            background: "#181824",
            color: "white",
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "10px",
          }}
        >
          <button onClick={limpiar}>C</button>
          <button onClick={borrar}>⌫</button>
          <button onClick={() => agregar("%")}>%</button>
          <button onClick={() => agregar("/")}>÷</button>

          <button onClick={() => agregar("7")}>7</button>
          <button onClick={() => agregar("8")}>8</button>
          <button onClick={() => agregar("9")}>9</button>
          <button onClick={() => agregar("*")}>×</button>

          <button onClick={() => agregar("4")}>4</button>
          <button onClick={() => agregar("5")}>5</button>
          <button onClick={() => agregar("6")}>6</button>
          <button onClick={() => agregar("-")}>−</button>

          <button onClick={() => agregar("1")}>1</button>
          <button onClick={() => agregar("2")}>2</button>
          <button onClick={() => agregar("3")}>3</button>
          <button onClick={() => agregar("+")}>+</button>

          <button
            onClick={() => agregar("0")}
            style={{ gridColumn: "span 2" }}
          >
            0
          </button>

          <button onClick={() => agregar(".")}>.</button>

          <button
            onClick={calcular}
            style={{
              background: "#6366f1",
              color: "white",
            }}
          >
            =
          </button>
        </div>

        <style>{`
          button {
            padding: 15px;
            font-size: 18px;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            background: #44445a;
            color: white;
            transition: 0.2s;
          }

          button:hover {
            background: #5a5a75;
          }

          button:active {
            transform: scale(0.95);
          }
        `}</style>
      </div>
    </div>
  );
}

export default App;