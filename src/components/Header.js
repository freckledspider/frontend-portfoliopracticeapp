import { Link } from "react-router-dom";

function Header(props) {

  return (
    <header>
      <h1>Portfolio</h1>
      <nav class="navigation">
        <Link to="/">
          <div>Home</div>
        </Link>
        <Link to="/about">
          <div>About</div>
        </Link>
        <Link to="/projects">
          <div>Projects</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;