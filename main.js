let animalCards = document.getElementById("animal-cards");
let cardFront = document.querySelectorAll('.front-card');
let cardBack = document.querySelectorAll('.back-card');
let addCard = document.getElementById("add-card");
let cardContainer = document.querySelector('.card-container')
let removeCard = document.getElementById("remove-card");

$(addCard).click(function() { 
  let description = prompt("Please Enter The Description Of The Card");
  if (description != null) {
    $(`<div class='front-card'>${description}</div>`).insertAfter(addCard);
  };
});


// $(removeCard).click(function(){
//   $("p").remove(":contains('Hello')");
// });
