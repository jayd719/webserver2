let HEADER = document.getElementById("header");

function menu() {
  return `
    <ul class="flex flex-col md:flex-row gap-2 font-bold" id="menu">
        <li class="hover:bg-base-300 py-2 px-3 rounded-2xl group flex items-center gap-2 hover:scale-[1.04] hover:cursor-pointer group"><p>Projects</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right group-hover:rotate-[45deg] transition duration-300" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
            </svg>
        </li>
        <li class="hover:bg-base-300 py-2 px-3 rounded-2xl group flex items-center gap-2 hover:scale-[1.04] hover:cursor-pointer"><p>About Me</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right group-hover:rotate-[45deg] transition duration-300" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
            </svg>
        </li>
        <li class="hover:bg-base-300 py-2 px-3 rounded-2xl group flex items-center gap-2 hover:scale-[1.04] hover:cursor-pointer"><p>Contact</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right group-hover:rotate-[45deg] transition duration-300" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
            </svg>
        </li>
    </ul>
    `;
}

HEADER.className =
  " w-full mx-auto fixed z-[300] hover:bg-base-100 hover:shadow-xl hover:shadow-base-100 group";
HEADER.innerHTML = `
<div class="md:px-10 mx-auto p-2 w-full flex justify-between items-center">
    <div class="p-2">
        <img class="scale-[1.25] hover:scale-[1.5] transition delay-3 " src="https://jayd719.github.io/staticfiles/j.png" alt="" style="width: 40px;">
    </div>


    <div class="hidden md:flex">
        <div>
            ${menu()}
        </div> 
    <div>
</div>

`;