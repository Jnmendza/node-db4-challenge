
exports.up = function(knex) {
  return knex.scheme
// MEASUREMENTS **********************************************
    .createTable('measurements', tbl => {
        tbl.increments();

        tbl.string('measurement', 128)
        tbl.string('abbreviaton', 128)
    })

// INGREDIENTS **********************************************
    .createTable('ingredients', tbl => {
        tbl.increments();

        tbl.string('ingredient', 128)
    })

// RECIPES **********************************************************
  .createTable('recipes', tbl => {
      tbl.increments();

      tbl.string('title', 128).notNullable();
      tbl.string('description', 1000).notNullable();
      tbl.string('prep_time', 128)
      tbl.string('cook_time', 128)
  })

// STEPS  ***********************************************************
  .createTable('steps', tbl => {
      tbl.increments();

      tbl.integer('recipe_id')
      .unsigned()
      .references('id')
      inTable('recipes')
      .onDelete('RESTRICT') // about deleting the record from the primary key table. Could be `RESTRICT`, `NO ACTION`, ``
      .onUpdate('CASCADE') 

      tbl.string('step_number', 128)
      tbl.string('instructions', 1000)
  })

// RECIPE_INGREDIENTS **********************************************
  .createTable('recipe_ingredients', tbl => {
      tbl.increments();

      tbl.integer('recipe_id')
      .unsigned()
      .references('id')
      .inTable('recipes')
      .onDelete('RESTRICT') // about deleting the record from the primary key table. Could be `RESTRICT`, `NO ACTION`, ``
      .onUpdate('CASCADE') 

      tbl.string('amount', 128)

      tbl.integer('measurement_id')
      .unsigned()
      .references('id')
      .inTable('measurements')
      .onDelete('RESTRICT') // about deleting the record from the primary key table. Could be `RESTRICT`, `NO ACTION`, ``
      .onUpdate('CASCADE') 

      tbl.integer('ingredient_id')
      .unsigned()
      .references('id')
      .inTable('ingredients')
      .onDelete('RESTRICT') // about deleting the record from the primary key table. Could be `RESTRICT`, `NO ACTION`, ``
      .onUpdate('CASCADE') 

      tbl.string('instructions', 1000)

  })

};



exports.down = function(knex) {
  
};
