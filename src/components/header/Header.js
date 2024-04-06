import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/bookcase">My Bookcase Library</Link>
        <Link to="/contact"> Contact Us</Link>  
      </nav>
    </header>
  );
}

export default Header;