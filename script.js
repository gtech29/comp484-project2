$(function () {
  // Makes sure that your function is called once all the DOM elements
  // of the page are ready to be used. This is the shorthand version of
  // $(document).ready(function() { ... })
  checkAndUpdatePetInfoInHtml();

  // When each button is clicked, it will "call" function for that button
  $(".feed-button").click(clickedFeedButton);
  $(".play-button").click(clickedPlayButton);
  $(".exercise-button").click(clickedExerciseButton);
  $(".sleep-button").click(clickedSleepButton);
});

// pet_info object holds all of Zorp's current stats
// Required keys: name, weight, happiness (per project spec)
// Additional keys: hunger, energy, age for richer gameplay
// All numeric stats are on a 0-10 scale; age starts at 0
var pet_info = { name: "ZORP", happiness: 7, weight: 5, hunger: 5, energy: 8, age: 0 };

// BUTTON FUNCTIONS

function clickedFeedButton() {
  if (pet_info["hunger"] == 0) {
    showSpeechBubble("*Zorp is already full!*");
  } else {
    showSpeechBubble("*munch munch*");
    pet_info["hunger"]--;                                          // less hungry after eating
    pet_info["happiness"] < 10 ? pet_info["happiness"]++ : null; // treats make Zorp happy
    pet_info["weight"] < 10 ? pet_info["weight"]++ : null;       // food adds weight
    pet_info["energy"] < 10 ? pet_info["energy"]++ : null;       // food gives energy
  }
  checkAndUpdatePetInfoInHtml();
}

function clickedPlayButton() {
  if (pet_info["energy"] == 0) {
    showSpeechBubble("*Zorp is too tired to play...*");
  } else {
    showSpeechBubble("*zorp zorp zorp!*");
    pet_info["happiness"] < 10 ? pet_info["happiness"]++ : null; // playing makes Zorp happy
    pet_info["weight"] > 0 ? pet_info["weight"]-- : null;        // playing burns weight
    pet_info["hunger"] < 10 ? pet_info["hunger"]++ : null;       // playing makes you hungry
    pet_info["energy"]--;                                         // playing drains energy
  }
  checkAndUpdatePetInfoInHtml();
}

function clickedExerciseButton() {
  if (pet_info["energy"] == 0) {
    showSpeechBubble("*Zorp is too tired to exercise...*");
  } else {
    showSpeechBubble("*huff huff huff*");
    pet_info["happiness"] > 0 ? pet_info["happiness"]-- : null;  // exercise is draining, reduces happiness
    pet_info["weight"] > 0 ? pet_info["weight"]-- : null;        // exercise reduces weight
    pet_info["hunger"] < 10 ? pet_info["hunger"]++ : null;       // exercise makes you hungry
    pet_info["energy"]--;                                         // drains energy
    pet_info["energy"] > 0 ? pet_info["energy"]-- : null;        // exercise drains more than play
  }
  checkAndUpdatePetInfoInHtml();
}

function clickedSleepButton() {
  if (pet_info["energy"] == 10) {
    showSpeechBubble("*Zorp is not tired!*");
  } else {
    showSpeechBubble("*zzzZZZzzz*");
    pet_info["energy"] < 10 ? pet_info["energy"]++ : null;       // sleep restores energy
    pet_info["happiness"] < 10 ? pet_info["happiness"]++ : null; // well rested = happy
    pet_info["hunger"] < 10 ? pet_info["hunger"]++ : null;       // wake up hungry
  }
  checkAndUpdatePetInfoInHtml();
}

// UNIQUE JQUERY METHOD #1: .fadeIn() 
// .fadeIn() is a jQuery effect method that gradually animates an element
// from invisible (opacity 0 / display none) to fully visible (opacity 1).
// It accepts a duration in milliseconds or the keywords 'slow' or 'fast'.
// We use it here on the speech bubble so Zorp's reactions animate in
// smoothly instead of snapping in instantly, making the UI feel more alive.
// .hide() is called first to reset the element to hidden before each fade,
// otherwise .fadeIn() would have nothing to animate if it is already visible.
function showSpeechBubble(message) {
  $(".speech-bubble").hide().text(message).fadeIn(400); // fades in over 400 milliseconds
}

// CORE LOGIC FUNCTIONS 

function checkAndUpdatePetInfoInHtml() {
  checkWeightAndHappinessBeforeUpdating();
  updatePetInfoInHtml();
}

// Safety net that clamps all stats between 0 and 10 no matter what
// Includes the required "happiness" and "weight" keys from the spec
function checkWeightAndHappinessBeforeUpdating() {
  let stats = ["happiness", "weight", "hunger", "energy"];
  stats.forEach(function (stat) {
    if (pet_info[stat] < 0) pet_info[stat] = 0;
    if (pet_info[stat] > 10) pet_info[stat] = 10;
  });
}

// ── UNIQUE JQUERY METHOD #2: .addClass() / .removeClass() ────
// .addClass() adds one or more CSS class names to a selected element
// without removing its existing classes. .removeClass() does the opposite,
// removing a specified class while leaving all other classes intact.
// Together they allow us to dynamically change an element's appearance
// based on game state without touching the CSS file at runtime.
// We use them here to switch the device into "sad-mode" when Zorp's happiness
// drops to 3 or below, visually signaling that Zorp is unhappy by shifting
// the color scheme. When happiness recovers above 3 the class is removed and
// the normal colors are restored automatically.
function updatePetInfoInHtml() {
  // Update Zorp's name and all stat values in the HTML
  $(".pet-name").text(pet_info["name"]);
  $(".happiness-val").text(pet_info["happiness"]);
  $(".weight-val").text(pet_info["weight"]);
  $(".hunger-val").text(pet_info["hunger"]);
  $(".energy-val").text(pet_info["energy"]);
  $(".age-val").text(pet_info["age"]);

  // Multiply by 10 to convert the 0-10 value into a 0-100% CSS width
  $(".happiness-fill").css("width", pet_info["happiness"] * 10 + "%");
  $(".weight-fill").css("width", pet_info["weight"] * 10 + "%");
  $(".hunger-fill").css("width", pet_info["hunger"] * 10 + "%");
  $(".energy-fill").css("width", pet_info["energy"] * 10 + "%");

  // Swap Zorp's image based on current happiness level
  if (pet_info["happiness"] <= 3) {
    $(".pet-image").attr("src", "./images/zorp-sad.png");
  } else if (pet_info["happiness"] >= 8) {
    $(".pet-image").attr("src", "./images/zorp-happy.png");
  } else {
    $(".pet-image").attr("src", "./images/zorp-normal.png");
  }

  // Add or remove sad-mode class on the device wrapper based on Zorp's happiness
  if (pet_info["happiness"] <= 3) {
    $(".device-wrapper").addClass("sad-mode");
  } else {
    $(".device-wrapper").removeClass("sad-mode");
  }
}
