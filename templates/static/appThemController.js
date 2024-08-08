class themeController {
    #theme1 = null;
    #theme2 = null;
    constructor(theme1, theme2) {
      this.theme1 = theme1;
      this.theme2 = theme2;
  
      this.#addToButton();
      this.#addEvent_();
    }
    /**
     * -------------------------------------------------------
     * Sets a cookie with a specified name, value, and expiration date.
     * Use: setCookie('cookieName', 'cookieValue', 7)
     * -------------------------------------------------------
     * Parameters:
     *     cname  - The name of the cookie to set (String).
     *     cvalue - The value to assign to the cookie (String).
     *     exdays - The number of days until the cookie expires (Number).
     * -------------------------------------------------------
     * Returns:
     *     None
     * -------------------------------------------------------
     */
    #setCookie(cname, cvalue, exdays) {
      const d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      let expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    /**
     * -------------------------------------------------------
     * Retrieves the value of a specified cookie.
     * Use: let cookieValue = getCookie('cookieName')
     * -------------------------------------------------------
     * Parameters:
     *     cname - The name of the cookie whose value is to be retrieved (String).
     * -------------------------------------------------------
     * Returns:
     *     The value of the specified cookie if it exists (String).
     *     An empty string if the cookie does not exist.
     * -------------------------------------------------------
     */
    #getCookie(cname) {
      let name = cname + "=";
      let ca = document.cookie.split(";");
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }
    /**
     * -------------------------------------------------------
     * Toggles between two specified themes and sets a cookie to remember the selected theme.
     * Use: toggle('light', 'dark')
     * -------------------------------------------------------
     * Parameters:
     *     theme1 - The first theme (String).
     *     theme2 - The second theme (String).
     * -------------------------------------------------------
     * Returns:
     *     None
     * -------------------------------------------------------
     */
    toggle() {
      const newTheme =
        document.querySelector("html").getAttribute("data-theme") === this.theme1
          ? this.theme2
          : this.theme1;
      document.querySelector("html").setAttribute("data-theme", newTheme);
      setCookie("theme", newTheme, 2);
    }
  
    #addEvent_() {
      document.getElementById("themeChanger").addEventListener("click", () => {
        this.toggle();
      });
    }
  
    /**
     * -------------------------------------------------------
     * Retrieves the value of a specified cookie.
     * Use: let cookieValue = getCookie('cookieName')
     * -------------------------------------------------------
     * Parameters:
     *     cname - The name of the cookie whose value is to be retrieved (String).
     * -------------------------------------------------------
     * Returns:
     *     The value of the specified cookie if it exists (String).
     *     An empty string if the cookie does not exist.
     * -------------------------------------------------------
     */
    #addToButton() {
      let themeChanger = document.createElement("div");
      themeChanger.innerHTML = `<div class="fixed bottom-0 right-0 z-[100] py-3 px-5">
                                <div class="form-control">
                                    <label class="label cursor-pointer">
                                        <input type="checkbox" id="themeChanger" class="toggle" checked="checked" />
                                    </label>
                                </div>    
                            </div>`;
      document.body.appendChild(themeChanger);
  
      let theme = this.#getCookie("theme");
      if (theme != "") {
        document.querySelector("html").setAttribute("data-theme", theme);
      }
    }
  }
  
  
  