

document.addEventListener('contextmenu', event => {
    event.preventDefault();
});
/**
 * Retrieves the job number from the event target.
 * 
 * @param {Event} event - The triggered event.
 * @returns {string} The job number extracted from the event target's parent element.
 */
function getJobNumber(event) {
    return event.target.parentElement.parentElement.id
}

/**
 * Sends a POST request to a specified endpoint with JSON data and a CSRF token.
 * 
 * @param {string} url - The endpoint URL to send the POST request to.
 * @param {Object} data - The data to send in the request body.
 */
async function handlePostRequest(url, data, UPDATE_END_POINT = 'update_tracker_field') {
    url = `${UPDATE_END_POINT}/${url}`
    fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': "application/json",
            'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value,
        },
        body: JSON.stringify(data)
    }).then(response => {
        if (response.status) {
            console.log(response.status);
        }
    });
}

/**
 * Determines the CSS class for "Due In" based on the remaining days.
 * 
 * @param {number} daysRemaining - Days until the due date.
 * @returns {string} The appropriate CSS class for the element.
 */
function getDueInCSS(daysRemaining) {
    // Ensure gradient is clamped between 0% and 100%
    const gradient = Math.min(Math.abs(daysRemaining) / 100, .99)
    // Base CSS class
    let css = "due-date ";

    // Determine the background color and brightness class based on remaining days
    if (daysRemaining > 0) {
        let red = 256
        let green = 235
        css += `bg-[rgb(${red * (1 - gradient)},${green},0)]`;
    } else {
        let red = Math.max(235 - (200 * gradient), 150)
        console.log(red)
        css += `bg-[rgb(${red},${20},20)] text-white`;
    }

    return css;
}


/**
 * Calculates the days remaining until a specified due date.
 * 
 * @param {string|Date} date - The due date (can be a date string or a Date object).
 * @returns {number} The number of days remaining until the due date.
 */
function calculateDaysRemaining(date) {
    const dueDate = new Date(date);
    const currentDate = new Date();
    const timeDiff = dueDate - currentDate;
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
}

/**
 * Updates the due date, recalculates days remaining, and updates the UI.
 * 
 * @param {Event} event - The triggered event.
 */
function updateDate(event) {
    const daysRemainingElm = document.getElementById(event.target.id).querySelector('.due-date')
    const daysRemaining = calculateDaysRemaining(event.target.value)
    daysRemainingElm.textContent = daysRemaining
    daysRemainingElm.className = getDueInCSS(daysRemaining) + " " + daysRemainingElm.className
    const payload = { 'field': "due-date", 'value': event.target.value }
    handlePostRequest(getJobNumber(event), payload)
}

/**
 * Updates a boolean field based on a toggle event.
 * 
 * @param {Event} event - The triggered event.
 */
function updateBools(event) {
    const payload = { 'field': event.target.ariaLabel, 'value': event.target.checked }
    handlePostRequest(getJobNumber(event), payload)
}

/**
 * Updates notes based on the event target's value.
 * 
 * @param {Event} event - The triggered event.
 */
function updateNotes(event) {
    const payload = { 'field': "notes1", 'value': event.target.value }
    handlePostRequest(getJobNumber(event), payload)
}



function updateOperationStatus(job_number, operationNumber, status) {
    const payload = { "opNumber": operationNumber, 'value': status }
    handlePostRequest(job_number, payload, "update_operation_field")
}

/**
 * Handles mouse button operations based on the button clicked.
 * @param {MouseEvent} event - The mouse event object containing details of the click.
 * 
 * Behavior:
 * - If the left mouse button (button 0) is clicked, an alert is shown with the message "Left Button".
 * - If the right mouse button (button 2) is clicked, an alert is shown with the message "Right Button".
 * - For any other button click, a warning is logged to the console indicating it is unhandled.
 */
function handleOperation(event) {
    switch (event.button) {
        case 0:
            markOperationComplete(event)
            break;
        case 2:
            alert("Right Button");
            break;
        default:
            console.warn("Unhandled button click");
    }
}

/**
 * Handles mouse button actions specifically for processing orders.
 * @param {MouseEvent} event - The mouse event object containing details of the click.
 * 
 * Behavior:
 * - If the left mouse button (button 0) is clicked, an alert is shown with the message "Left Button".
 * - If the right mouse button (button 2) is clicked, an alert is shown with the message "Right Button".
 * - For any other button click, a warning is logged to the console indicating it is unhandled.
 */
function handleOrder(event) {
    switch (event.button) {
        case 0:
            alert("Left Button");
            break;
        case 2:
            alert("Right Button");
            break;
        default:
            console.warn("Unhandled button click");
    }
}


function markOperationComplete(event) {
    const job_number = event.target.parentElement.id
    const step_number = event.target.ariaLabel
}