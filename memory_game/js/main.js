var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png",
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png",
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png",
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png",
}
];
var cardsInPlay = [];
var wins = 0;
var losses = 0;
var randnum = [0, 1, 2, 3]; 

//Fisher-Yates Shuffle
function shuffle(array) {
	for (var x = array.length - 1; x > 0; x-- ){
		var y = Math.floor(Math.random() * (x + 1));
		[array[x], array[y]] = [array[y], array[x]];
	}
}

//checks if the two cards match but its value and nothing else
function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		wins ++;
		alert("You found a match! Your score is now " + wins + " - " + losses);
	}
	else {
		losses ++;
		alert("Sorry, try again. Your score is now " + wins + " - " + losses);
	}
}

//flips the card that was clicked on
function flipCard() {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank + " of " + cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}

//creates a random order of the 4 cards every time the page is loaded
function createBoard() {
	shuffle(randnum);
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', randnum[i]);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
		console.log(randnum[i]);
	}
}

//flips cards back but does not rearrange them
function resetBoard() {
	for (var i = 0; i < cards.length; i++) {
		var elements = document.getElementById('game-board').childNodes;
		if (elements[i].src !== 'images/back.png') {
			elements[i].setAttribute('src', 'images/back.png');
		}
	}
	var clear = cardsInPlay.length;
	for (var z = 0; z < clear; z++){
		cardsInPlay.pop();
	}
}

createBoard();