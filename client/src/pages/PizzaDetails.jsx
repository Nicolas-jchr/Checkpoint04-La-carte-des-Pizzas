import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

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
    <>
      <Navbar />
      <div className="pizza-details-container">
        <div className="pizza-details-card">
          <img src={pizza.photo} alt={pizza.nom} className="pizza-photo" />
          <h1>{pizza.nom}</h1>
          <h3>Base: {pizza.base}</h3>
          <p className="ingredients">{pizza.ingredients}</p>
        </div>
      </div>
    </>
  );
}

export default PizzaDetails;
