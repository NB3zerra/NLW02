import Knex from 'knex'


//fazer alterações
export async function up(Knex: Knex){
    return Knex.schema.createTable('connections', table =>{
        table.increments('id').primary()

        table.integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

        table.timestamp('created_at')
        .defaultTo(Knex.raw('CURRENT_TIMESTAMP'))
        .notNullable()
    })
}

//F*ck go back
export async function down(Knex: Knex){
    return Knex.schema.dropTable('connections')
}