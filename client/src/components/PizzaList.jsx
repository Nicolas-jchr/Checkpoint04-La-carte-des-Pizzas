import { useState, useEffect } from "react";
import axios from "axios";

export default function PizzaList() {
  const [pizzas, setPizzas] = useState([]);
  const [filteredPizzas, setFilteredPizzas] = useState([]);
  const [filterTomate, setFilterTomate] = useState(true);
  const [filterCreme, setFilterCreme] = useState(true);
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
    if (filterTomate && filterCreme) {
      setFilteredPizzas(pizzas);
    } else if (filterTomate) {
      setFilteredPizzas(pizzas.filter((pizza) => pizza.base === "tomate"));
    } else if (filterCreme) {
      setFilteredPizzas(pizzas.filter((pizza) => pizza.base === "creme"));
    } else {
      setFilteredPizzas([]);
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

  return (
    <div>
      <nav className="navbar">
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
        <button
          type="button"
          className="add-button"
          onClick={() => setShowModal(true)}
        >
          + Ajouter une pizza
        </button>
      </nav>
      <div className="container">
        {filteredPizzas.length > 0 ? (
          filteredPizzas.map((pizza) => (
            <div key={pizza.id} className="card">
              <img
                src={pizza.photo}
                alt={pizza.nom}
                loading="lazy"
                className="cardImgTop"
              />
              <div className="cardBody">
                <h2 className="cardTitle">{pizza.nom}</h2>
                <h3 className="cardTextBase">Base: {pizza.base}</h3>
                <p className="cardTextIngredients">
                  Ingrédients: {pizza.ingredients}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>Pas de pizzas disponibles</p>
        )}
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Ajouter une Pizza</h2>
            <label>
              Nom:
              <input
                type="text"
                value={newPizza.nom}
                onChange={(e) =>
                  setNewPizza({ ...newPizza, nom: e.target.value })
                }
              />
            </label>
            <label>
              Base:
              <select
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
            <label>
              Ingrédients:
              <input
                type="text"
                value={newPizza.ingredients}
                onChange={(e) =>
                  setNewPizza({ ...newPizza, ingredients: e.target.value })
                }
              />
            </label>
            <label>
              Photo (URL):
              <input
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
      )}
    </div>
  );
}
