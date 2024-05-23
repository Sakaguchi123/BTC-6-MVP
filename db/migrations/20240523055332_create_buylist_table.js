/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("buy_list", function (table) {
    table.increments("id").primary();
    table.string("product_name").notNullable();
    table.integer("category").notNullable();
    table.integer("quantity").notNullable();
    table.integer("production_area").nullable();
    table.integer("supermarket_id");
    table.foreign("supermarket_id").references("supermarket.id");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("buy_list");
};
