import React, { useState } from "react";

export default function AddRecipe() {
  const [title, setTitle] = useState("");
  const [result, setResult] = useState(null);

  //Arrow Function Async
  const handleAddRecipe = async (event) => {
    event.preventDefault();
    const data = { title: title };
    try {
      const res = await fetch("http://localhost:4000/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(res.status); //200 okay
      const result = " Success";
      setResult(result);
    } catch (error) {
      console.error(error);
    } finally {
      setTitle("");
      /* event.target.reset() */
    }
  };

  return (
    <div>
      <form onSubmit={handleAddRecipe}>
        <h1> Add New Recipe</h1>
        <label for="title" type="text">
          Title
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <button type="submit">Add</button>
      </form>
      {result && <p>Posted:{result}</p>}
    </div>
  );
}
