let FOOTER = document.getElementById("footer");
FOOTER.className = "overflow-hidden";

const FOOTER_MENU = {
  Contact: ["opetion1", "opetion1"],
  Pages: ["opetion1", "opetion1"],
};

FOOTER.childNodes[1].className =
  "flex flex-col lg:flex-row justify-center container mx-auto";

// logo continaer
FOOTER.childNodes[1].childNodes[1].className =
  "flex justify-center text-3xl lg:text-6xl  pt-10 mt-10 silkscreen-regular";
FOOTER.childNodes[1].childNodes[1].innerHTML =
  "<a href='https://jashandeep.co.uk'>jashandeep.co.uk</a>";
// container for ULs
FOOTER.childNodes[1].childNodes[3].className =
  "flex justify-end gap-10 w-full p-10";

FOOTER.childNodes[1].childNodes[3].childNodes.forEach((element) => {
  if (element.nodeName === "UL") {
    element.className = "my-10 text-md";
    element.childNodes.forEach((item) => {
      if (item.nodeName === "LI") {
        item.className =
          "hover:scale-[1.25] font-bold opacity-25 hover:opacity-100 p-2 hover:bg-base-100 rounded-3xl transtion duration-200 flex justify-start px-4 hover:cursor-pointer items-center gap-1 group";
      }
    });
  }
});

// let nameTextDiv = document.createElement("div");
// nameTextDiv.className =
//   "anton-500 text-black font-title font-bold text-[clamp(3.0rem,4vw,3.8rem)] md:text-[clamp(5.0rem,4vw,3.8rem)] lg:text-[clamp(6.5rem,4vw,3.8rem)]  xl:text-[clamp(8.0rem,4vw,3.8rem)] font-black leading-[1.1] [word-break:keep-all] p-0 m-0 tranblue-y-[20%] ";
// nameTextDiv.innerHTML =
//   "<span class='w-full translate-y-[30%]'>JASHANDEEP SINGH</span>";
// FOOTER.appendChild(nameTextDiv);
