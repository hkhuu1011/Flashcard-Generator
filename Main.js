console.log("main running");

// Inquirer npm package
var inquirer = require("inquirer");
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");
var data = require("./Basic.json");
// console.log(data);

start();

// Pick BasicCard, ClozeCard, or Partial 
function start() {
	inquirer.prompt({
			name: "basicOrCloze",
			type: "list",
			message: "Please select [Basic] or [Cloze] flashcards:",
			choices: ["Basic", "Cloze"]
	}).then(function(answer) {
		if (answer.basicOrCloze === "Basic") {
			playBasicCard();
		} else {
			playClozeCard();
		}
	});
};

function playBasicCard() {
 	// console.log(data);
	var index = 0;
	var basicBank = [];
	var correctanswer = 0;
	for (var i = 0; i < data.length; i++) {
		var currentCard = new BasicCard(data[i].front, data[i].back);
		basicBank.push(currentCard);
	}
	// console.log(basicBank);
	askquestions(basicBank,index);
}

function askquestions(basicBank,index){
	var card = basicBank[index]
	if (index < basicBank.length){
		inquirer.prompt({
			name: "basicBank",
			message: card.front
		}).then(function(answer) {
			if(answer.basicBank.lowercase() === card.back) {
				correctanswer++;
				console.log("That is correct!!!");
			} else {
				console.log("Wrong!!!! The correct answer is " + card.back);
			}
		})
	}else{
		end();
	}
}



// PrintInfo method
// BasicCard.prototype.printInfo = function() {
// 	console.log("Front: " + this.front + "Back: " + this.back);
// };


	// this.createBasic = function() {
	// 	var newBasic = {
	// 		front: front,
	// 		back: back

// function ClozeCard (fulltext, cloze) {
// 	this.fulltext = fulltext;
// 	this.cloze = cloze;
// 	this.partialtext = function() {

// 	}
	// this.createCloze = function() {
		// var newCloze = {
		// 	fulltext: fulltext,
		// 	cloze: cloze
		// }
	// }
// }
