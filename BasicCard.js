console.log("basic card running");

// Inquirer npm package
var inquirer = require("inquirer");

// Constructor function for Basic Card
function BasicCard(front, back) {
	this.front = front;
	this.back = back
}

// PrintInfo method
BasicCard.prototype.printInfo = function() {
	console.log("Front: " + this.front + "Back: " + this.back);
};

// Runs inquirer and asks user a series of questions.
// Stores answers inside of the .thn statement
inquirer.prompt([
	{
		name: "question",
		message: "What is the path an object takes as it revolves around a star, planet, or moon?"
	}, {
		name: "question",
		message: "What is an explosive eruption of waves and particles into space called?"
	}, {
		name: "question",
		message: "What is the natural object that revolves around a planet?"
	}, {
		name: "question",
		message: "What is the spacecraft that gathers data without a crew called?"
	}, {
		name: "question",
		message: "what is one full orbit around the sun called?"
	}

]).then(function(answers) {
	var newBasicCard = new BasicCard(answers.BasicCard);
	newBasicCard.printInfo();

});