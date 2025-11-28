// x mirko 

// ESERCIZIO spostare tutto quello scritto nello script html in script.jsx usando sinstassi jsx

// come sempre prendo l'id del root
const rootElem = document.getElementById("root");

// e ci creo il DOM
const root = ReactDOM.createRoot(rootElem);

// creo la funzione app con l'h1 e props in input (possibilita di inserire altri tag html)
function App(props) {
  return (
    <main className="main">
      <h1>MAIN</h1>
        {props.children}
    </main>
  );
}

// lista 
function Lista() {
  return (
    <ul>
      <li>PHP</li>
      <li>HTML</li>
      <li>ANGULAR</li>
    </ul>
  );
}

// con .render inietto app e lista nel DOM
root.render(
  <App>
    <Lista></Lista>
  </App>
);
