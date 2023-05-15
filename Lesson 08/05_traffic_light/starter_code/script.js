// Try making the traffic light work - Think through the problem BEFORE you code!
// You'll use addEventListener and getElementById if you're doing it right...

//Function to turn all lights off 
function lightsOff() {
    document.querySelector('#stopLight').classList.remove('glow');
    document.querySelector('#slowLight').classList.remove('glow');
    document.querySelector('#goLight').classList.remove('glow');
}

//Function to turn the stop on
function stopLight(){
    //Turn off all lights 
    lightsOff();

    //Turn on the stop
    document.querySelector('#stopLight').classList.add('glow');
}

//Function to turn the slow on
function slowLight(){
    //Turn off all lights
    lightsOff();

    //Turn on the slow
    document.querySelector('#slowLight').classList.add('glow');
}

//Function to turn the go on
function goLight(){
    //Turn off all lights
    lightsOff();

    //Turn on the go
    document.querySelector('#goLight').classList.add('glow');
}

//Add event listeners to each of the buttons
let stopButton = document.querySelector('#stopButton');
stopButton.addEventListener("click", stopLight);

let slowButton = document.querySelector('#slowButton');
slowButton.addEventListener("click", slowLight);

let goButton = document.querySelector('#goButton');
goButton.addEventListener("click", goLight);