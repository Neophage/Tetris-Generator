const PIECES = ["I_piece", "J_piece", "L_piece", "O_piece", "S_piece", "T_piece", "Z_piece"];

var QUEUE = []

//initialize application
window.addEventListener("load", () => {
	queueNewBag();
	updateDisplay();

	document.getElementById("next-piece-button").addEventListener("click", moveToNextPiece);
});


function queueNewBag() {
	bag = [...PIECES];
	shuffle(bag);

	QUEUE = QUEUE.concat(bag);
}

function shuffle(array) {
	for (var i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i+1));
		const temp = array[i];

		array[i] = array[j];
		array[j] = temp;
	}

	return array;
}

function updateDisplay() {
	document.getElementById("current-piece").setAttribute("src", "gfx/"+QUEUE[0]+".png");
	document.getElementById("next-piece").setAttribute("src", "gfx/"+QUEUE[1]+".png");
}


function moveToNextPiece(clickEvent) {
	QUEUE.shift();
	console.log("boop");

	if (QUEUE.length < 2) {
		queueNewBag();
	}

	updateDisplay();
}