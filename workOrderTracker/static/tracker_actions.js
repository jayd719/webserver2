
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
async function handlePostRequest(url, data) {
    const UPDATE_END_POINT = 'update_tracker_field'
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
    const gradient = Math.abs(daysRemaining / 50);
    let css = "due-date text-center font-bold ";

    if (daysRemaining > 7) {
        css += `bg-[rgba(5,211,50,${gradient})]`;
    } else if (daysRemaining > 0) {
        css += `bg-[rgba(250,245,0,${0.25 + gradient})]`;
    } else {
        css += `bg-[rgba(250,0,0,${0.3 + gradient})]`;
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
    daysRemainingElm.className = getDueInCSS(daysRemaining)
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