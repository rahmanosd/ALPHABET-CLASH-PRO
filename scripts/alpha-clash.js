// function play(){
//     //step-1:  hide the home screen. to hide the screen add the class hidden to the home section
//     const homeSection = document.getElementById('home-section');
//     homeSection.classList.add('hidden')
//     //show the playground
//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
// }
function handleKeyBoardPress(event){
const playerPressed = event.key;
console.log('player pressed', playerPressed);

// stop the game if pressed 'Esc'
if(playerPressed === 'Escape'){
    gameOver();
}

// get the expected to press
const currentAlphabetElement = document.getElementById('current-alphabet');
const currentAlphabet = currentAlphabetElement.innerText;
const expectedAlphabet = currentAlphabet.toLowerCase();
console.log(playerPressed, expectedAlphabet);

// check matched or not
if(playerPressed === expectedAlphabet){
    console.log('you get a point');

    const currentScore = getTextElementValueById('current-score');
    const updatedScore = currentScore + 1;
    setTextElemnetById('current-score', updatedScore);

    // --------------------------------
    //update score
    // 1. get the current score
    // const currentScoreElement = document.getElementById('current-score');
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);
    // console.log(currentScore);
    
    // // 2. increase the score by 1 
    const newScore = currentScore + 1;

    // // 3. show the updated score
    // currentScoreElement.innerText = newScore;

    //start a new round
    removeBackgroundColourById(expectedAlphabet);
    continueGame();
}
else {
    console.log('you missed. you lost a life');

    const currentLife = getTextElementValueById('current-life');
    const updatedLife = currentLife - 1;
    setTextElemnetById('current-life', updatedLife);

    if(updatedLife === 0){
         gameOver();
    }    
    // // step-1:get the current life number
    // const currentLifeElement = document.getElementById('current-life');
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);

    // //step-2: reduce the life count 
    // const newLife = currentLife - 1;

    //step-3: display the updated life count
    currentLifeElement.innerText = newLife;
}
}
// capture keyborad key press
document.addEventListener('keyup', handleKeyBoardPress);

function continueGame(){
    // step-1: generate a random alphabet
    const alphabet = getRandomAlphabet();
    //console.log('your random alphabet', alphabet);

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
 
     //set beckground color
     addBackgroundColourById(alphabet);
}

function play(){
    // hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // reset score and life
    setTextElemnetById('current-life', 5);
    setTextElemnetById('current-score', 0);


    continueGame();
}

function gameOver(){
  hideElementById('play-ground');
  showElementById('final-score');
  // update final score
  // 1. get the final score
  const lastScore = getTextElementValueById('current-score');
  console.log(lastScore);
  setTextElemnetById('last-score', lastScore);

  // clear the last selected alphabet highlight
  const currentAlphabet = getElementTextById('current-alphabet');
  removeBackgroundColourById(currentAlphabet);
}
