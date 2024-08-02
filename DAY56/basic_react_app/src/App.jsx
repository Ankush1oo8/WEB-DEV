import "./App.css";
import Title from "./Title";

function App() {
  let name="Ankush"
  return (
    <div>
      <Title></Title>
      <h1>{name.toUpperCase()}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
        voluptate, minus dicta culpa neque, corrupti fugit officiis voluptatum
        delectus blanditiis, iusto quis quia modi itaque repudiandae. Iusto
        reprehenderit atque consectetur!
      </p>
      <p>2*2={2*2}</p>
      <button>HELLO</button>
    </div>
  );
}

export default App;
