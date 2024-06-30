const AbstractRepository = require("./AbstractRepository");

class pizzaRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "pizza" as configuration
    super({ table: "pizza" });
  }

  // The C of CRUD - Create operation

  async create(pizza) {
    // Execute the SQL INSERT query to add a new pizza to the "pizza" table
    const [result] = await this.database.query(
      `insert into ${this.table} (nom, base, ingredients, photo) values (?, ?, ?, ?)`,
      [pizza.nom, pizza.base, pizza.ingredients, pizza.photo]
    );

    // Return the ID of the newly inserted pizza
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific pizza by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the pizza
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all pizzas from the "pizza" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of pizzas
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing pizza

  // async update(pizza) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an pizza by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = pizzaRepository;
