
exports.up = function(knex) {
    return knex.schema
    
    .createTable('exercises',(table)=>{
        table.increments("id").primary().notNullable();
        table.integer('workouts_id').references('id').inTable('workouts');
        table.string("name").notNullable();
        table.string("bodyPart-MuscleGroup").notNullable();
        table.string("type").notNullable();
        table.string("notes");
    })
};

exports.down = function(knex) {
  
};
