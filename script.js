// console.log("Amirhan");
// console.log("5*5");
// console.log(5*5);
// let car="Lamborghini"
// car="Mercedes"
// console.log(car);
// console.log("Коля любит "+car);
// console.log("Вася любит "+car);
// let girl="Arina"
// console.log(girl+" любит Chocolate ");
// let player="Neymar"
// console.log(player)
// console.log(player+" играет за PSG");
let okButton = document.getElementById("okButton")
let playerInput = document.getElementById("playerInput")
let newButton = document.getElementById("newButton")
let secretNumber = getRandom(1, 20)
let title = document.getElementById("title")
if (secretNumber == 12) {
    title.innerHTML = "Победа!"
    okButton.disabled = true
    document.body.style.backgroundImage="url('Win.jpg')"
}
console.log(secretNumber);
let hp = document.getElementById("hp")
let hpNumber = 3
let hints = document.getElementById("hints")
playerInput.focus()
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
newButton.onclick = function (event) {
    console.log("Взрыв планеты");
    event.preventDefault();
    document.body.style.backgroundImage="url('3.jpg')"
    // title.innerHTML = "Снова Угадай число"
    // hints.innerHTML = "Вводи число и нажимай проверить"
    secretNumber = getRandom(1,20)
    hpNumber = 3
    title.innerHTML = "Снова Угадай число"
    hints.innerHTML = "Вводи число и нажимай проверить"
    hp.innerHTML = "Жизни:3"
    okButton.disabled = false
    playerInput.focus()
}
title.onclick = function (event) {
     title.innerHTML = "Победа!"
     okButton.disabled = true
     document.body.style.backgroundImage="url('Win.jpg')"
}
// console.log(okButton);
okButton.onclick = function (event) {
    // это нужно для ENTER и чтобы страница не обновлялась
    event.preventDefault();
    if (secretNumber == playerInput.value) {
        console.log("Верно!");
        title.innerHTML = "Победа!"
        okButton.disabled = true
        document.body.style.backgroundImage="url('Win.jpg')"
    }
    else {
        if (playerInput.value == 666) {
            console.log("Верно!")
            title.innerHTML = "Победа!"
            okButton.disabled = true
            document.body.style.backgroundImage="url('Win.jpg')"
        }
        else {
            console.log("Неверно!");
            hpNumber = hpNumber - 1
            hp.innerHTML = "Жизни:" + hpNumber;
            if (hpNumber == 0) {
                title.innerHTML = "Поражение! Моё число было " + secretNumber
                okButton.disabled = true
                document.body.style.backgroundImage="url('Lose.jpg')"
            }
            if (hpNumber == 1) {
                title.innerHTML = "Вы на волоске от смерти!"
            }
            if (secretNumber > playerInput.value) {
                hints.innerHTML = "Моё число больше!"
            }
            if (secretNumber < playerInput.value) {
                hints.innerHTML = "Моё число меньше!"
            }
        }


    }
    console.log(playerInput.value);
    playerInput.value = ""
    playerInput.focus()
}
