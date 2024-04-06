import {useState, useEffect } from "react";
import {createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Book from "./components/book/Book";
import data from "./models/book.json";
import BookList from "./components/book-list/BookList";
import Home from "./pages/Home";
import BookPage from "./pages/BookPage";
import Header from "./components/header/Header";
import Contact from "./pages/Contact";

//this is a Button Component
function Button({ label, buttonClassName }) {
  return <button className={buttonClassName}>{label}</button>;
}

// this creates a delete button
function DeleteButton() {
  return <Button label="Delete" buttonClassName="btn-red" />;
}

// this creates a success button
function SuccessButton() {
  return <Button label="Submit" buttonClassName="btn-success" />;
}
console.log(data.books);
function App() {
  const [books, setBooks] = useState ([]);
  const[searchKeyword, setSearchKeyword] = useState("");
  //crate a state that will handle bookcase

  useEffect(() => {
    const loadBooks = async () => {
      const results = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=food&filter=paid-ebooks&print-type=books&projection=lite`
      ).then((res) => res.json());

      if (!results.error) {
        setBooks(results.items);
      }
    };

    loadBooks();
  }, []);

  const handleBookSearch = async () => {
    const results = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchKeyword}&filter=paid-ebooks&print-type=books&projection=lite`
    ).then((res) => res.json());

    if (!results.error) {
      setBooks(results.items);
    }
  };

  const addBook = (titleParameter) => {
    console.log(titleParameter);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home
          books={books}
          addBook={addBook}
          searchValue={searchKeyword}
          setSearchValue={setSearchKeyword}
          searchBook={handleBookSearch}
        />
      ),
    },
    {
      path: "/bookcase",
      element: <BookPage />,
    },
    {
      path: "/contact",
      element: <Contact/>
    }
  ]);

  return (
    
        <RouterProvider router={router} />
    
    );
}

export default App;
