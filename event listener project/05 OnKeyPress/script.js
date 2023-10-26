//keypress

// The keypress event is fired when a key that produces a character value is pressed down.

let inputBox = document.getElementById("input-box");
let display = document.getElementById("display");

// adding the keypress event listener to the inputbox

inputBox.addEventListener("keypress", function(e){
    display.innerText = "you have pressed" + e.key  
     
});