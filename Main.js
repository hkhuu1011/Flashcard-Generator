console.log("main running");

// Inquirer npm package
var inquirer = require("inquirer");
var requireBasic = require("./BasicCard.js");
var requireCloze = require("./ClozeCard.js");

// Pick BasicCard, ClozeCard, or Partial 



function BasicCard (front, back) {
	this.front = front;
	this.back = back;
	this.createBasic = function() {
		var newBasic = {
			front: front,
			back: back
		}
	}
}

function ClozeCard (fulltext, cloze) {
	this.fulltext = fulltext;
	this.cloze = cloze;
	this.partialtext = function() {

	}
	// this.createCloze = function() {
		// var newCloze = {
		// 	fulltext: fulltext,
		// 	cloze: cloze
		// }
	// }
}
