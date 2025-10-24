import React, { useState } from "react";
import { addQuote } from "../services/api"; // updated import

function AddQuote() {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addQuote(text, author); // changed from api.post
    alert("Quote added successfully!");
    setText("");
    setAuthor("");
  };

  return (
    <div className="add-quote">
      <h1>Add New Quote 💬</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Quote text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <button type="submit">Add Quote</button>
      </form>
    </div>
  );
}

export default AddQuote;
