let playerA = "scissors"
let playerB = "rock"

function playGame(playerA,playerB){
    if(playerA == playerB){
        return "tie";
    }
    
    if(playerA == "scissors"){
        if(playerB == "rock"){
            return "B";
        }else{
            return "A";
        }
    }
    
    
    if(playerA == "rock"){
        if(playerB == "paper"){
            return "B";
        }else{
            return "A";
        }
    }
    
    if(playerA == "paper"){
        if(playerB == "scissors"){
            return "B";
        }else{
            return "A";
        }
    }
}


//Pseudocode program
// function named furnaceManage

// current = Get the current temperature
// wanted = Get the wanted temperature

// if current < wanted
//     turn on

// if wanted >= wanted
//     turn off

// loop furnaceManage forever




//Rock Paper and Scissor Code

// Needs 2 players
// Player A and Player B

// list combination
// rock = r, scissor = s, and paper = p    

// wins = r > s and s > p and p > r
// lose = opposite of win
// tie = (r = r) and (s = s) and (p = p)

// //option 1
// // function playgame
// // if player A > player B
// //     player A wins

// // if player A < player B
// //     player B wins

// // if player A = player B
// //     its a tie !

// //option 2
// function playlonggame

// if player A = rock and player B = scissor
//     player A wins

// if player A = rock and player B = paper
//     player B wins

// if player A = scissor and player B = paper
//     player A wins

// if player A = scissor and player B = rock
//     player B wins

// if player A = paper and player B = rock
//     player A wins

// if player A = paper and player B = scissors
//     player B wins

// if player A = player B 
//     its tie ! 





// if not player A 
//     player B 

// if player A = player B
//     it's tie
