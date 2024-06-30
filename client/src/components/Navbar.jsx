import { Link } from "react-router-dom";
import Logo from "../assets/logo-pizza.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src={Logo} alt="Logo du site" />
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/">
          <button type="button" className="home-button">
            Retour à l'accueil
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
