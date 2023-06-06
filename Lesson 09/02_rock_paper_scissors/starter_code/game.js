



// Create a function that determines the computer choice.  It should return one of the three values: 'rock', 'paper', or 'scissors'
function computerChoice() {
    //Create a random number
    //Multiply the number by 3 to make it between 1 and 3
    //Round number up
    let choice = Math.ceil(Math.random() * 3);
    console.log(choice);
    //if 1, it's a rock 
    //if 2, it's a paper
    //if 3, it's a scissor
    if(choice == 1){
        console.log("rock");
    } else if (choice == 2){
        console.log("paper")
    } else {
        console.log("scissors")
    }
};


/* Create a function that compares the user's selection to the computer's selection.  It should then output the opponent's choice to #computerSelection and display who is the winner.

 */
function compare(me, opponent) {
    //Decide who wins
    let winner = "";
    if (me === opponent) {
        winner = "It's a tie!";
        // else if(me === "rock" && opponent === "scissor"){
        //     winner = "Rock beats scissor. Opponents wins!";
        // } else if(me === "rock" && opponent === "paper"){
        //     winner = "Paper beats rock. You win!";
        // }else if(me === "scissor" && opponent === "rock"){
        //     winner = "Scissor lose rock. Opponent wins!";
        // } else if(me === "scissor" && opponent === "paper"){
        //     winner = "Scissor beats paper. You win!";
        // }else if (me === "paper" && opponent === "rock"){
        //     winner = "Paper win rock. You win!";
        // }else if(me === "paper" && opponent === "scissor"){
        //     winner = "Paper lose scissor. Opponent wins!";
        // }
    }
    //targert the id computerSelection and put what the computer chose in the text
    document.querySelector("#computerSelection").innerText = opponent;
    //target the id decision and display who wins
    document.querySelector("#decision").innerText = winner;
};


document.addEventListener('DOMContentLoaded', function(event) {

    // Bind a click event onto each of the three buttons.  It should run the compare function and then put the result to the #decsision id in the html

    //When I click on scissors
    document.querySelector("#scissors").addEventListener("click",function(select){
            //Prevent event listener
            select.preventDefault();
            //Get the computer choice
            let computer = computerChoice(); 
            //Compare scissors to the computer choice
            compare("scissors",computer);
    })
    
    //When I click on paper
    document.querySelector("#paper").addEventListener("click",function(select){
        //Prevent event listener
        select.preventDefault();
        //Get the computer choice
        let computer = computerChoice(); 
        //Compare scissors to the computer choice
        compare("paper",computer);
    })

    //When I click on rock
    document.querySelector("#rock").addEventListener("click",function(select){
        //Prevent event listener
        select.preventDefault();
        //Get the computer choice
        let computer = computerChoice(); 
        //Compare scissors to the computer choice
        compare("rock",computer);
    })
});
