/*
 * DOTS: Level Two
 *
 */
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');


function declareWinner() {
    document.body.classList.add('game-over');
  }

arenaEl.addEventListener("click", function(){
    score += 10;
    if (score < 100){
        scoreEl.innerText = score;
    } else {
        declareWinner();
    }
});