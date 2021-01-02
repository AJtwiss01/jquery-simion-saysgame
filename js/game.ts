//3. At the top of the game.js file, create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .
var buttonColours = ["red", "blue", "green", "yellow"];

//5. At the top of the game.js file, create a new empty array called gamePattern.
var gamePattern = [];

//add event listener to every button 

const elements = document.getElementsByClassName('simmon-buttons')

for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', (event) => {
        // added typescript validation for div element clickted in typscript 
        const elem = (<HTMLElement>event.target)
        const colorPressed = (<HTMLElement>event.target).id

        console.dir(`color pressed ${colorPressed} and element clicked ${JSON.stringify(elem)}`);

        elem.classList.add('blink_me');
    })
};

//1. Inside game.js create a new function called nextSequence()
function nextSequence() {

    //2. Inside the new function generate a new random number between 0 and 3, and store it in a variable called randomNumber
    var randomNumber = Math.floor(Math.random() * 4);

    //4. Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.
    var randomChosenColour = buttonColours[randomNumber];

    //6. Add the new randomChosenColour generated in step 4 to the end of the gamePattern.
    gamePattern.push(randomChosenColour);

    const elem = document.getElementById(randomChosenColour)
    elem.classList.add('blink_me');
    const audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
    console.log(randomChosenColour)
}

nextSequence()

