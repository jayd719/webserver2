let TIMES = [300, 500, 700, 1000];
let tiles = document.querySelector(".grid.grid-cols-1").childNodes;

let firstContainer = tiles[1];
firstContainer.classList.add("lg:translate-x-[100%]");
HEADER.classList.add("translate-y-[-100%]");

let text =
  "My name is JD, a junior-year computer science student. Explore my educational background, skills, and projects";

let x = 0;
let outputObject1 = document.getElementById("outputObject1");

outputObject1.classList.add(
  "font-title",
  "text-left",
  "text-[clamp(1.85rem,6vw,4.2rem)]",
  "font-black",
  "leading-[1.1]"
);

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

function addInterSectionObserver() {
  // Select the grid element and filter child nodes to include only elements
  let tiles1 = Array.from(
    document.querySelector(".grid.grid-cols-1").childNodes
  ).filter((node) => node.nodeType === Node.ELEMENT_NODE);

  // Create the Intersection Observer
  const inter = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("scale-0");
      } else {
        entry.target.classList.add("scale-0");
      }
    });
  });

  // Observe each tile
  tiles1.forEach((tile) => inter.observe(tile));
}
