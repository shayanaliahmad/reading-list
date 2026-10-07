# Reading List

A small reading list app built with Next.js and React, made to practise the front-end stack: components, state, and talking to a REST API.

**Live demo:** (https://reading-list-sigma-three.vercel.app/)

<img width="1250" height="1036" alt="image" src="https://github.com/user-attachments/assets/99a69817-812c-4ec4-b647-231a39ab7d5b" />


## What it does

- Shows a list of books loaded from an API when the page opens
- Lets you add a book with a title and author
- Shows loading, error and empty states
- Checks the input in the browser and again on the server

## Built with

- Next.js (App Router) and React
- JavaScript (ES6+), HTML and CSS
- A Next.js route handler as the REST API (`GET` and `POST /api/books`)
- React Context API to share the book list between components

## How it works

| File | What it does |
|---|---|
| `app/api/books/route.js` | The API: returns the book list and saves new books, with validation |
| `components/BooksProvider.js` | Context that fetches the books and holds the shared list |
| `components/BookForm.js` | The form, using `useState` for the inputs and error message |
| `components/BookList.js` | Displays the list and the loading and error states |
| `app/page.js` | Puts the provider, form and list together |

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Limitations

- Books are stored in server memory, so they reset when the server restarts, and may not persist reliably on the live demo. A real version would use a database such as Postgres.
- No authentication, and no way to edit or delete a book.
