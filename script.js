// 🔥 SET YOUR TARGET DATE HERE (Romania time 7 March 2026, 5PM)
const targetDate = new Date("2026-04-07T15:00:00Z").getTime();


function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const display = document.getElementById("countdown");

    if (distance <= 0) {
        display.innerText = "00:00:00";
        return;
    }

    const totalSeconds = Math.floor(distance / 1000);
    const totalHours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    display.innerText =
        String(totalHours).padStart(2, '0') + ":" +
        String(minutes).padStart(2, '0') + ":" +
        String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();
