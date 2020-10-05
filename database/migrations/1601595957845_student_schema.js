'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StudentSchema extends Schema {
  up () {
    this.create('students', (table) => {
      table.increments()
      table.string('name', 255).notNullable()
      table.string('email', 255).notNullable().unique()
      table.string('ra').notNullable().unique()
      table.string('cpf').notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('students')
  }
}

module.exports = StudentSchema
