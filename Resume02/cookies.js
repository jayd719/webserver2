


// JavaScript to handle the cookies popup
document.addEventListener('DOMContentLoaded', function () {
    const cookiesPopup = document.getElementById('cookiesPopup');
    const acceptCookies = document.getElementById('acceptCookies');
    const declineCookies = document.getElementById('declineCookies');
    const openCookiesPopup = document.getElementById('openCookiesPopup');

    // Function to show the cookies popup
    function showCookiesPopup() {
        cookiesPopup.classList.remove('translate-y-full');
    }

    // Function to hide the cookies popup
    function hideCookiesPopup() {
        cookiesPopup.classList.add('translate-y-full');
    }

    // Check if the user has already accepted cookies
    if (!localStorage.getItem('cookiesAccepted') && !localStorage.getItem('cookiesDeclined')) {
        // Show the cookies popup automatically after 1 second
        setTimeout(showCookiesPopup, 1000);
    }

    // Handle "Accept" button click
    acceptCookies.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        hideCookiesPopup();
    });

    // Handle "Decline" button click
    declineCookies.addEventListener('click', () => {
        localStorage.setItem('cookiesDeclined', 'true');
        hideCookiesPopup();
    });

    // Handle "Open Cookies Popup" button click
    openCookiesPopup.addEventListener('click', () => {
        showCookiesPopup();
    });
});
