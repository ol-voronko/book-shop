import { useBook } from "../context/useBook";
import "./book-list.css"
import BookItem from "./book-item";
import useAuthRedirect from "../context/useAuthRedirect";

export default function BookList({ setBooks }) {
  useAuthRedirect();
  const books = useBook();
  return (
    <div class="wrapper">
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}
