const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");
const lapButton =   document.getElementById("lap");
const timeElement = document.getElementById("time");
const lapsElement = document.getElementById("laps");

// console.log("startButton", startButton);
// console.log(lapsElement);

let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let intervalId;
let lapTimes = [];

// timing setup function added
function updateTime() {
    milliseconds++;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    // update the time element
    timeElement.textContent = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${milliseconds
        .toString()
        .padStart(3, "0")}`;
}
// start the timer

startButton.addEventListener("click", () => {
    intervalId = setInterval(() => {
        updateTime();
    }, 10);
});

// pause the timer
pauseButton.addEventListener("click", ()=>{
    clearInterval(intervalId)
} );

// reset the timer
resetButton.addEventListener("click", () => {
    clearInterval(intervalId);
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    lapTimes = [];
    timeElement.textContent = "00:00:00";
    lapsElement.innerHTML = "";
});
