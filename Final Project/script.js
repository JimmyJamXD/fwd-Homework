    //Toggle Navigation 
let character_item = document.querySelectorAll(".main-grid-info");

document.querySelector(".header-nav-toggle").addEventListener('click',function(e){
    e.preventDefault();
    let toggle = document.querySelectorAll(".content-header > nav ul");
    for(let i =0; i<toggle.length; i++){
        toggle[i].classList.toggle('navbar-mobilehide');
    }
});

document.addEventListener("DOMContentLoaded", function(event){
    let individual_boxes = document.querySelectorAll(".item-sizing");
    let clickInfo1 = document.querySelectorAll(".item-sizing > nav ul");
    //Character Information
    for(let i = 0; i < individual_boxes.length;i++){
        console.log(individual_boxes[i]);
        individual_boxes[i].addEventListener("click", function(){
            clickInfo1[i].classList.toggle("itemhide");
            clickInfo1[i].closest(".main-grid-info").classList.toggle("show_background");
        })
    }
});

    // document.querySelector(".main-grid-items").addEventListener("click", function(e){
    //     // e.preventDefault();
    //     let clickInfo = document.querySelectorAll(".item-sizing > nav ul");
    //     // console.log(clickInfo);
    //     for(let j = 0; j < clickInfo.length; j++){
    //         clickInfo[j].classList.toggle("itemhide");
    //     }


    //Loop through all the character items

    // for(let k = 0; k < character_item.length; k++){
    //     //Add a click listener on each card
    //     character_item[k].addEventListener("click", function(){
    //         //remove the featured class
    //         for(let l = 0; l < character_item.length; l++){
    //             character_item[l].classList.remove("main-feature-item");
    //         }
    //         //Add the feature class on the clicked on
    //         this.classList.add("main-feature-item");
    //     });
    //     console.log(character_item[k]);
    // }

    // for (let i = 0; i < character_item.length; i++){
    // character_item[i].onclick = function(){
    //     for (var q = 0; q < character_item.length; q++){
    //         character_item[q].classList.remove('main-featured-item');
    //     } 
    //     this.classList.add('main-featured-item');
    // };

// });

//     });



