const db = require("../../database-mongoose/dbHelpers");

module.exports = {
	getShoes: (req, res) => {
		let {name} = req.params


		db.getAllShoeSet(name)
			.then(allData => {
				console.log("Get All Request".cyan, " Success".green);
				res.status(200).send(allData);
			})
			.catch(e => {
				console.log("Get All Request".cyan, " UnSuccessFull".red);
				res.status(400).send(e);
			});
	},
	getOneShoe: (req, res) => {
		let { name } = req.params;
		console.log(name);
		db.getOne(name)
			.then(allData => {
				console.log("Get One Request".cyan, " Success".green);
				res.status(200).send(allData);
			})
			.catch(e => {
				console.log("Get One Request".cyan, " UnSuccessFull".red);
				res.status(400).send();
			});
	},
	deleteShoes: (req, res) => {
		//massage data
		db.deleteOne()
			.then(() => {
				console.log("Delete Request".cyan, " Success".green);
				res.status(200).send();
			})
			.catch(e => {
				console.log(e, "Delete Request".cyan, " UnSuccessFul".red);
				res.status(400).send();
			});
	},
	updateShoes: (req, res) => {
		//massage data
		db.updateShoe()
			.then(() => {
				console.log("Update Request".cyan, " Success".green);
				res.status(200).send();
			})
			.catch(e => {
				console.log(e, "Update Request".cyan, " UnSuccessFul".red);
				res.status(400).send();
			});
	}
};
