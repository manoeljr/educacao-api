'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Student extends Model {

  file () {
    this.belongsTo('App/Models/File')
  }

  courses () {
    return this.hasMany('App/Models/Course')
  }
}

module.exports = Student
