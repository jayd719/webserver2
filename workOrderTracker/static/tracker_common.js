// Utility function to parse cookies into an object
function parseCookies() {
    return document.cookie.split("; ").reduce((cookieMap, cookieString) => {
        const [name, value] = cookieString.split("=");
        cookieMap[name] = value;
        return cookieMap;
    }, {});
}

function invertLogo(theme) {
    const lightThemes = [
        "light",
        "corporate",
        "emerald",
        "winter",
        "garden",
        "pastel",
        "fantasy",
        "autumn",
        "lofi",
        "wireframe",
        "cyberpunk",
        "bumblebee",
        "retro",
        "valentine"
    ];
    lightThemes.includes(theme) ? document.getElementById("logo-main").classList.add("invert") : document.getElementById("logo-main").classList.remove("invert")
}

// Retrieve the theme from cookies
function getSavedTheme() {
    const cookies = parseCookies();
    theme = "emerald"
    if (cookies.theme) {
        theme = cookies.theme
    }
    document.documentElement.setAttribute("data-theme", theme);
    invertLogo(theme)
}




// Render a loading spinner and remove it after a delay
function showLoader(duration = 4000) {
    const loader = document.createElement("div");
    loader.className = "absolute top-15 left-0 w-full h-screen bg-base-100 flex items-center justify-center z-[200]";
    loader.innerHTML = `<progress class="progress w-96"></progress>`;

    document.body.appendChild(loader);

    // Remove the loader after the specified duration
    setTimeout(() => loader.remove(), duration);
}

// Main execution
(function initializeApp() {
    getSavedTheme();
    showLoader();
})();
