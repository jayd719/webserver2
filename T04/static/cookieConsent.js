/*-------------------------------------------------------
 * Cookie Consent Popup for Django
 *-------------------------------------------------------
 * Author: JD
 * ID: 91786
 * Version: 1.1.0
 * Last Updated: Thu Jan 09 2025
 *-------------------------------------------------------*/

/**
 * Initializes and displays a GDPR-compliant cookie consent popup
 * if the user hasn't already given consent.
 */
function initializeCookieConsent() {
    // Check for existing consent
    if (hasConsented()) return;

    // Create and show the popup
    const popup = createPopupElement();
    document.body.appendChild(popup);

    // Animate in after short delay
    setTimeout(() => {
        popup.classList.remove("translate-y-full", "opacity-0");
    }, 500);
}

/**
 * Checks if user has already consented to cookies
 * @returns {boolean} True if consent cookie exists
 */
function hasConsented() {
    return document.cookie
        .split(';')
        .some(cookie => cookie.trim().startsWith('cookieConsent='));
}

/**
 * Creates the cookie consent popup element
 * @returns {HTMLElement} The fully constructed popup
 */
function createPopupElement() {
    const popup = document.createElement("div");
    popup.id = "cookie-consent-popup";
    popup.className = "cookie-popup fixed bottom-10 left-0 right-0  bg-info p-4  rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 mx-0 sm:m-4 transform translate-y-full opacity-0 transition-all duration-500 ease-in-out z-[200]";
    popup.setAttribute("role", "dialog");
    popup.setAttribute("aria-label", "Cookie consent");

    // Create content elements
    popup.innerHTML = `
        <div class="container mx-auto max-w-6xl">
            <p class="text-sm mb-4 sm:mb-0">
                We use cookies to enhance your browsing experience and analyze our traffic. 
                By clicking "Accept", you consent to our use of cookies. 
                <a href="/privacy-policy" class="text-primary hover:underline">Learn more</a>
            </p>
        </div>
        <div class="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <button id="cookie-decline" class="btn btn-outline btn-info bg-base-100">
                Decline
            </button>
            <button id="cookie-accept" class="btn btn-outline btn-info bg-base-100">
                Accept
            </button>
        </div>
    `;

    // Add event listeners
    popup.querySelector("#cookie-decline").addEventListener("click", handleDecline);
    popup.querySelector("#cookie-accept").addEventListener("click", handleAccept);

    return popup;
}

/**
 * Handles cookie acceptance
 */
function handleAccept() {
    // Set cookie with 1 year expiration, Secure and SameSite flags
    document.cookie = "cookieConsent=true; path=/; max-age=31536000; Secure; SameSite=Lax";
    removePopup();
}

/**
 * Handles cookie decline
 */
function handleDecline() {
    // In a real implementation, you might set a different cookie to remember the decline
    removePopup();
}

/**
 * Removes the popup with animation
 */
function removePopup() {
    const popup = document.getElementById("cookie-consent-popup");
    if (popup) {
        popup.classList.add("translate-y-full", "opacity-0");
        setTimeout(() => popup.remove(), 500);
    }
}

// Initialize when DOM is fully loaded
document.addEventListener("DOMContentLoaded", initializeCookieConsent);