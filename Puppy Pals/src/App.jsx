import "./App.css";
import { puppyList } from "./data.js";
import { useState } from "react";
function App() {
  console.log("puppyList: ", puppyList);
  const [puppies, setPuppies] = useState(puppyList);
  return (
    <div className="App">
      {puppies.map((puppy) => {
        return <p key={puppy.id}>{puppy.name}</p>;
      })}
    </div>
  );
}

export default App;
