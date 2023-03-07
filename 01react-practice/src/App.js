import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Categories from "./Categories";

function App() {
  return (
    <section className="App">
      <Header className="Header" />
      <Categories />
    </section>
  );
}

export default App;
