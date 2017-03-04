var createButton = document.getElementById("create");
var deleteButton = document.getElementById("delete");

var rainbow = ["red", "orange", "yellow", "green", "blue", "purple"];

function rainbowOnly (checkIfRainbowColorIsBeingCalled) {
	var colorInput = document.getElementById("input-color").value;
		if (rainbow.includes(colorInput)) {
			rainbowCards();
		} else {
			alert("Please type in a color that exists in the rainbow!");
		}
	}

function rainbowCards () {
	var colorInput = document.getElementById("input-color").value;
	var card = "";
	if (colorInput === "red") {
		card = '<div class="cards">' + '<div class="red-card"></div>' + '<br>' + '<button id="delete">Delete</button>' + '</div>';
	} else if (colorInput === "orange") {
		card = '<div class="cards">' + '<div class="orange-card"></div>' + '<br>' + '<button id="delete">Delete</button>' + '</div>';
	} else if (colorInput === "yellow") {
		card = '<div class="cards">' + '<div class="yellow-card"></div>' + '<br>' + '<button id="delete">Delete</button>' + '</div>';
	} else if (colorInput === "green") {
		card = '<div class="cards">' + '<div class="green-card"></div>' + '<br>' + '<button id="delete">Delete</button>' + '</div>';
	} else if (colorInput === "blue") {
		card = '<div class="cards">' + '<div class="blue-card"></div>' + '<br>' + '<button id="delete">Delete</button>' + '</div>';
	} else if (colorInput === "purple") {
		card = '<div class="cards">' + '<div class="purple-card"></div>' + '<br>' + '<button id="delete">Delete</button>' + '</div>';
	}
	showCards.innerHTML += card;
}


createButton.addEventListener("click", rainbowOnly);
deleteButton.addEventListener("click", deleteCard);


function deleteCard (clickDeleteButton) {
	var showCardsId = document.getElementById("show-cards");
	var specifiedCard = document.getElementByClass("cards");
	
	if (clickDeleteButton) {
		showCardsId.removeChild(specifiedCard);
	}
}
