'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CourseSchema extends Schema {
  up () {
    this.create('courses', (table) => {
      table.increments()
      table.integer('student_id').unsigned().references('id').inTable('students').onUpdate('CASCADE').onDelete('SET NULL')
      table.string('course', 255).notNullable()
      table.timestamp('start')
      table.timestamp('finish')
      table.timestamps()
    })
  }

  down () {
    this.drop('courses')
  }
}

module.exports = CourseSchema
