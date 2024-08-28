import { useState } from "react";

export default function DeleteRecipe() {
  const [idInput, setIdInput] = useState("");
  const [result, setResult] = useState(null);

  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(`http://localhost:4000/recipes/${idInput}`, {
        method: "DELETE",
      });
      if (res.ok) {
        console.log(res.status);
        setResult("Deleted");
      } else {
        setResult("Failed");
      }
    } catch (error) {
      console.log(error);
    } finally {
      event.target.reset();
    }
  };
  return (
    <div>
      <form onSubmit={handleDelete}>
        <label> Recipe Id:</label>
        <input
          type="number"
          onChange={(e) => setIdInput(e.target.value)}
          required
        ></input>
        <button type="submit">Delete</button>
      </form>
      {result && <p>Deleted: {result}</p>}
    </div>
  );
}
