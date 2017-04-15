console.log("main running");

// Inquirer npm package
var inquirer = require("inquirer");
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");
var data = require("./Basic.json");
var dataCloze = require("./Cloze.json");
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
}; // End start function

// Selected Basic Card 
function playBasicCard() {
 	// console.log(data);
	var index = 0;
	var basicBank = [];
	var correctAnswer = 0;
	for (var i = 0; i < data.length; i++) {
		var currentCard = new BasicCard(data[i].front, data[i].back);
		basicBank.push(currentCard);
	}
	// console.log(basicBank);
	askquestions(basicBank,index,correctAnswer);
} // End playBasicCard

// Display questions
function askquestions(basicBank, index,correctAnswer){
	var card = basicBank[index];
	if (index < basicBank.length){
		inquirer.prompt({
			name: "basicBank",
			message: card.front
		}).then(function(answer) {
			if(answer.basicBank === card.back) {
				correctAnswer++;
				console.log(correctAnswer);
				console.log("That is correct!!!");
				var index = 1;
				askquestions(basicBank,index,correctAnswer);
			} else {
				console.log("Wrong!!!! The correct answer is " + card.back);
			}
		})

	}
	else{
		end();
	}
} //End askquestions function 

// Selected Cloze Card
function playClozeCard() {
 	// console.log(data);
	var index = 0;
	var clozeBank = [];
	var correctanswer = 0;
	for (var i = 0; i < dataCloze.length; i++) {
		var currentCard = new ClozeCard(data[i].text, data[i].cloze);
		clozeBank.push(currentCard);
	}
	// console.log(basicBank);
	askquestions(basicBank,index);
} // End playClozeCard

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
