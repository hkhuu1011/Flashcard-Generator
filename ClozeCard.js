console.log("cloze card running");

// Contructor function for Cloze Card
function ClozeCard(text, cloze) {
	this.text = text;
	this.cloze = cloze
}

// PrintInfo method
ClozeCard.prototype.PrintInfo = function() {
	console.log("text: " + this.text + "Cloze: " + this.cloze)
};

// Function for partial text
ClozeCard.prototype.partial = function() {
	var text = this.text
	console.log(text)
}

module.exports = ClozeCard;