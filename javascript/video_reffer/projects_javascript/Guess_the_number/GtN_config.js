let ran_num = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#btn_sub');
const userinput = document.querySelector('#guessfield');
const guessslot = document.querySelector('.guesses');
const lastresult = document.querySelector('.lastresult');
const loworhi = document.querySelector('.loworhi');
const resultParas = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevguess = [];
let numguess = 1;
let playgame = true;

if (playgame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userinput.value);
        validateguess(guess);
    });
}

function validateguess(guess) {
    if (isNaN(guess)) {
        alert('Please Enter a Valid Number');
    } else if (guess < 1) {
        alert('Please Enter a Number More Than 1');
    } else if (guess > 100) {
        alert('Please Enter a number less than 100');
    } else {
        prevguess.push(guess);
        if (numguess === 11) {
            displayguess(guess);
            displaymsg(`Game Over. Random number was ${ran_num}`);
            endgame();
        } else {
            displayguess(guess);
            checkguess(guess);
        }
    }
}

function checkguess(guess) {
    if (guess === ran_num) {
        displaymsg(`🎉 You Guessed Right!`);
        endgame();
    } else if (guess < ran_num) {
        displaymsg(`📉 Number is Too Low`);
    } else if (guess > ran_num) {
        displaymsg(`📈 Number is Too High`);
    }
}

function displayguess(guess) {
    userinput.value = '';
    guessslot.innerHTML += `${guess} `;
    numguess++;
    lastresult.innerHTML = `${11 - numguess}`;
}

function displaymsg(message) {
    loworhi.innerHTML = `<h2>${message}</h2>`;
}

function newgame() {
    const newgamebtn = document.querySelector('#newgame');
    newgamebtn.addEventListener('click', function () {
        ran_num = parseInt(Math.random() * 100 + 1);
        prevguess = [];
        numguess = 1;
        guessslot.innerHTML = '';
        lastresult.innerHTML = `${11 - numguess}`;
        userinput.removeAttribute('disabled');
        resultParas.removeChild(p);
        playgame = true;
    });
}

function endgame() {
    userinput.value = '';
    userinput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<button class="btn btn-success text-light border " id='newgame'>Start New Game</button>`;
    resultParas.appendChild(p);
    playgame = false;
    newgame();
}
