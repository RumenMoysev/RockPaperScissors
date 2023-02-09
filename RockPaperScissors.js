function rockPaperScissors() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })

    let computerChoiceInNumber
    let computerChoice
    let counter = 0

    let doYouWantToContinue = function() {
        readline.question("Do you want to play again? (Y/N): ", answer => {
            if(answer=="Y") {
                console.log("OK! Let's play again!")
                recursiveReadline()
            } else if(answer == "N") {
                console.log("See you next time! 👋")
                return readline.close()
            } else {
                console.log("\x1b[41mInvalid input!\x1b[0m")
                doYouWantToContinue()
            }
        })
    }
    

    let recursiveReadline = function(){
        computerChoiceInNumber = Math.floor(Math.random()*(3)+1)

        switch(computerChoiceInNumber) {
            case 1: computerChoice = "Rock"; break;
            case 2: computerChoice = "Paper"; break;
            case 3: computerChoice = "Scissors"; break;
        }

        readline.question("Choose - Rock, Paper or Scissors: ", playerChoice=>{
            if(playerChoice=="Rock" && computerChoice =="Scissors") {
                counter++
                console.log(`\x1b[32mCongratulations, you beat the game! The computer chose Scissors(✂ ). You have beat the game ${counter} consecutive times.\x1b[0m`)
                doYouWantToContinue()
            } else if(playerChoice == "Rock" && computerChoice == "Paper") {
                counter = 0
                console.log("\x1b[31mYou lost! The computer chose Paper. Try again!\x1b[0m")
                recursiveReadline()
            } else if(playerChoice == "Rock" && computerChoice == "Rock") {
                console.log("\x1b[33mYou and the computer both picked Rock!. Nobody wins. Try again!\x1b[0m")
                recursiveReadline()
            } else if(playerChoice == "Scissors" && computerChoice == "Scissors") {
                console.log("\x1b[33mYou and the computer both picked Scissors (✂ )! Nobody wins. Try again!\x1b[0m") 
                recursiveReadline()
            } else if(playerChoice == "Scissors" && computerChoice == "Rock") {
                counter = 0
                console.log("\x1b[31mYou lost! The computer chose Rock. Try again!\x1b[0m")
                recursiveReadline()
            } else if(playerChoice == "Scissors" && computerChoice == "Paper") {
                counter++
                console.log(`\x1b[32mCongratulations, you beat the game! The computer chose Paper. You have beat the game ${counter} consecutive times.\x1b[0m`)
                doYouWantToContinue()
            } else if(playerChoice == "Paper" && computerChoice == "Scissors") {
                counter = 0
                console.log("\x1b[31mYou lost! The computer chose Scissors. Try again!\x1b[0m")
                recursiveReadline()
            } else if(playerChoice == "Paper" && computerChoice == "Paper") {
                console.log("\x1b[33mYou and the computer both picked Paper!. Nobody wins. Try again!\x1b[0m")
                recursiveReadline()
            } else if( playerChoice == "Paper" && computerChoice == "Rock") {
                counter++ 
                console.log(`\x1b[32mCongratulations, you beat the game! The computer chose Rock.  You have beat the game ${counter} consecutive times.\x1b[0m`)
                doYouWantToContinue()
            } else {
                console.log("\x1b[41mInvalid input!\x1b[0m")
                recursiveReadline()
            }
        })
    }

    recursiveReadline()
}

rockPaperScissors()