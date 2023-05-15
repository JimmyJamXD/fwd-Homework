// When the #grayButton is clicked, the color scheme of the page should change to more of a "dark mode" feel, with gray backgrounds and white text throughout.
// The #whiteButton should bring things back to the "light mode" color scheme with white backgrounds and dark text
// Try to do this by setting styles (.style)
// Remember to try one step at a time, testing each stage as you go!

//A function that turns the grey scheme on 
function gray() {
    //Set the body background
    let body = document.querySelector('body');
    body.style.backgroundColor = 'gray';

    //Set the text color
    body.style.color = "white";
}
    

//A functions that turns on the white scheme on
function white(){
    //Set the body background
    let body = document.querySelector('body');
    body.style.backgroundColor = 'white';

    //Set the text color
    body.style.color = "black";
}

//Create objects for the two buttons
let grayButton = document.getElementById('grayButton');
let whiteButton = document.getElementById('whiteButton');
//When I click on the grey button, run the grey scheme function
grayButton.addEventListener("click",gray);
whiteButton.addEventListener("click",white);
//WHen i click on the white button, run the white scheme function