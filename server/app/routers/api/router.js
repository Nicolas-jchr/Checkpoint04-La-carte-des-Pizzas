const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const pizzasRouter = require("./pizzas/router");

router.use("/pizzas", pizzasRouter)

/* ************************************************************************* */

module.exports = router;
