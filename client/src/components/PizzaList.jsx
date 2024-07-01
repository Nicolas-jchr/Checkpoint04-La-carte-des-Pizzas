import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Logo from "../assets/logo-pizza.png";

export default function PizzaList() {
  const [pizzas, setPizzas] = useState([]);
  const [filteredPizzas, setFilteredPizzas] = useState([]);
  const [filterTomate, setFilterTomate] = useState(false);
  const [filterCreme, setFilterCreme] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [newPizza, setNewPizza] = useState({
    nom: "",
    base: "",
    ingredients: "",
    photo: "",
  });

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/pizzas`)
      .then((results) => {
        setPizzas(results.data);
        setFilteredPizzas(results.data);
        console.info(results);
      })
      .catch((err) => console.info(err));
  }, []);

  useEffect(() => {
    if (!filterTomate && !filterCreme) {
      setFilteredPizzas(pizzas);
    } else {
      const filtered = pizzas.filter((pizza) => {
        if (filterTomate && pizza.base === "tomate") return true;
        if (filterCreme && pizza.base === "creme") return true;
        return false;
      });
      setFilteredPizzas(filtered);
    }
  }, [filterTomate, filterCreme, pizzas]);

  const handleAddPizza = () => {
    axios
      .post(`${import.meta.env.VITE_API_URL}/api/pizzas`, newPizza)
      .then((response) => {
        setPizzas([...pizzas, response.data]);
        setFilteredPizzas([...pizzas, response.data]);
        setShowModal(false);
        setNewPizza({ nom: "", base: "", ingredients: "", photo: "" });
      })
      .catch((err) => console.info(err));
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setShowModal(false);
    }
  };

  return (
    <section>
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/">
            <img src={Logo} alt="Logo du site" />
          </Link>
        </div>
        <div className="navbar-center">
          <label>
            <input
              type="checkbox"
              checked={filterTomate}
              onChange={() => setFilterTomate(!filterTomate)}
            />
            Tomate
          </label>
          <label>
            <input
              type="checkbox"
              checked={filterCreme}
              onChange={() => setFilterCreme(!filterCreme)}
            />
            Crème
          </label>
        </div>
        <div className="navbar-right">
          <button
            type="button"
            className="add-button"
            onClick={() => setShowModal(true)}
          >
            Ajouter une pizza
          </button>
        </div>
      </nav>
      <section className="container">
        {filteredPizzas.length > 0 ? (
          filteredPizzas.map((pizza) => (
            <article key={pizza.id} className="card">
              <Link to={`/pizza/${pizza.id}`}>
                <img
                  src={pizza.photo}
                  alt={pizza.nom}
                  loading="lazy"
                  className="cardImgTop"
                />
              </Link>
              <div className="cardBody">
                <h2 className="cardTitle">{pizza.nom}</h2>
                <h3 className="cardTextBase">Base: {pizza.base}</h3>
                <p className="cardTextIngredients">{pizza.ingredients}</p>
              </div>
            </article>
          ))
        ) : (
          <p>Pas de photos disponibles</p>
        )}
      </section>

      {showModal && (
        <>
          <div
            className="modal-overlay"
            onClick={() => setShowModal(false)}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex={0}
            aria-label="Close modal"
          />
          <div className="modal">
            <div className="modal-content">
              <h2>Ajouter une Pizza</h2>
              <label htmlFor="pizza-name">
                Nom:
                <input
                  id="pizza-name"
                  type="text"
                  value={newPizza.nom}
                  onChange={(e) =>
                    setNewPizza({ ...newPizza, nom: e.target.value })
                  }
                />
              </label>
              <label htmlFor="pizza-base">
                Base:
                <select
                  id="pizza-base"
                  value={newPizza.base}
                  onChange={(e) =>
                    setNewPizza({ ...newPizza, base: e.target.value })
                  }
                >
                  <option value="">Sélectionnez une base</option>
                  <option value="tomate">Tomate</option>
                  <option value="creme">Crème</option>
                </select>
              </label>
              <label htmlFor="pizza-ingredients">
                Ingrédients:
                <input
                  id="pizza-ingredients"
                  type="text"
                  value={newPizza.ingredients}
                  onChange={(e) =>
                    setNewPizza({ ...newPizza, ingredients: e.target.value })
                  }
                />
              </label>
              <label htmlFor="pizza-photo">
                Photo (URL):
                <input
                  id="pizza-photo"
                  type="text"
                  value={newPizza.photo}
                  onChange={(e) =>
                    setNewPizza({ ...newPizza, photo: e.target.value })
                  }
                />
              </label>
              <button type="button" onClick={handleAddPizza}>
                Ajouter
              </button>
              <button type="button" onClick={() => setShowModal(false)}>
                Annuler
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
