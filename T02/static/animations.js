let TIMES = [300, 500, 700, 1000];
let tiles = document.querySelector(".grid.grid-cols-1").childNodes;

let firstContainer = tiles[1];

tiles.forEach((element) => {
  if (
    (element != firstContainer) &
    (element.nodeName === "DIV" || element.nodeName === "A")
  ) {
    element.classList.add("scale-0");
  }
});

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

  addInterSectionObserver()
}, 2000);

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
