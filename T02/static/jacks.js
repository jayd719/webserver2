/**
 * -------------------------------------------------------
 * Adds a specified number of image elements to the 'cards' container element.
 * Use: jacks(20)
 * -------------------------------------------------------
 * Parameters:
 *     numberOfJacks - The number of image elements to add (Number).
 * -------------------------------------------------------
 * Returns:
 *     None
 * -------------------------------------------------------
 */
function jacks(numberOfJacks) {
  let jacksContainer = document.getElementById("cards");

  for (i = 0; i < numberOfJacks; i++) {
    let img = new Image();
    img.src = "https://jayd719.github.io/assets/images/jacks/jack1.jpeg";
    img.id = "jack-one";
    img.className = "absolute rounded-lg w-32 z-[300] border shadow-xl border-black";
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

/**
 * -------------------------------------------------------
 * Moves the image elements with ID 'jack-one' by changing their top position.
 * Use: moveJacks()
 * -------------------------------------------------------
 * Parameters:
 *     None
 * -------------------------------------------------------
 * Returns:
 *     None
 * -------------------------------------------------------
 */
function moveJacks() {
  let jacks = document.querySelectorAll("#jack-one");
  for (j = 0; j < jacks.length; j++) {
    jacks[j].style.transitionDuration = `${
      Math.floor(Math.random() * 10) + 4
    }s`;
    jacks[j].style.top = "-200%";
  }
}

if (document.documentElement.clientWidth > 800) {
  jacks(20);
}

window.addEventListener("scroll", () => {
  if (window.screenY > 2) {
    moveJacks();
  }
});
