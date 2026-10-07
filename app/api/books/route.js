import { NextResponse } from "next/server";

const books = [
  { id: 1, title: "Pride and Prejudice", author: "Jane Austen" },
  { id: 2, title: "Frankenstein", author: "Mary Shelley" },
];
let nextId = 3;

export async function GET() {
  return NextResponse.json(books);
}

export async function POST(request) {
  const { title, author } = await request.json();

  if (!title?.trim() || !author?.trim()) {
    return NextResponse.json(
      { error: "Title and author are required." },
      { status: 400 }
    );
  }

  const book = { id: nextId++, title: title.trim(), author: author.trim() };
  books.push(book);
  return NextResponse.json(book, { status: 201 });
}
