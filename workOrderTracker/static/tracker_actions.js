
// Sends a POST request with JSON data and CSRF token
function handlePostRequest(url, data) {
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
 * Determines the CSS class for "Due In" based on remaining days.
 * @param {number} daysRemaining - Days until the due date.
 * @returns {string} The CSS class for styling the element.
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
 * Calculates the days remaining until a specified date.
 * @param {string|Date} date - The due date.
 * @returns {number} Days remaining until the due date.
 */
function calculateDaysRemaining(date) {
    const dueDate = new Date(date);
    const currentDate = new Date();
    const timeDiff = dueDate - currentDate;
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
}



async function updateDate(event) {
    const daysRemainingElm = document.getElementById(event.target.id).querySelector('.due-date')
    const daysRemaining = calculateDaysRemaining(event.target.value)
    daysRemainingElm.textContent = daysRemaining
    daysRemainingElm.className = getDueInCSS(daysRemaining)
    const payload = { 'field': "due-date", 'value': event.target.value }
    handlePostRequest(event.target.id, payload)
}

async function updateBools(event) {
    const payload = { 'field': event.target.ariaLabel, 'value': event.target.checked }
    handlePostRequest(event.target.id, payload)
}