/*
 * DOTS: Level Three
 *
 */
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');
    
arenaEl.addEventListener("click",function(e){
  e.preventDefault();

  if (arenaEl.target.classList.contains("js-ball")){
    score += parseInt(arenaEl.target.dataset.increment);
    if(score < 100){
      scoreEl.innerText = score;
    } else{
      declareWinner();
    }
  }

  function declareWinner() {
    document.body.classList.add('game-over');
  }

});


