// Set the date to countdown to (October 14, 2023)
const countdownDate = new Date("October 14, 2023 00:00:00").getTime();

// Update the countdown every second
const countdownTimer = setInterval(() => {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the remaining time in milliseconds
  const remainingTime = countdownDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  // Display the countdown in the "countdown" div
  document.getElementById(
    "countdown"
  ).innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // If the countdown is over, display a message
  if (remainingTime <= 0) {
    clearInterval(countdownTimer);
    document.getElementById("countdown").innerHTML = "Countdown is over!";
  }
}, 1000);
