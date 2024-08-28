import { useState, useEffect } from "react";
import AddRecipe from "./components/AddRecipe";
import DeleteRecipe from "./components/DeleteRecipe";

function App() {
  const [lista, setLista] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:4000", {
          method: "GET",
        });
        const result = await res.json();
        console.log(result);

        setLista(result);
      } catch (error) {
        console.log("ERROR", error);
      }
    }
    fetchData();
  }, []);

  if (lista) {
    return (
      <div>
        <AddRecipe />
        <DeleteRecipe />
      </div>
    );
  } else
    return (
      <div>
        <h1>Not lista loaded</h1>
      </div>
    );
}

export default App;
