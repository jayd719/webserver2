`-------------------------------------------------------
Django: Cookie Consent Pop Up Message
-------------------------------------------------------
Author: JD
ID: 91786
Uses: 
Version: 1.0.8
__updated__ = Thu Jan 09 2025
-------------------------------------------------------`


// Function to create and display a cookie consent popup
function cookieConsentPopup() {
    // Create the main popup container
    const cookiePopup = document.createElement("div");
    cookiePopup.id = "cookie-popup";
    cookiePopup.className = "fixed bottom-0 left-0 right-0 z-[500] bg-base-200 p-4 shadow-2xl rounded-xl border flex flex-col sm:flex-row items-center justify-between gap-4 m-10 transform translate-y-full opacity-0 transition-all duration-500 ease-in-out hover:scale-[1.05]";

    // Create the decline button
    const declineButton = document.createElement("button");
    declineButton.className = "px-4 py-2 bg-gray-200 text-green-800 rounded hover:bg-gray-300 transition-colors";
    declineButton.innerText = "Decline";
    declineButton.addEventListener("click", () => {
        cookiePopup.remove(); // Remove popup when declined
    });

    // Create the accept button
    const acceptButton = document.createElement("button");
    acceptButton.className = "px-4 py-2 bg-green-600 text-white rounded hover:bg-green-900 transition-colors";
    acceptButton.innerText = "Accept";
    acceptButton.addEventListener("click", () => {
        document.cookie = "cookieConsent=true; path=/; max-age=31536000;Secure; SameSite=Lax";
        cookiePopup.remove(); // Remove popup after acceptance
    });

    // Create a div for buttons
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "flex gap-4";
    buttonContainer.append(declineButton, acceptButton);

    // Create text container with message
    const textContainer = document.createElement("div");
    textContainer.className = "container mx-auto max-w-6xl";
    textContainer.innerHTML = `<p class="text-sm">
        We use cookies to enhance your browsing experience and analyze our traffic. 
        By clicking "Accept", you consent to our use of cookies.
    </p>`;

    // Append elements to the popup
    cookiePopup.append(textContainer, buttonContainer);

    // Append popup to the document body
    document.body.appendChild(cookiePopup);


    // Show cookie message after 1.5s delay
    setTimeout(() => {
        cookiePopup.classList.remove("translate-y-full", "opacity-0")
    }, 1500)
}

// Check if the user has already accepted cookies before displaying the popup
if (!document.cookie.includes("cookieConsent=true")) {
    cookieConsentPopup();
}
