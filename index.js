//Add Event Listeners to the buttons

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

        switch (buttonInnerHTML) {
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
    })
}


