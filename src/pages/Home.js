import BookList from "../components/book-list/BookList";
import Header from "../components/header/Header";
import Search from "../components/search/Search";

function Home({ books, addBook, searchValue, setSearchValue, searchBook }) {
  return (
    <div>
      <Header/>
      <Search searchValueProps={searchValue} setSearchValueProps={setSearchValue} searchBookProps={searchBook} />
      <BookList booksProps={books} addBook={addBook} />
    </div>
  );
}

export default Home;