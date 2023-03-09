import "./App.css";
import Counter from "./components/Counter";
import Products from "./components/Products";
function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "red" }}>Redux-ToolKit</h1>
      <Counter />
      <Products />
    </div>
  );
}
export default App;
