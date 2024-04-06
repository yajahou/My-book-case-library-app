function Search({searchValueProps, setSearchValueProps, searchBookProps}) {
    const handleSubmit = (event) => {
        event.preventDefault();
    
        // function that will update the book
        searchBookProps(searchValueProps);
      };
    return(
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text"
             value={searchValueProps}
              onChange={(e)  => setSearchValueProps(e.target.value)}
              placeholder="Search Book"
              />
        </form>
    )
}
export default Search;