import "./App.css";
import Header from "./Header";
import Categories from "./Categories";
import { useState } from "react";

function App() {
  const [name, setName] = useState("Dave");
  const nameChange = () => {
    const names = ["David", "Josh", "Randy", "Brad"];
    const int = Math.floor(Math.random() * 4);
    setName(names[int]);
  };

  return (
    <section className="App">
      <Header className="Header" />
      <Categories nameChange={nameChange} name={name} />
    </section>
  );
}

export default App;
