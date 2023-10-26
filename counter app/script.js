// getteing the html element 
const incrementbtn = document.getElementById("incrementbtn");
const decrementbtn = document.getElementById("decrementbtn");
const resetbtn = document.getElementById("resetbtn");
const displayvalue = document.getElementById("displayvalue");

// for decrement button click
decrementbtn.addEventListener("click", () => {
    const value = Number(displayvalue.innerText);
    if (value > 0){
        displayvalue.innerText = value - 1;
    } else {
        alert ("negative value are not allowed")
    }
});

// for increment button click
incrementbtn.addEventListener("click", () => {
    const value = Number(displayvalue.innerText);
    if (value >= 10) {
        alert("10+ value are not allowed");
    } else {
        displayvalue.innerText = value + 1;
    }
});

// for reset button click
resetbtn.addEventListener("click", () => {
    displayvalue.innerText = 0;
});