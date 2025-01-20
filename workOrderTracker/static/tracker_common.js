// Utility function to parse cookies into an object
function parseCookies() {
    return document.cookie.split("; ").reduce((cookieMap, cookieString) => {
        const [name, value] = cookieString.split("=");
        cookieMap[name] = value;
        return cookieMap;
    }, {});
}

// Retrieve the theme from cookies
function getSavedTheme() {
    const cookies = parseCookies();
    if (cookies.theme) {
        document.documentElement.setAttribute("data-theme", cookies.theme);
    }
}




// Render a loading spinner and remove it after a delay
function showLoader(duration = 1500) {
    const loader = document.createElement("div");
    loader.className = "absolute top-0 left-0 w-full h-screen bg-base-100 flex items-center justify-center z-[200]";
    loader.innerHTML = `<span class="loading loading-bars loading-lg"></span>`;

    document.body.appendChild(loader);

    // Remove the loader after the specified duration
    setTimeout(() => loader.remove(), duration);
}

// Main execution
(function initializeApp() {
    getSavedTheme();
    showLoader();
})();
