// Create an array for list of cities
let cities = ["NYC", "SF", "LA", "ATX", "SYD"];


// Listen for when DOM is loaded
document.addEventListener('DOMContentLoaded', function(event) {
// When DOM is loaded, add cities to the dropdown options via loop
for (let i = 0; i < cities.length; i++){
    //Create the element
    let citiesItem = document.createElement("option");
    //Set the innerText to the element
    citiesItem.innerText = cities[i];
    citiesItem.value = cities[i];
    //append element to the DOM
    document.querySelector("#city-type").append(citiesItem);
}

// When selected, change background of the page
// Listen for when user selects an item from the dropdown
document.querySelector("#city-type").addEventListener("change", function(event){
    //Get the picked value
    let items = document.querySelector("#city-type").value;
    //If/else if statements to match the picked value
    if(items == 'NYC') {
        document.body.setAttribute('class', 'nyc');
    } else if(items == "SF") {
        document.body.setAttribute('class', 'sf')
    } else if(items == "LA"){
        document.body.setAttribute('class', 'la')
    } else if(items == 'ATX') {
        document.body.setAttribute('class', 'atx')
    } else if (items == 'SYD') {
        document.body.setAttribute('class', 'syd')
    }
})
    
});

