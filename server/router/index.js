const router = require('express').Router();
const controller = require('../controllers')
// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.route('/shoes')
  .get(controller.getShoes)
  .post(controller.addShoes)


// define the about route
router.route('/shoes/:_id')
  .delete(controller.deleteShoes)
  .put(controller.updateShoes)


router.route('/shoes/:id/:color')
  .get(/* getRestOfColors */)

module.exports = router