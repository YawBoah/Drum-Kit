//Add Event Listeners when a button is pressed

// One way
// document.querySelector(".set").addEventListener("click", function(){
//     alert("I just got clicked");
// })


// Other way
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var e = 0; e < numberOfDrumButtons; e++){
    document.querySelectorAll(".drum")[e].addEventListener("click", function(){
       
        // this.style.color ="white";

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
        
    });
}


// Add Event Listeners when a key is pressed on the keyboard
document.addEventListener("keypress", function(event){
    makeSound(event.key);

    buttonAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
    
        default:cocnsole.log(buttonInnerHTML);
            break;
    }
}

function buttonAnimation(currentKey) {
    
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}

