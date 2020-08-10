import Knex from 'knex'


//fazer alterações
export async function up(Knex: Knex){
    return Knex.schema.createTable('classes', table =>{
        table.increments('id').primary()
        table.string('subject').notNullable()
        table.decimal("cost").notNullable()
        //foreign key
        table.integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
}

//F*ck go back
export async function down(Knex: Knex){
    return Knex.schema.dropTable('classes')
}