const db = require('../../database-mongoose/dbHelpers')


module.exports ={
  getShoes: (req, res) => {
    db.getAll()
      .then((allData)=>{
        console.log('Get All Request'.cyan,' Success'.green)
        res.status(200).send(allData)
      })
      .catch((e) => {
        console.log('Get All Request'.cyan,' UnSuccessFull'.red)
        res.status(400).send()
      })
  },
  getOneShoe: (req, res) => {
    let {name} = req.params
    console.log(name)
    db.getOne(name)
    .then((allData)=>{
      console.log('Get All Request'.cyan,' Success'.green)
      res.status(200).send(allData)
    })
    .catch((e) => {
      console.log('Get All Request'.cyan,' UnSuccessFull'.red)
      res.status(400).send()
    })
  },
  addShoes: (req, res) => {
    console.log('Post Request Recieved');
    db.postOne()
      .then((_id)=>{
        console.log('Insert Request'.cyan,' Success'.green)
        res.status(200).send(_id)
      })
      .catch((e)=>{
        console.log('Insert Request'.cyan,' UnSuccessFul'.red)
        res.status(400).send()
      })
  },
  deleteShoes: (req, res) => {
    //massage data
    db.deleteOne()
      .then(()=>{
        console.log('Delete Request'.cyan,' Success'.green)
        res.status(200).send()
      })
      .catch((e) => {
        console.log(e, 'Delete Request'.cyan,' UnSuccessFul'.red)
        res.status(400).send()
      })
    },
  updateShoes: (req, res) => {
    //massage data
    db.updateShoe()
      .then(()=>{
        console.log('Update Request'.cyan,' Success'.green)
        res.status(200).send()
      })
      .catch((e)=>{
        console.log(e, 'Update Request'.cyan,' UnSuccessFul'.red)
        res.status(400).send()
      })
  }
}