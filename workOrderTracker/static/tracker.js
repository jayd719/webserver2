document.body.classList.add("bg-base-100", 'overflow-hidden');

/**
 * Constants for table headers.
 */
const HEADERS = {
    job_number: "Job Number",
    customer_name: "Customer Name",
    quantity: "Qty",
    due_date: "Due On",
    due_in: "Due In",
    compeleted: "Comp %",
    assigned_to: "Assigned To",
    shipping_this_month: "STM",
    notes_one: "Notes",
    mark_completed_date: "Completion Date",
    status: "Status",
    assigned_to: "Assigned To",
    description: "Description",
    notes_two: "Notes (2)",
    estimated_hours: "Estimated Hours",
    completed_hours: "Completed Hours",
    incoming_inspection: "Incoming Inspection",
    on_hold: "On Hold",
    is_rush: "Rush Order",
    operations: "Operations Count",
};
function createShippingCheckBox(default_value) {
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = default_value
    checkBox.className = "checkbox checkbox-success border-0 rounded-full";
    return checkBox;
}

/**
 * Creates a progress bar element for an order.
 * @param {Object} order - The order object containing `estimated_hours` and `completed_hours`.
 * @returns {HTMLProgressElement} The configured progress bar element.
 */
function createProgressBar(order) {
    const progressBar = document.createElement("progress");
    progressBar.classList.add("progress", "progress-success");
    progressBar.value = order.estimated_hours > 0
        ? Math.round(((order.completed_hours + 14) / order.estimated_hours) * 100)
        : 0;
    progressBar.max = 100;
    return progressBar;
}

/**
 * Creates a tooltip-style description container.
 * @param {string} description - The description text.
 * @returns {HTMLDivElement} The description element.
 */
function createTooltip(description) {
    const tooltip = document.createElement("div");
    tooltip.classList.add(
        "bg-yellow-200",
        "text-black",
        "p-5",
        "hidden",
        "rounded-lg",
        "text-sm",
        "shadow-lg",
        "absolute",
        "group-hover:flex",
        "left-[110%]",
        "z-[100]",
    );
    tooltip.innerText = description;
    return tooltip;
}

/**
 * Initializes and creates the table structure.
 * @returns {HTMLTableElement} The initialized table element.
 */
function initializeTable() {
    const container = document.createElement("div");
    container.className = "overflow-x-auto";

    const innerContainer = document.createElement("div");
    innerContainer.className = "relative overflow-x-visible overflow-y-auto h-[92vh]";

    const table = document.createElement("table");
    table.className = "table table-xs mb-20 text-center";

    const header = document.createElement("thead");
    const headerRow = document.createElement("tr");

    Object.entries(HEADERS).forEach(([key, headerText]) => {
        const th = document.createElement("th");
        th.className = "sticky top-0 z-10 bg-base-300 py-6 border border-base-300 text-center";
        th.innerText = headerText;

        if (key === "job_number") {
            th.classList.add("sticky", "left-0", "z-20");
        }
        headerRow.appendChild(th);
    });

    header.appendChild(headerRow);
    table.appendChild(header);

    innerContainer.appendChild(table);
    container.appendChild(innerContainer);
    document.body.appendChild(container);

    return table;
}

/**
 * Creates a date picker element.
 * @param {string} id - The ID of the date picker.
 * @param {string} date - The default date value.
 * @returns {HTMLInputElement} The date picker element.
 */
function createDatePicker(id, date) {
    const datePicker = document.createElement("input");
    datePicker.type = "date";
    datePicker.value = date;
    datePicker.id = id;
    datePicker.className = "input input-sm text-xs bg-transparent";
    datePicker.addEventListener("change", (event) => {
        console.log("Selected date:", event.target.value);
    });
    return datePicker;
}


/**
 * Returns the CSS class for "Due In" based on the number of days remaining.
 * @param {number} daysRemaining - The number of days remaining until the due date.
 * @returns {string} The CSS class for styling the "Due In" element.
 */
function getDueInCSS(daysRemaining) {
    const gradient = daysRemaining / 100
    console.log(gradient)
    let css = `text-center font-bold `;
    // Conditional color classes
    if (daysRemaining > 7) {
        css += `text-green1-900 bg-[rgba(5,211,50,${gradient})]`;
    } else if (daysRemaining > 0) {
        css += `text-yellow1-600 bg-[rgba(250,245,0,${.1 + gradient})]`;
    } else {
        css += `text-red-6001 bg-[rgba(250,0,0,${gradient})]`;
    }

    return css;
}
/**
 * Creates a "Due In" span element showing the days remaining until the due date.
 * @param {string} id - The ID of the associated item.
 * @param {string|Date} date - The due date in a valid date format or Date object.
 * @returns {HTMLSpanElement} The "Due In" span element.
 */
function createDueIn(date) {
    const dueDate = new Date(date)
    const currentDate = new Date();
    const timeDiff = dueDate - currentDate;
    const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return daysRemaining;
}


/**
 * Creates a table cell element with optional nested elements.
 * @param {string} text - The text content of the cell.
 * @param {string|null} className - The class name for the cell.
 * @param {Function|null} action - Optional click action for the cell.
 * @param {HTMLElement|null} nestedElement - Optional nested element.
 * @returns {HTMLTableCellElement} The table cell element.
 */
function createTableCell(text, className = null, action = null, nestedElement = null) {
    const cell = document.createElement("td");
    cell.innerText = text;
    cell.className = `${className || ""} whitespace-nowrap border border-base-300`;

    if (nestedElement) {
        cell.appendChild(nestedElement);
        cell.classList.add("group");
    }

    if (action) {
        cell.addEventListener("click", action);
    }

    return cell;
}

/**
 * Populates the table with work order data.
 * @param {Array} data - Array of work order objects.
 */
function populateTable(data) {
    const table = initializeTable();
    const tableBody = document.createElement("tbody");


    data.forEach((order) => {
        const row = document.createElement("tr");
        row.classList.add("border", "hover:bg-base-200");
        row.id = order

        // Job Number with tooltip
        const tooltip = createTooltip(order.description);
        row.appendChild(createTableCell(order.job_number, "sticky left-0 z-10" + order.status, null, tooltip));
        // Customer Name
        row.appendChild(createTableCell(order.customer_name, order.status, null, null));

        row.appendChild(createTableCell(order.quantity, order.status, null, null));
        // Due Date with date picker
        const datePicker = createDatePicker(order.job_number, order.due_date);
        row.appendChild(createTableCell("", "p-0 m-0", null, datePicker));
        // Due In
        const due_in = createDueIn(order.due_date)
        const dueInTD = createTableCell(due_in, getDueInCSS(due_in), null, null)
        dueInTD.id = `due-in-${order.job_number}`
        row.appendChild(dueInTD)

        // completed
        const progressBar = createProgressBar(order)
        row.appendChild(createTableCell(progressBar.value, "flex flex-col items-center space-y-2 border-0 pt-2", null, progressBar));


        // assigned to
        row.appendChild(createTableCell(order.assigned_to__name, order.status, null, null));

        // shipping CheckBox
        const shippingCheckBox = createShippingCheckBox(order.shipping_this_month)
        row.appendChild(createTableCell("", "p-2", null, shippingCheckBox));




        tableBody.appendChild(row);
    });

    table.appendChild(tableBody);
}

/**
 * Fetches work order tracker data and populates the table.
 */
async function loadWorkOrderTracker() {
    try {
        const response = await fetch("/work-order-tracker/testlink/");
        if (!response.ok) {
            console.error("Failed to fetch tracker data");
            return;
        }

        const { data } = await response.json();
        populateTable(data);
    } catch (error) {
        console.error("Error fetching tracker data:", error);
    }
}

// Initialize the tracker
loadWorkOrderTracker();
