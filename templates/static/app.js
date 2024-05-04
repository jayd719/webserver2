function calculateTimeFromDate(inputDate) {
  // Convert inputDate to a JavaScript Date object
  const startDate = new Date(inputDate);

  // Get the current date and time
  const currentDate = new Date();

  // Calculate the difference in milliseconds
  const difference = startDate - currentDate;

  // Convert milliseconds to days, hours, minutes, and seconds
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function updateGradute() {
  const inputDate = "2025-08-30T12:00:00"; // Example date string
  const timeDifference = calculateTimeFromDate(inputDate);
  document.getElementById("days").textContent = timeDifference.days;
  document.getElementById("hours").textContent = timeDifference.hours;
  document.getElementById("mins").textContent = timeDifference.minutes;
  document.getElementById("secs").textContent = timeDifference.seconds;
}

// [transform:rotateX(20deg)rotateZ(-20deg)skewY(8deg)scale(1)] rtl:[--rtl-reverse:-1] rtl:[transform:rotateX(20deg)rotateZ(20deg)skewY(-8deg)scale(1)]
// Get the div element
let browser = document.getElementById("browser");
browser.style.transform = "rotateX(20deg)rotateZ(-20deg)skewY(8deg)";
// Function to update the position of the div based on scroll
function updateDivPosition() {
  let scrollY = window.scrollY; // Get current scroll position

  //  rotate to 0
  if (scrollY >= 201 && scrollY <= 360) {
    scrollY = scrollY - 200;
    let deg = 20 - scrollY / 8;
    let skew = 8 - scrollY / 20;
    let translateX = scrollY / 2.5;
    let translateY = scrollY /4;
    browser.style.transform = `rotateX(${deg}deg)rotateZ(-${deg}deg)skewY(${skew}deg)translateX(-${translateX}px)translateY(${translateY}px)`;
  }

  let text = document.getElementById("textDis");
  let sourceText = "My name is JD, a junior-year computer science student. Explore my educational background, skills, and projects";
  if (scrollY < 450) {
    text.textContent = "";
  }
  if (scrollY >= 450 && scrollY <= 3000) {
    scrollY = scrollY/15 - 27.5;
    console.log(scrollY);
    text.textContent = sourceText.substring(0, scrollY);
  }
}

setInterval(updateGradute, 1000);
window.addEventListener("scroll", updateDivPosition);
