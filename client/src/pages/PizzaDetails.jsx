import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function PizzaDetails() {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/pizzas/${id}`)
      .then((response) => {
        setPizza(response.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!pizza) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="pizza-details">
      <h1>{pizza.nom}</h1>
      <img src={pizza.photo} alt={pizza.nom} className="pizza-photo" />
      <h3>Base: {pizza.base}</h3>
      <p>Ingrédients: {pizza.ingredients}</p>
    </div>
  );
}

export default PizzaDetails;
