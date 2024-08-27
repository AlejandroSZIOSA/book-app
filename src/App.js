import { useState, useEffect } from "react";
import AddDocument from "./components/AddDocument";

function App() {
  const [lista, setLista] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/", {
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

  return <div>{lista ? <AddDocument /> : <h1>Not lista loaded</h1>}</div>;
}

export default App;
