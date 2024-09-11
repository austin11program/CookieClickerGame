let points = 0;
let increase = 1;
let money = 0;
let moneyTouch = false;
let invester = false;
let lotteryClick = false;

function addPoints() {
    points += increase;
    if (lotteryClick) {
        var ticket = Math.random();
        if (ticket < 0.1) {
            money = money * 3;
        } else {
            money = money * 0.85;
        }
    }
    if (moneyTouch) {
        money += increase * 0.001;
    }
    if (increase == 1) {
        document.getElementById("message").innerText = "1 Cookie!";

    } else {
        document.getElementById("message").innerText = increase + " Cookies!";
    }
    display();
}

function display() {
    money = parseInt(money);
    document.getElementById("points").innerText = "Cookies " + points;
    document.getElementById("money").innerText = "$" + money;
}

function multiplier(mult) {
    if (mult <= money) {
        money -= mult;
        increase += mult;
        changeColor();
        document.getElementById("message").innerText = `Multiplier +${mult}x`;
    } else {
        document.getElementById("message").innerText = "Insufficient funds";
    }
    display();
}

// resets all bonuses for money
function getMoney() {
    money += points;
    if (invester) {
        points = parseInt(0.1 * points);
        invester = false;
        document.getElementById("invest").style.backgroundColor =
            "rgb(255, 161, 161)";
    } else {
        points = 0;
    }
    changeColor();
    increase = 1;
    document.getElementById("message").innerText = "Traded Cookies!";
    display();
}

// Buy again and again
function invest() {
    if (invester) {
        document.getElementById("message").innerText = "Can't purchase again";
    } else if (money >= 500) {
        invester = true;
        money -= 500;
        document.getElementById("invest").style.backgroundColor = "lightgrey";
        document.getElementById("message").innerText = "Purchased!";
        display();
    } else {
        document.getElementById("message").innerText = "Insufficient Funds";
    }

}

// one time buy
function moneyTouchFun() {
    if (moneyTouch) {
        document.getElementById("message").innerText = "One time purchase";
    } else if (money >= 9000) {
        money -= 9000;
        moneyTouch = true;
        document.getElementById("touch").style.backgroundColor = "lightgrey";
        document.getElementById("message").innerText = "Purchased!";
        display();
    } else {
        document.getElementById("message").innerText = "Insufficient Funds";
    }
}

// one time buy
function lottery() {
    if (lotteryClick) {
        document.getElementById("message").innerText = "One time purchase";
    } else if (money >= 50000) {
        money -= 50000;
        lotteryClick = true;
        document.getElementById("lott").style.backgroundColor = "lightgrey";
        document.getElementById("message").innerText = "Purchased!";
        display();
    } else {
        document.getElementById("message").innerText = "Insufficient Funds";
    }
}

function changeColor() {
    if (money < 9000 || moneyTouch) {
        document.getElementById("touch").style.backgroundColor = "lightgrey";
    } else {
        document.getElementById("touch").style.backgroundColor =
            "rgb(255, 161, 161)";
    }
    if (money < 50000 || lotteryClick) {
        document.getElementById("lott").style.backgroundColor = "lightgrey";
    } else {
        document.getElementById("lott").style.backgroundColor =
            "rgb(255, 161, 161)";
    }
    if (money < 500 || invester) {
        document.getElementById("invest").style.backgroundColor = "lightgrey";
    } else {
        document.getElementById("invest").style.backgroundColor =
            "rgb(255, 161, 161)";
    }


    if (money < 1000) {
        document.getElementById("thou").style.backgroundColor = "lightgrey";
    } else {
        document.getElementById("thou").style.backgroundColor =
            "rgb(255, 161, 161)";
    }

    if (money < 100) {
        document.getElementById("hen").style.backgroundColor = "lightgrey";
    } else {
        document.getElementById("hen").style.backgroundColor = "rgb(255, 161, 161)";
    }
    if (money < 10) {
        document.getElementById("ten").style.backgroundColor = "lightgrey";
    } else {
        document.getElementById("ten").style.backgroundColor = "rgb(255, 161, 161)";
    }
}

function startRotation() {
    var elements = document.getElementsByClassName('responsive-small');
    var nonRotatingElements = Array.from(elements).filter(function (element) {
        return !element.classList.contains('casade');
    });

    if (nonRotatingElements.length > 0) {
        var randomIndex = Math.floor(Math.random() * nonRotatingElements.length);
        var element = nonRotatingElements[randomIndex];

        element.classList.add('casade');
        element.addEventListener('animationend', stopRotationOnce);
    }
}

function stopRotationOnce(event) {
    var element = event.target;
    element.classList.remove('casade');
    element.removeEventListener('animationend', stopRotationOnce);
}