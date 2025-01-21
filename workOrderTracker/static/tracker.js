document.body.classList.add("bg-base-100", "h-screen");

/**
 * Constants for table headers.
 */
const HEADERS = {
    job_number: "Job Number",
    order_date: "Order Date",
    due_date: "Due Date",
    due_in: "Due In",
    mark_completed_date: "Completion Date",
    quantity: "Quantity",
    status: "Status",
    assigned_to: "Assigned To",
    customer_name: "Customer Name",
    description: "Description",
    notes_one: "Notes (1)",
    notes_two: "Notes (2)",
    estimated_hours: "Estimated Hours",
    completed_hours: "Completed Hours",
    incoming_inspection: "Incoming Inspection",
    shipping_this_month: "Shipping This Month",
    on_hold: "On Hold",
    is_rush: "Rush Order",
    operations: "Operations Count",
};

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
    innerContainer.className = "relative overflow-x-visible overflow-y-auto";

    const table = document.createElement("table");
    table.className = "table";

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
    datePicker.className = "input text-sm bg-transparent";
    datePicker.addEventListener("change", (event) => {
        console.log("Selected date:", event.target.value);
    });
    return datePicker;
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
    cell.className = `${className || ""} whitespace-nowrap border`;

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

        // Job Number with tooltip
        const tooltip = createTooltip(order.description);
        row.appendChild(createTableCell(order.job_number, "highlight", null, tooltip));

        // Customer Name
        row.appendChild(createTableCell(order.customer_name, "highlight"));

        // Due Date with date picker
        const datePicker = createDatePicker(order.job_number, order.due_date);
        row.appendChild(createTableCell("", "p-0 m-0", null, datePicker));

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
