// What new changes we need to make
exports.up = function(knex, Promise) {
  return knex.schema.createTable('roles', function(tbl) {
    // primary key, called id and make it autoincrement
    tbl.increments();

    tbl.string('name', 128).notNullable();
    // .unique(); you can do unique either way like 8 or 9
    tbl.unique('name');
  });
};

// How to undo the changes made in the up function
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('roles');
};

// yarn knex init
// yarn knex migrate:make roles_table
// yarn knex migrate:latest
// yarn knex migrate:rollback
