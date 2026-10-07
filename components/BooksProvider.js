"use client";

import { createContext, useContext, useEffect, useState } from "react";

const BooksContext = createContext(null);

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    fetch("/api/books")
      .then((res) => {
        if (!res.ok) throw new Error("Request failed");
        return res.json();
      })
      .then((data) => {
        setBooks(data);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
  }, []);

  async function addBook(book) {
    const res = await fetch("/api/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error);
    setBooks((prev) => [...prev, data]);
  }

  return (
    <BooksContext.Provider value={{ books, status, addBook }}>
      {children}
    </BooksContext.Provider>
  );
}

export function useBooks() {
  return useContext(BooksContext);
}
