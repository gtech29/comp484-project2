$(function () {
  // Makes sure that your function is called once all the DOM elements of the page are ready to be used.

  // Called function to update the name, happiness, and weight of our pet in our HTML
  checkAndUpdatePetInfoInHtml();

  // When each button is clicked, it will "call" function for that button (functions are below)
  $(".feed-button").click(clickedFeedButton);
  $(".play-button").click(clickedPlayButton);
  $(".exercise-button").click(clickedExerciseButton);
  $(".sleep-button").click(clickedSleepButton);
});

// Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
var pet_info = { name: "ZORP", hunger: 5, mood: 5, energy: 5, age: 0 };

function clickedFeedButton() {
  if (pet_info['hunger'] == 0){
    $(".speech-bubble").text("Zorp is full");
  } else {
    $(".speech-bubble").text("*munch munch*");
    pet_info['mood']++
    pet_info["hunger"]--;
    pet_info["energy"]++;
  }
    checkAndUpdatePetInfoInHtml();
}

function clickedPlayButton() {
  // Increase pet happiness
  
  // Decrease pet weight
  checkAndUpdatePetInfoInHtml();
}

function clickedExerciseButton() {
  // Decrease pet happiness
  // Decrease pet weight
  checkAndUpdatePetInfoInHtml();
}
function clickedSleepButton() {
  // Decrease pet happiness
  // Decrease pet weight
  checkAndUpdatePetInfoInHtml();
}

function checkAndUpdatePetInfoInHtml() {
  checkWeightAndHappinessBeforeUpdating();
  updatePetInfoInHtml();
}

function checkWeightAndHappinessBeforeUpdating() {
  // Add conditional so if weight is lower than zero.
}

// Updates your HTML with the current values in your pet_info object
function updatePetInfoInHtml() {
  $(".pet-name").text(pet_info["name"]);
  $(".hunger-val").text(pet_info["hunger"]);
  $(".mood-val").text(pet_info["mood"]);
  $(".energy-val").text(pet_info["energy"]);
}
