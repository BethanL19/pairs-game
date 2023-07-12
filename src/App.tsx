import { Pairs } from "./pairs";
import "./style.css";

function App(): JSX.Element {
  return (
    <>
      <h1 className="title">Pairs Game</h1>
      <div className="grid">
        <Pairs />
      </div>
    </>
  );
}

export default App;
