//Add Event Listeners to the buttons

// One way
// document.querySelector(".set").addEventListener("click", function(){
//     alert("I just got clicked");
// })


// Other way
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var e = 0; e < numberOfDrumButtons; e++){
    document.querySelectorAll(".drum")[e].addEventListener("click", function(){
       
        this.style.color ="white";
    })
}


var audio = new Audio("sounds/tom-1.mp3");
audio.play();