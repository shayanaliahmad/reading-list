"use client";

import { useBooks } from "./BooksProvider";

export default function BookList() {
  const { books, status } = useBooks();

  if (status === "loading") return <p>Loading...</p>;
  if (status === "error") return <p className="error">Could not load books.</p>;
  if (books.length === 0) return <p>No books yet.</p>;

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <strong>{book.title}</strong> by {book.author}
        </li>
      ))}
    </ul>
  );
}
