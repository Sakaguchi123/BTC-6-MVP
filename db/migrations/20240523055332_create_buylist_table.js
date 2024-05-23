/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("buy_list", function (table) {
    table.increments("id").primary();
    table.string("product_name").notNullable();
    table.integer("price").notNullable();
    table.integer("category").notNullable();
    table.integer("quantity").notNullable();
    table.string("production_area").nullable();
    table.string("supermarket_name").notNullable();
    table.string("date").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("buy_list");
};
