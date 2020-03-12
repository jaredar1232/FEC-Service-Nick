//import db helpers


module.exports ={
  getShoes: (req, res) => {
    console.log('Get Request recieved');
    res.status(200).send()
  },
  addShoes: (req, res) => {
    console.log('Post Request recieved');
    res.status(200).send()
  },
  deleteShoes: (req, res) => {
    console.log('Delete Request recieved');
    res.status(200).send()
  },
  updateShoes: (req, res) => {
    console.log('Put Request recieved');
    res.status(200).send()
  }
}