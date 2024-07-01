import { Link } from "react-router-dom";

import Logo from "../assets/logo-pizza.png";

function NotFound() {
  return (
    <section className="not-found-component">
      <h1>Page en cours de construction</h1>
      <img src={Logo} alt="Logo du site" className="logo-notfound" />
      <Link to="/" className="back-home-link">
        {" "}
        Retour a l'accueil
      </Link>
    </section>
  );
}

export default NotFound;
