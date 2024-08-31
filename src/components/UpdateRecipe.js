import React from "react";

export default function UpdateRecipe() {
  const [id, setId] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const handleUpdate = async (event) => {};

  return (
    <div>
      <form>
        <label>Recipe Id:</label>
        <input type="number" onChange={(e) => setId(e.target.value)} required />
        <label>New Title:</label>
        <input
          type="text"
          required
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <button type="submit">Edit</button>
      </form>
    </div>
  );
}
