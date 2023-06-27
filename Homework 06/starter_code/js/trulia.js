<<<<<<< HEAD


let truliaCards = document.getElementsByClassName("trulia-grid-item");



document.addEventListener('DOMContentLoaded', function(event) {

// Toggle the navigation
document.querySelector(".trulia-nav-toggle").addEventListener('click',function(e){
  e.preventDefault();
  let toggle = document.querySelectorAll('.trulia-nav > nav ul');
  for(let i=0; i<toggle.length; i++){
    toggle[i].classList.toggle('trulia-nav-mobilehide');
  }

});


// Loop through all the cards
let grid_item = document.querySelectorAll(".trulia-grid-item");
for(let i = 0; i < grid_item.length; i++){
  //Add a click listener on each card
  grid_item[i].addEventListener('click', function(e){
      // Remove the featured class
      for(let j = 0; j <grid_item.length; j++){
        grid_item[j].classList.remove('trulia-featured-grid-item');
      }
      // Add the featured class on the one clicked on
      this.classList.add('trulia-featured-grid-item');
  });
  // console.log(grid_item[i]);
}
  });  



=======


let truliaCards = document.getElementsByClassName("trulia-grid-item");



document.addEventListener('DOMContentLoaded', function(event) {

// Toggle the navigation
document.querySelector(".trulia-nav-toggle").addEventListener('click',function(e){
  e.preventDefault();
  let toggle = document.querySelectorAll('.trulia-nav > nav ul');
  for(let i=0; i<toggle.length; i++){
    toggle[i].classList.toggle('trulia-nav-mobilehide');
  }

});


// Loop through all the cards
let grid_item = document.querySelectorAll(".trulia-grid-item");
for(let i = 0; i < grid_item.length; i++){
  //Add a click listener on each card
  grid_item[i].addEventListener('click', function(e){
      // Remove the featured class
      for(let j = 0; j <grid_item.length; j++){
        grid_item[j].classList.remove('trulia-featured-grid-item');
      }
      // Add the featured class on the one clicked on
      this.classList.add('trulia-featured-grid-item');
  });
  // console.log(grid_item[i]);
}
  });  



>>>>>>> ec8cf051cfa6fd0751e982d9a7a804fd47a925ce
