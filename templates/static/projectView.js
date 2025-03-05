/**
 * Class representing a section of projects with tabs.
 */

/**
 * Constants representing center tiles and skills with their associated image URLs.
 */
const CENTERTILES = [
  28, 29, 30, 31, 32, 40, 41, 42, 43, 44, 52, 53, 54, 55, 56, 64, 65, 66, 67,
  68, 76, 77, 78, 79, 80, 88, 89, 90, 91, 92, 100, 101, 102, 103, 104,
];

const SKILLS = {
  Python: "https://www.svgrepo.com/show/452091/python.svg",
  JavaScript: "https://www.svgrepo.com/show/452045/js.svg",
  HTML: "https://www.svgrepo.com/show/373669/html.svg",
  AWS: "https://www.svgrepo.com/show/448266/aws.svg",
  LINUX: "https://www.svgrepo.com/show/448236/linux.svg",
  GITHUB: "https://www.svgrepo.com/show/448225/github.svg",
  WINDOWS: "https://www.svgrepo.com/show/448239/microsoft.svg",
  JAVA: "https://www.svgrepo.com/show/353924/java.svg",
};

const PROJECTS = {
  FoodApp: "https://github.com/jayd719/DjangoFoodOrderingApp",
  HealthSyncApp: "https://github.com/simranbadwal/HealthSync",
  Portfolio: "https://github.com/jayd719/webserver2",
  Project2: "https://github.com/jayd719/webserver2",
  Project3: "https://github.com/jayd719/webserver2",
};
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

  return `${placement}-${base[getRandomNumber(base.length)]}-${shades[getRandomNumber(shades.length)]
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

/**
 * Class representing common class names for project tiles.
 */
const CLASS =
  "h-20 flex justify-center items-center group p-5 rounded transition duration-100 hover:shadow-xl";

/**
 * Creates and returns an array of project tabs.
 * @param {number} tabs - The number of tabs to create.
 * @returns {Array} - An array of created project elements.
 */
function createTabs(tabs) {
  let projectsList = [];
  let projectsMainContainer = document.createElement("div");
  projectsMainContainer.className = "h-screen w-full overflow-hidden";
  projectsMainContainer.style =
    "background-image: url(https://jayd719.github.io/assets/images/code/img2.png); background-position: center; background-size: contain; background-repeat: no-repeat;";

  let tilesContainer = document.createElement("div");
  tilesContainer.className = "grid grid-cols-12";

  for (let i = 1; i <= tabs; i++) {
    let project = document.createElement("div");
    project.id = i;
    project.className = CLASS;
    project.innerHTML =
      "<div class='hidden transition duration-1000 group-hover:flex'><h1 class='text-3xl text-7xl [text-shadow:_3px_4px_3px_rgb(130_100_2_/_60%)] translate-y-[100%] translate-x-[20%] '>d</h1></div>";
    tilesContainer.appendChild(project);
    projectsList.push(project);
  }

  projectsMainContainer.appendChild(tilesContainer);
  document.getElementById("mm").appendChild(projectsMainContainer);

  return projectsList;
}

/**
 * Generates a random RGB shadow string.
 * @param {number} filter - The filter percentage for the shadow.
 * @returns {string} - A string representing the RGB shadow.
 */
function generateRandomRGBshadow(filter) {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `[text-shadow:_5px_5px_20px_rgb(${r}_${g}_${b}_/_${filter}%)]`;
}

/**
 * Creates and returns the heading element.
 * @returns {HTMLHeadingElement} - The created heading element.
 */
function createHeading() {
  let mainContainer = document.createElement("div");
  mainContainer.className = "px-10 absolute w-full";
  let outputText = document.createElement("h1");
  mainContainer.appendChild(outputText);
  document.getElementById("mm").appendChild(mainContainer);
  return outputText;
}

const TEXTOUTPUT = createHeading();

/**
 * Updates the text output shadow with the specified text.
 * @param {string} text - The main text to display.
 * @param {string} textInner - The inner text to display.
 */
function updateTextOutputShadow(text, textInner) {
  const class_ =
    "text-8xl font-title font-bold absolute top-10 anton-sc-regular";
  TEXTOUTPUT.classList = `${class_} ${generateRandomRGBshadow(60)} flex`;
  TEXTOUTPUT.innerHTML = `${text} <span class='underline text-sm'>${textInner}<span>`;
}

/**
 * Adds skill image to the tab element on hover.
 * @param {HTMLDivElement} tab - The tab element to add the skill image to.
 */
function addSkillsImageToTile(tab) {
  tab.addEventListener("mouseenter", () => {
    tab.className = `${CLASS}`;
    let keys = Object.keys(SKILLS);
    let skill = keys[getRandomNumber(keys.length)];
    updateTextOutputShadow("TOOLS", "Tools");
    tab.children[0].innerHTML = `<div class="p-4 bg-white shadow-xl ${getColor(
      "shadow"
    )} rounded"><img class="w-16" src="${SKILLS[skill]}" alt=""></div>`;
  });
}

/**
 * Adds project link to the tab element on hover.
 * @param {HTMLDivElement} tab - The tab element to add the project link to.
 */
function addProjectsToTile(tab) {
  tab.addEventListener("mouseenter", () => {
    tab.className = `hover:${getColor("bg")} ${CLASS}`;
    let keys = Object.keys(PROJECTS);
    let project = keys[getRandomNumber(keys.length)];
    updateTextOutputShadow("Workbench", "Click to open link");
    tab.children[0].children[0].innerHTML = `<a class="" href="${PROJECTS[project]}">${project}</a>`;
  });
}

/**
 * Updates the project tabs with the corresponding skills or projects.
 * @param {Array} tabs - An array of project tab elements.
 */
function updateTabs(tabs) {
  tabs.forEach((tab) => {
    if (CENTERTILES.includes(parseInt(tab.id))) {
      addSkillsImageToTile(tab);
    } else {
      addProjectsToTile(tab);
    }
  });
}

updateTabs(createTabs(120));
