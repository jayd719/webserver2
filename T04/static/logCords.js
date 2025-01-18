// Sends a POST request with JSON data and CSRF token
function handlePostRequest(url, data) {
    fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': "application/json", // Specifies JSON content
            'X-CSRFToken': csrfToken, // Includes CSRF token for security
        },
        body: JSON.stringify(data) // Converts data to JSON string
    }).then(response => {
        if (response.status) { // Logs response status if available
            console.log(response.status);
        }
    });
}



// Fetch CSRF token value from the DOM
let csrfToken = document.querySelector('[name=csrfmiddlewaretoken]');
if (csrfToken) {
    csrfToken = csrfToken.value;
}

// Set URL and data, then call the function
const url = '/pages/testlink/';

navigator.geolocation.getCurrentPosition((poition) => {
    console.log(poition)
    handlePostRequest(url, poition);
})


