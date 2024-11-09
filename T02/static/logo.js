let logoImage = document.createElement("div");
logoImage.innerHTML = `<img class="" src="https://jayd719.github.io/staticfiles/j.png" alt="">`;
logoImage.classList.add(
  "fixed",
  "w-1/2",
  "z-[-100]",
  "top-[90%]",
  "left-[35%]",
  "duration-1000",
  "scale-0",
  "opacity-0"
);
document.body.appendChild(logoImage);

HEADER.addEventListener("mouseenter", () => {
  logoImage.classList.remove("z-[-100]", "top-[90%]", "scale-0", "opacity-0");
  logoImage.classList.add("z-[200]", "top-[30%]", "scale-1");
});
HEADER.addEventListener("mouseleave", () => {
  logoImage.classList.remove("z-[200]", "top-[30%]", "scale-1");
  logoImage.classList.add("z-[-100]", "top-[90%]", "scale-0", "opacity-0");
});
