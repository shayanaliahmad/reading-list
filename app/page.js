import { BooksProvider } from "../components/BooksProvider";
import BookForm from "../components/BookForm";
import BookList from "../components/BookList";

export default function Home() {
  return (
    <BooksProvider>
      <h1>Reading List</h1>
      <BookForm />
      <BookList />
    </BooksProvider>
  );
}
