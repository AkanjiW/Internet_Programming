// Get references to the input elements and the timer display
const hoursInput = document.getElementById("hours");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");
const timerDisplay = document.getElementById("timerDisplay");

// Get the "Start" button reference
const startButton = document.getElementById("startTimer");

// Initialize variables to hold the countdown time
let hours = 0;
let minutes = 0;
let seconds = 0;
let timerInterval;

// Function to update the timer display
function updateTimerDisplay() {
    timerDisplay.textContent = `${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;
}
// Function to start the countdown
function startCountdown() {
    hours = parseInt(hoursInput.value) || 0;
    minutes = parseInt(minutesInput.value) || 0;
    seconds = parseInt(secondsInput.value) || 0;
    // Update the timer display initially
    updateTimerDisplay();
    // Disable input fields and the "Start" button
    hoursInput.disabled = true;
    minutesInput.disabled = true;
    secondsInput.disabled = true;
    startButton.disabled = true;

    // Start the countdown
    timerInterval = setInterval(function () {
        if (hours === 0 && minutes === 0 && seconds === 0) {
            // Countdown is complete, clear the interval
            clearInterval(timerInterval);
            // Enable input fields and the "Start" button
            hoursInput.disabled = false;
            minutesInput.disabled = false;
            secondsInput.disabled = false;
            startButton.disabled = false;
        } else {
            // Update the countdown timer
            if (seconds === 0) {
                if (minutes === 0) {
                    hours--;
                    minutes = 59;
                } else {
                    minutes--;
                }
                seconds = 59;
            } else {
                seconds--;
            }
            updateTimerDisplay();
        }
    }, 1000); // Update the timer every 1 second (1000 milliseconds)
}
// Add a click event listener to the "Start" button
startButton.addEventListener("click", startCountdown);
