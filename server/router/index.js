const router = require("express").Router();
const controller = require("../controllers");
// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
	console.log("Time: ", Date.now());
	next();
});

router
	.route("/shoes")
	.get(controller.getShoes)

router.route("/shoes/:name").get(controller.getShoes);

// define the about route
router
	.route("/shoes/:_id")
	.delete(controller.deleteShoes)
	.put(controller.updateShoes);



module.exports = router;
