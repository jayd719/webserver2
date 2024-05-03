let btns = document.querySelectorAll(".btn");

for (i = 0; i < btns.length; i++) {
  console.log(btns[i]);

  let button = btns[i]
  button.addEventListener("mouseenter", () => {
    button.style.transitionDuration = ".5s";
    button.style.scale='1.05'
  });


  button.addEventListener('mouseleave',()=>{
    button.style.scale='1'
    button.style.transitionDuration = "1s";
  })
}
