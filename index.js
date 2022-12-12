var drmPads = document.querySelectorAll(".drum").length;

for (var i = 0; i < drmPads; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keydown", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
// First Solution ---- Ending




// Second Solution ---- Beginning

// document.addEventListener('keydown', function(event) {
//
//   playInstrument(event.key);
//   buttonAnimation(event.key);
//
// });
//
// document.querySelectorAll(".drum").forEach(function(btn) {
//
//   btn.addEventListener("click", handleClick);
//
//
// });
//
//
// function handleClick() {
//   var clickedOn = this.innerText;
//   playInstrument(clickedOn);
// }
//
// function playInstrument(key) {
//   var soundToPlay = "";
//   switch (key) {
//     case 'w':
//       soundToPlay = "sounds/tom-1.mp3";
//       break;
//     case 'a':
//       soundToPlay = "sounds/tom-2.mp3";
//       break;
//     case 's':
//       soundToPlay = "sounds/tom-3.mp3";
//       break;
//     case 'd':
//       soundToPlay = "sounds/tom-4.mp3";
//       break;
//     case 'j':
//       soundToPlay = "sounds/crash.mp3";
//       break;
//     case 'k':
//       soundToPlay = "sounds/kick-bass.mp3";
//       break;
//     case 'l':
//       soundToPlay = "sounds/snare.mp3";
//       break;
//     default:
//       console.log(key);
//   }
//   if (soundToPlay.length > 1) {
//     var audio = new Audio(soundToPlay);
//     audio.play();
//   }
// }
//
// function buttonAnimation(currentKey) {
//
//   var activeButton = document.querySelector("." + currentKey);
//
//   activeButton.classList.add("pressed");
//
//   setTimeout(function() {
//     activeButton.classList.remove("pressed");
//   }, 100);
//
// }
// Solution 2 ---- Ending
