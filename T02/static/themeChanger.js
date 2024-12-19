class ThemeController {
  #theme1 = null;
  #theme2 = null;

  constructor(theme1, theme2) {
    this.#theme1 = theme1;
    this.#theme2 = theme2;

    this.#createToggleButton();
    this.#initializeTheme();
    this.#addEventListeners();
  }

  /**
   * Set a cookie with the specified name, value, and expiration (in days).
   */
  #setCookie(name, value, days) {
    const expiryDate = new Date();
    expiryDate.setTime(expiryDate.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expiryDate.toUTCString()};path=/`;
  }

  /**
   * Get the value of a specified cookie.
   */
  #getCookie(name) {
    const cookies = document.cookie.split(";");
    const prefix = `${name}=`;

    for (let cookie of cookies) {
      cookie = cookie.trim();
      if (cookie.startsWith(prefix)) {
        return cookie.substring(prefix.length);
      }
    }

    return ""; // Default to an empty string if the cookie does not exist
  }

  /**
   * Toggle between themes and update the cookie.
   */
  toggle() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme =
      currentTheme === this.#theme1 ? this.#theme2 : this.#theme1;

    document.documentElement.setAttribute("data-theme", newTheme);
    this.#setCookie("theme", newTheme, 2);
  }

  /**
   * Add event listeners for the theme toggle button.
   */
  #addEventListeners() {
    document
      .getElementById("themeChanger")
      .addEventListener("click", () => this.toggle());
  }

  /**
   * Create and inject the theme toggle button into the DOM.
   */
  #createToggleButton() {
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "fixed bottom-0 right-0 z-[600] py-3 px-5";
    buttonContainer.innerHTML = `
      <div class="form-control">
        <label class="label cursor-pointer">
          <input type="checkbox" id="themeChanger" class="toggle" checked />
        </label>
      </div>
    `;
    document.body.appendChild(buttonContainer);
  }

  /**
   * Initialize the theme based on the saved cookie value or default theme.
   */
  #initializeTheme() {
    const savedTheme = this.#getCookie("theme");
    const initialTheme = savedTheme || this.#theme1;

    document.documentElement.setAttribute("data-theme", initialTheme);
  }
}

// Example usage
const themeController = new ThemeController("fantasy", "forest");