 // Random Number Guessing Game
 while(true) {
     
     let random = Math.floor(Math.random() * 10)

    let number = prompt('Pick a number between 0- and 9 inclusive')
    number =  Number(number)
    if(Number(random) === number) {
        alert('You are correct')
        break;
    }
    alert('You are wrong, try again')
}
