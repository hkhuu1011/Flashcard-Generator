console.log("main running");

// Inquirer npm package
var inquirer = require("inquirer");
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");
var data = require("./Basic.json");
var dataCloze = require("./Cloze.json");

start();

// Pick Basic Card or Cloze Card 
function start() {
	// Prompt to select Basic or Cloze cards
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
	var index = 0;
	var basicBank = [];
	var correctAnswer = 0;
	// Loop through index for questions in order
	for (var i = 0; i < data.length; i++) {
		// Pushes questions to current card
		var currentCard = new BasicCard(data[i].front, data[i].back);
		basicBank.push(currentCard);
	}
	// console.log(basicBank);
	askquestions(basicBank,index,correctAnswer);
}; // End playBasicCard

// Display questions
function askquestions(basicBank, index, correctAnswer){
	var card = basicBank[index];
	if (index < basicBank.length){
		// Prompt for Basic card to show the front
		inquirer.prompt({
			name: "basicBank",
			message: card.front
		}).then(function(answer) {
			// Compares your answer to .back of Basic.json
			if(answer.basicBank === card.back) {
				correctAnswer++;
				console.log(correctAnswer);
				console.log("That is correct!!!");

				// var index = 1;
				// askquestions(basicBank,index,correctAnswer);
			} else {
				console.log("Wrong! The correct answer is: " + card.back);
			}
		})

	}
	else{
		end();
	}
}; //End askquestions function 

// Selected Cloze Card
function playClozeCard() {
 	// console.log(data);
	var index = 0;
	var clozeBank = [];
	var correctAnswer = 0;
	for (var i = 0; i < dataCloze.length; i++) {
		var currentCard = new ClozeCard(dataCloze[i].text, dataCloze[i].cloze);
		clozeBank.push(currentCard);
	}
	// console.log(clozeBank);
	askclozequestions(clozeBank, index, correctAnswer);
}; // End playClozeCard

function askclozequestions(clozeBank, index, correctAnswer){
	var card = clozeBank[index];
	if (index < clozeBank.length){
		inquirer.prompt({
			name: "clozeBank",
			message: card.text
		}).then(function(answer) {
			if(answer.clozeBank === card.cloze) {
				correctAnswer++;
				console.log(correctAnswer);
				console.log("That is correct!!!");
			} else {
				console.log("Wrong! The correct answer is: " + card.cloze);
			}
		})

	}
	else{
		end();
	}
}; //End askquestions function 
