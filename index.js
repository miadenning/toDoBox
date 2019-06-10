var cardContainer=$('.card-container');
var submit=$('.submit-btn');
submit.on("click",newMiles);

function newMiles(){
  var userInput = $('.miles').val();

  appendNewMiles(userInput);
  $('.miles').val("");
}

// console.log(`You have logged `${userInput}` miles.`);


function appendNewMiles(userInput) {
  cardContainer.append(`<p>You ran ${userInput} miles today!<p>`);
  }
//     var checkbox=$('.checkbox');
//     checkbox.on('click', remove);
// }
// function remove(){
//   event.target.parentNode.remove();
// }
