const knex = require("knex");
const config = require("../knexfile");

// module.exports = knex;
const environment = process.env.DATABASE_URL ? "production" : "development";
module.exports = knex(config[environment]);
