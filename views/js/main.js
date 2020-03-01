const levels = {
    easy: 5,
    medium: 4,
    hard: 3
}
let currentLevel = levels.hard

let time = currentLevel;
let score = 0;
let isPlaying;
const GAME_OVER = 'Game Over!!!'
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
];
const matchWord = () => {
    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!!!'
        return true
    } else {
        message.innerHTML = ''
        return false
    }
}
const startMatch = () => {
    if (matchWord()) {
        isPlaying = true;
        time = currentLevel + 1;
        showWords(words);
        wordInput.value = '';
        score++
    }
    if (score === -1) {
        scoreDisplay.innerHTML = 0
    } else {
        scoreDisplay.innerHTML = score
    }

}
const showWords = (words) => {
    const ranIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[ranIndex]
}

const contDown = () => {
    if (time > 0) {
        time--
    } else if (time === 0) {
        isPlaying = false
    }
    timeDisplay.innerHTML = time;
}

const checkStatus = () => {
    if (!isPlaying && time === 0) {
        message.innerHTML = GAME_OVER;
        score = -1;
    }
}


const init = () => {
    showWords(words)
    setInterval(contDown, 1000);
    setInterval(checkStatus, 50);
    wordInput.addEventListener('input', startMatch);
    seconds.innerHTML = currentLevel;

}




window.addEventListener('load', init)