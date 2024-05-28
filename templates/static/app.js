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
browser.style.transform = "translateX(360px)translateY(20px)";
// Function to update the position of the div based on scroll
function updateDivPosition() {
  let scrollY = window.scrollY; // Get current scroll position

  if (scrollY > 2) {
    moveJacks();
  }
  //  rotate to 0
  if (scrollY >= 201 && scrollY <= 360) {
    scrollY = scrollY - 200;
    let deg = 20 - scrollY / 8;
    let skew = 8 - scrollY / 20;
    let translateX = scrollY / 2.5;
    let translateY = scrollY / 4;

    browser.style.transform = `translateX(${deg * 16}px)translateY(${20}px)`;
  }

  let text = document.getElementById("textDis");
  let text2 = document.getElementById("textDis1");
  let sourceText =
    "My name is JD, a junior-year computer science student. Explore my educational background, skills, and projects";
  if (scrollY < 450) {
    text.textContent = "";
    text2.textContent = "";
  }
  if (scrollY >= 450 && scrollY <= 3000) {
    scrollY = scrollY / 15 - 27.5;
    text.textContent = sourceText.substring(0, scrollY);
    text2.textContent = sourceText.substring(0, scrollY);
  }
}

setInterval(updateGradute, 1000);
window.addEventListener("scroll", updateDivPosition);

function jacks(numberOfJacks) {
  let jacksContainer = document.getElementById("cards");
  if (document.documentElement.clientWidth > 800) {
    for (i = 0; i < numberOfJacks; i++) {
      let img = new Image();
      img.src = "https://jayd719.github.io/assets/images/jacks/jack1.jpeg";
      img.id = "jack-one";
      // img.className = `jack-image${Math.floor(Math.random() * 3) + 1}`;
      img.style.left = `${10 + Math.floor(Math.random() * 80)}%`;
      img.style.top = `${125 + Math.floor(Math.random() * 50)}%`;

      let degree = Math.floor(Math.random() * 100);
      if (i % 2 == 0) {
        img.style.transform = `rotate(-${degree}deg)`;
      } else {
        img.style.transform = `rotate(${degree}deg)`;
      }
      jacksContainer.appendChild(img);
    }
  }
}
jacks(20);
function moveJacks() {
  let jacks = document.querySelectorAll("#jack-one");
  for (j = 0; j < jacks.length; j++) {
    jacks[j].style.transitionDuration = `${
      Math.floor(Math.random() * 10) + 4
    }s`;
    jacks[j].style.top = "-200%";
  }
}

const slideFromLeft = new IntersectionObserver((elements) => {
  elements.forEach((element) => {
    if (element.isIntersecting) {
      element.target.classList.add("show");
    } else {
      element.target.classList.remove("show");
    }
  });
});
const elementsFromLeft = document.querySelectorAll(".animateLeft");
const elementsFromRight = document.querySelectorAll(".animateRight");
const elementsFromBottom = document.querySelectorAll(".animateBottom");
const elementsToAppear = document.querySelectorAll(".appear");
elementsFromLeft.forEach((element) => slideFromLeft.observe(element));
elementsFromRight.forEach((element) => slideFromLeft.observe(element));
elementsFromBottom.forEach((element) => slideFromLeft.observe(element));
elementsToAppear.forEach((element) => slideFromLeft.observe(element));

const boxes = document.getElementById("boxes");
function addBoxes(n) {
  if (document.documentElement.clientWidth > 800) {
    for (k = 0; k <= n; ++k) {
      let loader = document.createElement("div");
      loader.className = "loader";
      loader.style.top = `${Math.floor(Math.random() * 100)}%`;
      loader.style.left = `${Math.floor(Math.random() * 100)}%`;
      loader.style.scale = `1.${k}`;
      let cube = document.createElement("div");
      cube.className = "cube";
      for (i = 0; i <= 5; ++i) {
        let face = document.createElement("div");
        face.className = "face";
        cube.appendChild(face);
      }
      loader.appendChild(cube);
      boxes.appendChild(loader);
    }
  }
}

function waitAndLog() {
  setTimeout(() => {
    document.getElementById("typeBox1").innerHTML="<span class='show'>Discover my professional journey and qualifications by checking out my resume.</span>"
    document.getElementById('messageBox2').classList.add('show')
    updateTime('timeSpan1',1)
  }, 4000); // 2000 milliseconds = 2 seconds
}

const typingText = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      let container = document.getElementById("typeBox1");
      document.getElementById('timeSpan1').textContent=""
      container.innerHTML = '<div id="loader-dots" class="loaders">';
      waitAndLog();
    }else{
      document.getElementById('messageBox2').classList.remove('show')
    }
  });
});

let obj = document.getElementById('typeBox1');
if (obj) {
  typingText.observe(obj);
}



function updateTime(id,offset) {
  // Get the current date and time
  const now = new Date();

  // Subtract 2 minutes
  now.setMinutes(now.getMinutes() - offset);

  // Format the time (e.g., HH:MM:SS)
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  const formattedTime = `${hours}:${minutes}:${seconds}`;

  // Update the span element
  const timeSpan = document.getElementById(id);
  timeSpan.textContent = formattedTime;
}

