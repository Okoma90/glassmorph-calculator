const screen = document.querySelector('#screen');
const btn = document.querySelectorAll('.btn');

for(item of btn) {
    item.addEventListener('click', (e) => {
        btnText=e.target.innerText;
        if(btnText == '×') {
            btnText = '*';
        }
        if(btnText == '÷') {
            btnText = '/';
        }
        screen.value+=btnText;
    });
}

function sin() {
    screen.value = Math.sin(screen.value);
}

function cos() {
    screen.value = Math.cos(screen.value);
}

function tan() {
    screen.value = Math.tan(screen.value);
}

function pow() {
    screen.value = Math.pow(screen.value,2);
}

function sqrt() {
    screen.value = Math.sqrt(screen.value,2);
}

function log() {
    screen.value = Math.log(screen.value);
}

function pi() {
    screen.value = 3.14159265359;
}

function e() {
    screen.value = 2.71828182846;
}

function fact() {
    let i, num, f;
    f=1
    num=screen.value;
    for(i=1; i<=num; i++) {
        f=f*i;
    }
    i=i-1;
    screen.value=f;
}

function backspc() {
    screen.value = screen.value.substr(0, screen.value.length-1);
}

function calculate() {
    const splitScreen = screen.value.split('%',2);
    if(splitScreen.length > 1) {
        screen.value = eval(splitScreen[0] + '/100*' + splitScreen[1]);
    } else {
        screen.value = eval(screen.value);
    }
}

function tilt(elements) {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        elements.forEach(function(element) {
            const vanillaTilt = element.vanillaTilt;
            if (vanillaTilt) {
                vanillaTilt.destroy();
            }
        })
    } else {
        VanillaTilt.init(elements, {
            max: 20,
            speed: 3000,
            glare: true,
            "max-glare": .2,
        }
    )}
}

const tiltElements = document.querySelectorAll(".container");
tilt(tiltElements);
