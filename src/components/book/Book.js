import PropTypes from "prop-types";
import "./Book.css"
function Book ({bookProps, addBook}) {
    const { 
        volumeInfo: {title, authors, description,imageLinks: smallThumbnail }, 
    //price,
    //retailPrice: {amount, currencyCode}
 } = bookProps;


    return(
        <div>
            <h2>{title? title  : "No Title Here "}
            &nbsp; by {authors ? authors.join (" , ") : "No Authors Listed"}</h2>
            <p>{description}</p>
           
            {smallThumbnail && <img src={smallThumbnail} alt="image"/> }
            <button className="btn-add" onClick = {() => addBook(bookProps)}> Add +</button>
        </div>
    );
}

Book.propTypes = {
    bookProps: PropTypes.shape({
        volumeInfo: PropTypes.shape({
            title: PropTypes.string.isRequired,
            authors: PropTypes.arrayOf(PropTypes.string),
            description: PropTypes.string,
        }).isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired
}


export default Book;