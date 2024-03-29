// all menus of the game
const menu = document.querySelector('div#menu')
const game = document.querySelector('#game')
//buttons
const playButton = document.querySelector('#play')
const checkButton = document.querySelector('#check-button')
// span
const result = document.querySelector('#result')
// correct number in the game
// this number is always pseudorandom
let randomNum = Math.floor(Math.random() * (10 - 1 + 1)) +1
/* play game button */
playButton.addEventListener('click', ()=>{
    menu.style.display = "none"
    game.style.display = "flex"
})
// game mechanics
let count = 0
let selected = document.querySelectorAll('.number')
selected.forEach(button => {
    button.addEventListener('click', evt =>{
        for(count; count <3; count++){
            evt.target.disabled = true;
            if(evt.target.value == randomNum){
                evt.target.style.backgroundColor ="var(--correct-color)"
                result.innerHTML = `Você acertou. Parabens!!`
                count = 3
                break
            }
            if(count < 1){
                evt.target.style.backgroundColor ="var(--wrong-color)"
                result.innerHTML = `Você errou, mas ainda possui ${2 - count} chanches`
                count++
                break
            }
            if(count < 2){
                evt.target.style.backgroundColor ="var(--wrong-color)"
                result.innerHTML = `Você errou novamente, mas ainda possui ${2 - count} chanche`
                count++
                break
            }
            else if(count == 2){
                evt.target.style.backgroundColor ="var(--wrong-color)"
                result.innerHTML = `Que pena que você não conseguiu. O numero correto era o ${randomNum}`
                count++
                for (let position = 0; selected[position].value < 11; position++) {
                   if (selected[position].value == randomNum) {
                    selected[position].style.backgroundColor ="var(--correct-color)"
                    break
                    // checks the button that contains the correct value and adds a green color to it
                   }
                }
                break
            }
        }   
    })
} )
/* Play again button */
const resetButton = document.querySelector('#reset-button') //new game button
resetButton.addEventListener('click', ()=>{
    selected.forEach(all => {
        all.style.backgroundColor = '#fff' // reset all color of buttons
    });
    result.innerHTML = ''; // reset the result text
    count = 0; // reset the chanche counter
    randomNum = Math.floor(Math.random() * (10 - 1 + 1)) + 1; // generates a new correct result
    for (let position = 0; selected[position].value <= 10; position++) {
        if (selected[position].disabled = true) {
         selected[position].disabled = false
         // check which buttons are disabled and which are enabled
        }
     }
})
/* return to menu button */
const returnButton = document.querySelector('#return-menu-button')
returnButton.addEventListener('click', ()=>{
    menu.style.display = "flex"
    game.style.display = "none"
})
