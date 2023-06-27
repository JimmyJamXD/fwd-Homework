document.addEventListener('DOMContentLoaded', function(event) {
    event.preventDefault();

    let navhamburger = document.querySelector(".nav-toggle");

    navhamburger.addEventListener("click",function(e){
        let navhamburgerul = document.querySelector(".main-nav");
        navhamburgerul.classList.toggle("main-nav-mobilehide");
    });

});