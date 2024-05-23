/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

// import dotenv from "dotenv";
// dotenv.config({ path: ".env" });
require("dotenv").config({ path: ".env" });

module.exports = {
  client: "pg",
  connection: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  migrations: {
    directory: "./db/migrations",
  },
  seeds: {
    directory: "./db/seeds",
  },
};

// module.exports = {
//   development: {
//     client: "pg",
//     connection: {
//       user: process.env.DB_USER,
//       password: process.env.DB_PASSWORD,
//       database: process.env.DB_NAME,
//     },
//     migrations: {
//       directory: "./db/migrations",
//     },
//     seeds: {
//       directory: "./db/seeds",
//     },
//   },

// production: {
//   client: "pg",
//   connection: {
//     database: "mvp_database",
//     user: "username",
//     password: "password",
//   },
//   pool: {
//     min: 2,
//     max: 10,
//   },
//   migrations: {
//     tableName: "knex_migrations",
//   },
// },
// };
