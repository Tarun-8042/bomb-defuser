let timerEl = document.getElementById('timer');
let defuserEl = document.getElementById('defuser');
let counter = 10;
let itervalId = setInterval(function() {
    counter = counter - 1;
    console.log(counter);
    timerEl.textContent = counter;
    if (counter === 0) {
        timerEl.textContent = 'Boom';
        clearInterval(itervalId);
    }
}, 1000)
defuserEl.addEventListener("keydown", function(event) {
    let bombDefuserText = defuserEl.value;
    if (event.key === 'Enter' && bombDefuserText === "defuse" && counter !== 0) {
        timerEl.textContent = 'you did it';
        clearInterval(itervalId);
    }
})