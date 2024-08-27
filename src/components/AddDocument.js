import React from "react";

export default function AddDocument() {
  const addDocumentHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={addDocumentHandler}>
        <h1> Add New Document</h1>
        <label for="title" type="text">
          Title
        </label>
        <input id="title" type="text"></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
