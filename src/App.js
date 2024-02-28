import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { BookProvider } from "./components/context/useBook";
import { getBooks } from "./api/api";
// import { useBook } from "./components/context/useBook";
// import { ThemeProvider, createTheme } from "@mui/material";

import { amber } from "@mui/material/colors";
import { UserProvider } from "./components/context/useUser";

const BookList = lazy(() => import("./components/book-list/book-list"));
const SignIn = lazy(() => import("./components/sign-in/sign-in"));
const ShoppingCart = lazy(() =>
  import("./components/shopping-cart/shopping-cart")
);
const Book = lazy(() => import("./components/specific-book/specific-book"));
const NotFound = lazy(() => import("./components/notFound/not-found"));


// const theme = createTheme({
//   palette: {
//     primary: {
//       main:  amber[50],
//       main: '#3f50b5',
//       dark: '#002884',
//       contrastText: '#fff',
//     },
//     secondary: {
//       light: '#ff7961',
//       main: '#f44336',
//       dark: '#ba000d',
//       contrastText: '#000',
//     },
//   }
// })

function App() {
  const [books, setBooks] = useState([]);
  const [username, setUsername] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    async function requestBooks() {
      const booksData = await getBooks();
      setBooks(booksData);
    }
    requestBooks();
  }, []);

  useEffect(()=>{navigate("/signin")},[])

  return (
    <div>
      {/* <ThemeProvider theme={theme}> */}
      <UserProvider value={{ username, setUsername }}>
        <Header  setUsername={setUsername} />
        <Suspense fallback={<h2>Wait,loading...</h2>}>
          <BookProvider value={books}>
            <Routes>
              <Route
                exact
                path="/signin"
                element={<SignIn setUsername={setUsername} />}
              />
              <Route path="/books" element={<BookList setBooks={setBooks} />} />
              <Route path="/cart" element={<ShoppingCart />} />
              <Route path="/books/:id" element={<Book />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BookProvider>
        </Suspense>
      </UserProvider>
      <Footer />
      {/* </ThemeProvider> */}
    </div>
  );
}


export default App;
