const btnStart = document.querySelector("button[data-start]")
const btnStop = document.querySelector("button[data-stop]")
const delay = 1000;
let timerId = null


btnStart.addEventListener("click", handleClick)
btnStop.addEventListener("click", () => {
    clearInterval(timerId);
    btnStart.disabled = false;
});
btnStop.disabled = true;

function handleClick(click) {
    
    timerId = setInterval(()=> {
        const randomColor = getRandomHexColor(); 
        document.body.style.backgroundColor = randomColor;;
    }, delay);
    btnStart.disabled = true;
    btnStop.disabled = false;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}



