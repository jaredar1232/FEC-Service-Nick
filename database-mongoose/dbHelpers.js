//import db
const db = require('./index')

module.exports = {
  getAll: ()=> db.find({}),
  getOne: (name) => db.findOne({ "name" : { $regex: `${name}`, $options: 'i' }}),
  postOne: (obj)=> db.insertMany(),
  deleteOne: (_id) => db.destroy(_id),
  updateShoe: (newObj, id) => {}
}