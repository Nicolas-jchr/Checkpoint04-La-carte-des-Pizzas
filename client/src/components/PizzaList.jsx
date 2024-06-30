import { useState, useEffect } from "react";
import axios from "axios";

export default function PizzaList() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/pizzas`)
      .then((results) => {
        setPizzas(results.data);
        console.info(results);
      })
      .catch((err) => console.info(err));
  }, []);

  return (
    <div>
      {pizzas.length > 0 ? (
        pizzas.map((pizza) => (
          <div key={pizza.id} className="card">
            <img
              src={pizza.photo}
              alt={pizza.nom}
              loading="lazy"
              className="card-img-top"
            />
            <div className="card-body">
              <h2 className="card-title">{pizza.nom}</h2>
              <h3 className="card-text">Base: {pizza.base}</h3>
              <p className="card-text">Ingrédients: {pizza.ingredients}</p>
            </div>
          </div>
        ))
      ) : (
        <p>Pas de photos disponibles</p>
      )}
    </div>
  );
}
