import Knex from 'knex'


//fazer alterações
export async function up(Knex: Knex){
    return Knex.schema.createTable('class_schedule', table =>{
        table.increments('id').primary()

        table.integer('week_day').notNullable()
        table.integer("from").notNullable()
        table.integer('to').notNullable()

        table.integer('class_id')
        .notNullable()
        .references('id')
        .inTable('classes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
}

//F*ck go back
export async function down(Knex: Knex){
    return Knex.schema.dropTable('class_schedule')
}