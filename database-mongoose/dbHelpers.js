//import db
const db = require('./index')

module.exports = {
  getAll: ()=> db.find({}),
  getAllShoeSet: (name)=> db.find({name: `${name}`}),
  getOne: (name) => db.findOne({ "name" : { $regex: `${name}`, $options: 'i' }}),
  postOne: (obj)=> db.insertMany(),
  deleteOne: (_id) => db.destroy(_id),
  updateShoe: (newObj, id) => {}
}