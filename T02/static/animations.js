let TIMES = [300, 500, 700, 1000];
let tiles = document.querySelector(".grid.grid-cols-1").childNodes;

let firstContainer = tiles[1];
firstContainer.classList.add("lg:translate-x-[100%]");
HEADER.classList.add("translate-y-[-100%]");

let text =
  "My name is JD, a junior-year computer science student. Explore my educational background, skills, and projects";

let x = 0;
let outputObject1 = document.getElementById("outputObject1");

outputObject1.className =
  "mt-4 text-5xl text-zinc-500 dark:text-zinc-400 font-light my-10 pb-10";



setTimeout(() => {
  myInterval = setInterval(() => {
    outputObject1.innerText = text.substring(0, x);
    x++;
  }, 60);
}, 1000);

tiles.forEach((element) => {
  if (
    (element != firstContainer) &
    (element.nodeName === "DIV" || element.nodeName === "A")
  ) {
    element.classList.add("scale-0");
  }
});

setTimeout(() => {
  firstContainer.classList.remove("lg:translate-x-[100%]");
  HEADER.classList.add("transition", "duration-1000");
  HEADER.classList.remove("translate-y-[-100%]");
}, 9000);

setTimeout(() => {
  tiles.forEach((element) => {
    if (
      (element != firstContainer) &
      (element.nodeName === "DIV" || element.nodeName === "A")
    ) {
      element.classList.add(
        "transition",
        `duration-${TIMES[getRandomNumber(TIMES.length)]}`
      );
      element.classList.remove("scale-0");
    }
  });

  addInterSectionObserver();
  clearInterval(myInterval);
}, 10000);


// Create the Intersection Observer
const cardsIntersection = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      moveJacks();
    }
  });
});

// Observe the element
cardsIntersection.observe(document.getElementById('cards'));
