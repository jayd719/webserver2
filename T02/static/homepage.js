function getColor_base() {
  const base = [
    "red",
    "green",
    "blue",
    "yellow",
    "orange",
    "teal",
    "sky",
    "pink",
    "purple",
    "indigo",
    "cyan",
    "emerald",
    "lime",
    "amber",
    "violet",
    "rose",
    "fuchsia",
    "slate",
  ];

  return base[getRandomNumber(base.length)];
}

/**
 * Generates a random color string based on the given placement.
 * @param {string} placement - The placement identifier for the color.
 * @returns {string} - A string representing a randomly chosen color and shade.
 */
function getColor(placement) {
  const base = [
    "red",
    "green",
    "blue",
    "yellow",
    "purple",
    "orange",
    "teal",
    "sky",
  ];
  const shades = ["200", "300", "400", "500", "600", "700", "800", "900"];

  return `${placement}-${base[getRandomNumber(base.length)]}-${
    shades[getRandomNumber(shades.length)]
  }`;
}

/**
 * Generates a random number between 0 and the specified upper limit.
 * @param {number} upperLimit - The upper limit for the random number.
 * @returns {number} - A random number between 0 and upperLimit.
 */
function getRandomNumber(upperLimit) {
  return Math.floor(Math.random() * upperLimit);
}

function updateElement(element) {
  let baseColor = getColor_base();
  element.classList.add(
    `bg-${"base"}-100`,
    "hover:scale-[1.01]",
    `hover:bg-${baseColor}-200`,
    "lg:opacity-80",
    "hover:opacity-100",
    "hover:scale-[1.0]",
    "hover:z-[200]",
    "group",
    "scale-[.95]",
    "hover:shadow-xl",
    `hover:shadow-${baseColor}-600`,
    "transition",
    "duration-800",
    "backdrop-blur-md",
    "rounded-md",
    "lg:rounded-2xl",
    "py-8",
    "px-5",
    "md:px-8"
  );

  element.querySelectorAll("p").forEach((pTage) => {
    pTage.classList.add(
      `group-hover:text-${baseColor}-800`,
      "group-hover:scale-[1.075]",
      "transtion",
      "duration-500"
    );
  });

  element.querySelectorAll("img").forEach((img) => {
    img.classList.add("group-hover:scale-[1.1]");
  });

  element.querySelectorAll(".contactLink").forEach((button) => {
    button.classList.add(
      `hover:bg-${baseColor}-500`,
      "border",
      `hover:text-${baseColor}-100`,
      `group-hover:border-${baseColor}-500`,
      `group-hover:text-${baseColor}-900`
    );
  });
}

if (document.querySelector(".grid.grid-cols-1")) {
  document.querySelector(".grid.grid-cols-1").childNodes.forEach((element) => {
    if (element.nodeName === "DIV" || element.nodeName === "A") {
      updateElement(element);
    }
  });
}

document.getElementById("menu").childNodes.forEach((element) => {
  if (element.nodeName === "LI") {
    updateElement(element);
    element.classList.remove("bg-base-100");
    element.classList.remove("py-8");
    element.classList.remove("lg:rounded-2xl");
  }
});
