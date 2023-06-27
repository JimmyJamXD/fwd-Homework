
// ToDo
// When the user submits the search form, make an API request to open weather api's search endpoint
// https://api.openweathermap.org/data/2.5/weather?q=CITY&APPID=KEY
// Icon URL - refer to docs on how to use
// https://openweathermap.org/img/wn/####@2x.png  - replace #### with icon code
// Display the results in the #weather-results div
// Each new search should erase the previous results

const myApiKey = "0cdae9771a327b037b83a330fd69f3e0";

async function handleWeatherRequest(e) {
  e.preventDefault();
  // get user input value from textbox
  const userin = document.querySelector('input[name="city"]').value;
  // build the url address with YOUR personal API key and the users input city
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${userin}&APPID=${myApiKey}`;
  // make an API call using fetch() and capture the response in a variable
  const response = await fetch(apiURL);
  // convert the response to a readable json format with .json()
  const data = await response.json();
  // print your data to the console to see its format, dont forget to delete later
  console.log(myApiKey);
  console.log(data);
  // Write a separate function to convert the temps from the default units (Kelvin) to a more readable F or C
function weatherConvert(temp){
    let TempCon = ((temp - 273.15) * 9/5 + 32);
    TempCon = Math.round(TempCon);
    return TempCon;
  }

  // build the icon src
  const readableTemp = weatherConvert(data.main.temp);
  const readableFeelslikeTemp = weatherConvert(data.main.feels_like);
  const readableMaxTemp = weatherConvert(data.main.temp_max);
  const readableMinTemp = weatherConvert(data.main.temp_min);
  // create icon img tag
  
  // add icon url as src
  
  // clear out previous icon img
  
  // print all results to dom
  const newTempList = `<li>Current Temperature: ${readableTemp}&deg </li>
  <li>Feels like Temperature: ${readableFeelslikeTemp}&deg </li>
  <li>Max Temperature: ${readableMaxTemp}&deg </li>
  <li>Min Temperature: ${readableMinTemp}&deg </li>`
  
  //Print the results to the DOM
  document.querySelector("#weather-results").innerHTML =newTempList;
  
  // append icon img to dom

}


// Attach an event listener to the submit button
document.querySelector("#weather-search").addEventListener("submit", handleWeatherRequest);