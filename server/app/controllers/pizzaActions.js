// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all pizzas from the database
    const pizzas = await tables.pizza.readAll();

    // Respond with the pizzas in JSON format
    res.json(pizzas);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific pizza from the database based on the provided ID
    const pizza = await tables.pizza.read(req.params.id);

    // If the pizza is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the pizza in JSON format
    if (pizza == null) {
      res.sendStatus(404);
    } else {
      res.json(pizza);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the pizza data from the request body
  const pizza = req.body;

  try {
    // Insert the pizza into the database
    const insertId = await tables.pizza.create(pizza);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted pizza
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  // edit,
  add,
  // destroy,
};
