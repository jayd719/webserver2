// Create menu items
function testFunction(parm) {
    console.log(parm);
}




function toggleTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    document.cookie = `theme=${theme}; path=/; max-age=31536000`; // 1 year expiration
    invertLogo(theme)

}

function createSubMenu(menuList, text) {
    console.log(menuList)
    // Create the submenu container
    const subMenuContainer = document.createElement("div");
    subMenuContainer.className = "dropdown dropdown-top dropdown-end group";

    // Create the button trigger
    const subMenuText = document.createElement("div");
    subMenuText.tabIndex = 0;
    subMenuText.innerText = text;

    // Create the submenu itself
    const subMenu = document.createElement("ul");
    subMenu.tabIndex = 0;
    subMenu.className = "flex-col dropdown-content bg-base-200 rounded-box z-[100] mt-3 w-52 p-2 shadow-xl hidden group-hover:flex overflow-y-scroll max-h-[80vh]";

    // Populate the submenu with items
    Object.entries(menuList).forEach(([key, value]) => {
        const menuItem = document.createElement("li");
        const actionLink = document.createElement("a");
        actionLink.innerText = key;
        actionLink.href = "#"; // Placeholder href
        actionLink.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default link behavior
            value(); // Call the associated function
        });
        menuItem.appendChild(actionLink);
        subMenu.appendChild(menuItem);

    })


    // Assemble the submenu container
    subMenuContainer.appendChild(subMenuText); // Add the trigger
    subMenuContainer.appendChild(subMenu); // Add the menu

    return subMenuContainer; // Return the complete submenu
}

function renderMenuButton(items) {
    // Create the dropdown container
    const dropdown = document.createElement("div");
    dropdown.className = "dropdown dropdown-left dropdown-end absolute bottom-0 right-0 m-5 z-[200]";
    // Create the button trigger
    const button = document.createElement("div");
    button.tabIndex = 0;
    button.role = "button";
    button.className = "btn btn-circle btn-primary border shadow-xl flex items-center justify-center p-2";
    button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                        </svg>`

    // Create the dropdown menu
    const menu = document.createElement("ul");
    menu.tabIndex = 1;
    menu.className = `menu dropdown-content bg-base-200 rounded-box z-[100] mt-3 w-52 p-2 shadow-xl`

    Object.entries(items).forEach(([text, subMenu]) => {
        const listItem = document.createElement("li");
        menu.appendChild(listItem);
        listItem.appendChild(createSubMenu(subMenu, text));
    });
    // Append the button and menu to the dropdown container
    dropdown.appendChild(button);
    dropdown.appendChild(menu);
    // Append the dropdown container to the body (or any desired parent element)
    document.body.appendChild(dropdown);
}

const items = {
    "Change Theme1":
    {
        "Dark Mode 1": () => testFunction("Dark1 Mode"),
        "Dark Mode 2": () => testFunction("Dark2 Mode"),
        "Dark Mode 3": () => testFunction("Dark3 Mode"),
    },
    "Settings":
    {
        "Settings 1": () => testFunction("Testing One"),
        "Settings 2": () => testFunction("Settings 2"),
        "Settings 3": () => testFunction("Settings 3"),
    },
    "Accounts":
    {
        "Change Password": () => testFunction("Dark1 Mode"),
        "Profile": () => testFunction("Dark2 Mode"),
        "Logout": () => testFunction("Dark3 Mode"),
    },
    "Change Theme": {
        "Light": () => toggleTheme("light"),
        "Dark": () => toggleTheme("dark"),
        "Corporate": () => toggleTheme("corporate"),
        // "Luxury": () => toggleTheme("luxury"),
        "Business": () => toggleTheme("business"),
        "Emerald": () => toggleTheme("emerald"),
        "Night": () => toggleTheme("night"),
        "Coffee": () => toggleTheme("coffee"),
        "Winter": () => toggleTheme("winter"),
        "Retro": () => toggleTheme("retro"),
        "Synthwave": () => toggleTheme("synthwave"),
        "Cyberpunk": () => toggleTheme("cyberpunk"),
        "Valentine": () => toggleTheme("valentine"),
        "Halloween": () => toggleTheme("halloween"),
        "Garden": () => toggleTheme("garden"),
        "Forest": () => toggleTheme("forest"),
        "Aqua": () => toggleTheme("aqua"),
        "Lofi": () => toggleTheme("lofi"),
        "Pastel": () => toggleTheme("pastel"),
        "Fantasy": () => toggleTheme("fantasy"),
        "Wireframe": () => toggleTheme("wireframe"),
        "Black": () => toggleTheme("black"),
        "Dracula": () => toggleTheme("dracula"),
        "Autumn": () => toggleTheme("autumn"),
        "Bumblebee": () => toggleTheme("bumblebee"),
    }

};

renderMenuButton(items)
