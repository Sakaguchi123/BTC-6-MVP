/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

require('dotenv').config({ path: '.env' });

module.exports = {
  development: {
    client: 'pg',
    connection: {
      user: process.env.POSTGRES_USER || 'user',
      database: process.env.POSTGRES_DB || 'mvp_db'
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: { directory: './db/seeds' }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './db/migrations'
    },
    seeds: { directory: './db/seeds' }
  }
};
