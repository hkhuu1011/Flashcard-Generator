var inquirer = require("inquirer");

// Contructor function for Cloze Card
function ClozeCard(text, cloze) {
	this.text = text;
	this.cloze = cloze
}

// PrintInfo method
ClozeCard.prototype.PrintInfo = function() {
	console.log("Front: " + this.text + "Cloze: " + this.cloze)
};

// Function for partial text
ClozeCard.prototype.partial = function() {
	var text = this.text
	console.log(text)
}

module.exports = ClozeCard;