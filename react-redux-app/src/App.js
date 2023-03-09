import "./App.css";
import Counter from "./components/Counter";

const style = {
  textAlign: "center",
  color: "red",
};

function App() {
  return (
    <div style={style}>
      <h1>Welcome to REdux.</h1>
      <br />
      <Counter />
    </div>
  );
}
export default App;
