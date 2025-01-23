/**
 * Constants for table headers.
 */
const HEADERS = {
    job_number: "Job Number",
    customer_name: "Customer Name",
    quantity: "Qty",
    due_date: "Due On",
    due_in: "Due In",
    completed: "Comp %",
    assigned_to: "SA",
    shipping_this_month: "STM",
    incoming_inspection: "INPS",
    is_rush: "Rush",
    notes_one: "Notes",
    mark_completed_date: "Completion Date",
    status: "Status",
    description: "Description",
    notes_two: "Notes (2)",
    estimated_hours: "Estimated Hours",
    completed_hours: "Completed Hours",
    on_hold: "On Hold",
    operations: "Operations Count",
};

/**
 * Creates a date picker element.
 * @param {string} id - The ID of the date picker.
 * @param {string} date - The default date value.
 * @returns {HTMLInputElement} The date picker element.
 */
function createDatePicker(order) {
    const datePicker = document.createElement("input");
    datePicker.type = "date";
    datePicker.value = order.due_date;
    datePicker.id = order.job_number;
    datePicker.className = "input input-sm text-xs bg-transparent";
    datePicker.addEventListener("change", (event) => {
        updateDate(event)
    });
    return datePicker;
}

/**
 * Inserts a separator row for month changes.
 * @param {string|null} currMonth - Current month.
 * @param {string} dueDate - Due date of the next order.
 * @param {HTMLTableSectionElement} tableBody - The table body element.
 * @returns {string} The updated current month.
 */
function insertMonthSeparator(currMonth, dueDate, tableBody) {
    const nextMonth = new Date(dueDate).toLocaleString("default", { month: "long" });
    if (currMonth !== nextMonth) {
        const row = document.createElement("tr");
        row.classList.add("border-b-4", "border-t-4", "bg-primary", "text-[4px]", "border-secondary", "text-white", "font-bold", "brightness-75");
        Object.values(HEADERS).forEach((_, index) => {
            const td = document.createElement("td");
            td.classList.add("p-0");
            if (index % 3 === 0) {
                td.innerText = nextMonth;
            }
            row.appendChild(td);
        });
        tableBody.appendChild(row);
    }
    return nextMonth;
}


/**
 * Creates an input box with a specified default value.
 * @param {string} defaultValue - The default value for the input box.
 * @returns {HTMLInputElement} The created input element.
 */
function createInputBox(defaultValue) {
    const inputBox = document.createElement("input");
    inputBox.type = "text";
    inputBox.className = "input input-xs w-72 rounded-0 bg-transparent text-center";
    inputBox.defaultValue = defaultValue;

    return inputBox;
}

/**
 * Creates a checkbox element.
 * @param {boolean} defaultValue - Whether the checkbox is initially checked.
 * @param {string} style - Style class for the checkbox.
 * @returns {HTMLInputElement} The created checkbox element.
 */
function createCheckBox(defaultValue, style, id) {
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = defaultValue;
    checkBox.className = `checkbox checkbox-${style} border-0 rounded-full checkbox-xs`;
    checkBox.id = id
    checkBox.ariaLabel = style
    checkBox.addEventListener('change', (event) => {
        updateBools(event)
    })
    return checkBox;
}

/**
 * Creates a progress bar element with an overlay label for tracking completion.
 * @param {Object} order - The order object with `estimated_hours` and `completed_hours`.
 * @returns {HTMLElement} A container element with the progress bar and its label.
 */
function createProgressBar(order) {
    // Create a container for the progress bar and label
    const container = document.createElement("div");
    container.classList.add("progress-container");
    container.style.position = "relative"; // Ensure label overlays correctly

    // Create the progress bar element
    const progressBar = document.createElement("progress");
    progressBar.classList.add("progress", "progress-success", "w-32", "h-2");
    progressBar.value = order.estimated_hours > 0
        ? Math.round(((order.completed_hours + 14) / order.estimated_hours) * 100)
        : 0;
    progressBar.max = 100;

    // Create the label element
    const progressLabel = document.createElement("span");
    progressLabel.classList.add("progress-label");
    progressLabel.textContent = `${progressBar.value}%`;
    progressLabel.className = "absolute top-[50%] left-[50%] font-bold text-md"
    progressLabel.style.transform = "translate(-50%, -50%)";


    // Append the progress bar and label to the container
    container.appendChild(progressBar);
    container.appendChild(progressLabel);

    return container;
}


/**
 * Creates a tooltip element to display additional information.
 * @param {string} description - The description text.
 * @returns {HTMLDivElement} The tooltip element.
 */
function createTooltip(description) {
    const tooltip = document.createElement("div");
    tooltip.classList.add(
        "bg-yellow-200",
        "text-black",
        "p-5",
        "hidden",
        "rounded-lg",
        "text-xs",
        "shadow-lg",
        "absolute",
        "group-hover:flex",
        "left-[110%]",
        "z-[100]"
    );
    tooltip.innerText = description;
    return tooltip;
}

/**
 * Creates a tooltip element to display additional information.
 * @param {string} description - The description text.
 * @returns {HTMLDivElement} The tooltip element.
 */
function createTooltipOperation(description) {
    const tooltip = document.createElement("pre");
    tooltip.classList.add(
        "bg-yellow-200",
        "text-black",
        "p-5",
        "hidden",
        "rounded-lg",
        "text-xs",
        "shadow-lg",
        "absolute",
        "group-hover:flex",
        "z-[100]",
        "transition",
        "delay-1000",
        "text-left"
    );
    tooltip.innerText = description;
    return tooltip;
}

/**
 * Initializes the table structure and header.
 * @returns {HTMLTableElement} The created table element.
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
        th.className = "sticky top-0 z-10 bg-base-200 py-10 border border-base-300 text-center";
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
 * Creates a table cell with optional nested elements.
 * @param {string} text - Cell text content.
 * @param {string|null} className - Cell class name.
 * @param {Function|null} action - Click action for the cell.
 * @param {HTMLElement|null} nestedElement - Optional nested element.
 * @returns {HTMLTableCellElement} The created table cell.
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

    let currMonth = null;

    data.forEach((order) => {
        currMonth = insertMonthSeparator(currMonth, order.due_date, tableBody);

        const row = document.createElement("tr");
        row.classList.add("border", "hover:bg-base-200");
        row.id = order.job_number;

        // Add table cells
        row.appendChild(createTableCell(order.job_number, "sticky left-0 z-10", null, createTooltip(order.description)));
        row.appendChild(createTableCell(order.customer_name));
        row.appendChild(createTableCell(order.quantity));
        row.appendChild(createTableCell("", "p-0", null, createDatePicker(order)));

        const daysRemaining = calculateDaysRemaining(order.due_date);
        row.appendChild(createTableCell(daysRemaining, getDueInCSS(daysRemaining), null, null));

        row.appendChild(createTableCell("", null, null, createProgressBar(order)));
        row.appendChild(createTableCell(order.assigned_to));
        row.appendChild(createTableCell("", "p-0", null, createCheckBox(order.shipping_this_month, "success", order.job_number)));
        row.appendChild(createTableCell("", "p-0", null, createCheckBox(order.incoming_inspection, "warning", order.job_number)));
        row.appendChild(createTableCell("", "p-0", null, createCheckBox(order.is_rush, "error", order.job_number)));
        row.appendChild(createTableCell("", "p-0", null, createInputBox(order.notes_one)));
        // add operations
        order.operations.forEach(operation => {
            const op = createTableCell(operation.machine, "group", "", createTooltipOperation(operation.description))
            row.appendChild(op)
        });
        tableBody.appendChild(row);
    });

    table.appendChild(tableBody);
}

/**
 * Fetches work order data and populates the table.
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
document.body.classList.add("bg-base-100", "overflow-hidden");
// Initialize the tracker
loadWorkOrderTracker();
