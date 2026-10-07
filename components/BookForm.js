"use client";

import { useState } from "react";
import { useBooks } from "./BooksProvider";

export default function BookForm() {
  const { addBook } = useBooks();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim() || !author.trim()) {
      setError("Enter both a title and an author.");
      return;
    }

    try {
      await addBook({ title, author });
      setTitle("");
      setAuthor("");
      setError("");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit">Add</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}
