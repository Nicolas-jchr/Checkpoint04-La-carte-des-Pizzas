const AbstractSeeder = require("./AbstractSeeder");

// Import seeders that must be executed before this one
// Follow your foreign keys to find the right order ;)


class pizzaSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "pizza", truncate: true,});
  }


}

// Export the pizzaSeeder class
module.exports = pizzaSeeder;
