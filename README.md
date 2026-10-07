# Reading List

A small reading list built with Next.js (App Router) and React.

## What it demonstrates

- React components and `useState` for form state
- `useEffect` to fetch data from a REST API when the page loads
- Context API (`BooksProvider`) to share the book list between the form and the list
- Next.js route handler (`app/api/books/route.js`) with `GET` and `POST`
- Loading, error and empty states; basic validation on client and server

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Limitations

- Books are stored in server memory and reset when the server restarts. A real version would use a database.
- No authentication, and no edit or delete.
