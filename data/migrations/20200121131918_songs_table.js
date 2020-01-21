
exports.up = function(knex) {
  return knex.schema.createTable('songs', tbl => {
      tbl.increments();

      tbl.string('name', 255).index();

      tbl.integer('duration');

      tbl.string('artist').index();

      tbl.boolean('favorite').defaultTo(false);

      tbl.timestamps(true, true);
  })
//   .createTable(); //you can chain another table here
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('songs');
};
