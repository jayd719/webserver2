
const CHECK_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16"><path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/></svg>`
const CSS_ALL = 'whitespace-nowrap border border-base-300'
const CSS_OPS = 'group hover:cursor-pointer ' + CSS_ALL
const HEADERS_CSS = "sticky top-0 z-10 bg-base-200 p-10 text-center "
/**
 * Constants for table headers.
 */
const HEADERS = {
    job_number: ["Order Number", "H"],
    customer_name: ["Customer Name", "Customer Info"],
    quantity: ["Qty", "Numbers"],
    due_date: ["Due On", "Dates"],
    due_in: ["Due In", "Dates"],
    completed: ["Comp %", "Progress"],
    sales_id: ["SA", "Assigned"],
    shipping_this_month: ["STM", "Shipping"],
    incoming_inspection: ["INPS", "Inspection"],
    is_rush: ["Rush", "Priority"],
    notes_one: ["Notes", "Notes Section"],
    on_hold: ["On Hold", "Status"],
    assigned_to: ["SA", "Assigned"],
    ...Object.fromEntries(
        Array.from({ length: 30 }, (_, i) => [`operation${i + 1}`, [`OP ${i + 1}`, "Operation"]])
    ),
};

/**
 * Constants for table headers.
 */
const STATUS = {
    NEW: " ",
    PENDING: "base-200",
    IN_PROGRESS: "warning",
    COMPLETED: "success text-success border-0",
    CANCELED: "Canceled",
};




/**
 * Creates a control panel with buttons for different operation statuses.
 * Each button is associated with a tooltip that displays the operation's status.
 * @returns {HTMLDivElement} The operation control panel element.
 */
function CreateOperationControlPanel() {
    const operationPanel = document.createElement("div")
    operationPanel.classList.add("hidden", "group-hover:flex", "gap-3", "absolute", "translate-y-[-40px]", "translate-x-[20px]")
    const actions = {
        PENDING: "Mark As Pending",
        IN_PROGRESS: "Mark In Progress",
        COMPLETED: "Mark As Completed",
    };
    Object.entries(actions).forEach(([action, text]) => {
        const toolTip = document.createElement("div")
        toolTip.className = "tooltip"
        toolTip.setAttribute("data-tip", text);
        const button = document.createElement('btn')
        button.className = `btn btn-xs btn-${STATUS[action]} opacity-20 hover:opacity-100`
        button.innerText = `✓`
        button.addEventListener("click", (event) => {
            event.target.parentElement.parentElement.parentElement.className = `${CSS_OPS} bg-${STATUS[action]}`
            updateOperationStatus(event)
        })
        toolTip.appendChild(button)
        operationPanel.appendChild(toolTip)
    });
    return operationPanel
}

function createEmpDropDownList(menuOptions, currValue) {
    const dropDownMenu = document.createElement('select'); // Use 'select' for dropdown
    dropDownMenu.classList.add(
        "input",
        "input-sm",
        'text-xs', "p-0", "m-0", "bg-transparent", "text-center", "w-24", "hover:cursor-pointer",
    );

    // Populate the dropdown with the provided menu options
    menuOptions.forEach(option => {
        const menuOption = document.createElement('option');
        menuOption.value = option;
        menuOption.textContent = option;
        if (option === currValue) {
            menuOption.selected = true;
        }
        dropDownMenu.appendChild(menuOption);
    });
    dropDownMenu.addEventListener("change", (event) => {
        const payload = { 'field': "assigned_to", "value": event.target.value }
        handlePostRequest(getJobNumber(event), payload)
    })
    return dropDownMenu;
}

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
            td.classList.add(null);
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

    inputBox.addEventListener("change", (event) => {
        updateNotes(event)
    })
    return inputBox;
}

/**
 * Creates a checkbox element.
 * @param {boolean} defaultValue - Whether the checkbox is initially checked.
 * @param {string} style - Style class for the checkbox.
 * @returns {HTMLInputElement} The created checkbox element.
 */
function createCheckBox(defaultValue, style, action) {
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = defaultValue;
    checkBox.className = `checkbox checkbox-${style} border-0 rounded-full checkbox-xs`;
    checkBox.ariaLabel = style
    checkBox.addEventListener('change', (event) => {
        action(event)
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
 * Formats an operation object into a readable string description.
 * 
 * @param {Object} operation - The operation object containing details of the operation.
 * @param {number} operation.step_number - The step number of the operation in a process.
 * @param {string} operation.machine - The machine or equipment involved in the operation.
 * @param {string} operation.description - A brief description of the operation.
 * @param {number} operation.estimated_hours - The estimated time required for the operation.
 * @param {number} operation.actual_hours - The actual time taken for the operation.
 * 
 * @returns {string} A formatted string containing the operation details.
 */
function operationDescription(operation) {
    return `Step Number:${operation.step_number} - ${operation.machine}  

${operation.description}
    
Estimated Hours: ${operation.estimated_hours}
Actual Hours: ${operation.actual_hours}
    `;
}

/**
 * Creates a tooltip element to display additional information.
 * @param {string} description - The description text.
 * @returns {HTMLDivElement} The tooltip element.
 */
function createTooltip(description, postion = "-") {
    const tooltip = document.createElement("div");
    tooltip.classList.add(
        postion,
        "transition",
        "duration-1000",
        "ease-in-out",
        "bg-yellow-200",
        "text-black",
        "p-5",
        "hidden",
        "rounded-lg",
        "text-xs",
        "shadow-lg",
        "absolute",
        "group-hover:flex",
        "opacity-0",
        "group-hover:opacity-100",
        "text-left",
        "z-[100]",
        "w-96",
        "whitespace-pre-wrap",

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
    Object.entries(HEADERS).forEach(([key, headerValue]) => {
        const th = document.createElement("th");
        th.className = HEADERS_CSS + headerValue[1];
        th.innerText = headerValue[0];
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
    cell.className = `${className || ""} ${CSS_ALL}`;
    if (nestedElement) {
        cell.appendChild(nestedElement);
        cell.classList.add("group");
    }

    if (action) {
        cell.addEventListener("mousedown", (event) => {
            action(event)
        });
    }
    return cell;
}


/**
 * Populates the table with work order data.
 * @param {Array} data - Array of work order objects.
 */
function populateTable(data, users) {
    const table = initializeTable();
    const tableBody = document.createElement("tbody");


    let currMonth = null;
    data.forEach((order) => {
        currMonth = insertMonthSeparator(currMonth, order.due_date, tableBody);

        const row = document.createElement("tr");
        row.classList.add("border", "hover:bg-base-300", "transition", "duration-300");
        row.id = order.job_number;

        // Add table cells
        row.appendChild(createTableCell(order.job_number, "sticky left-0 z-10" + STATUS[order.status], handleOrder, createTooltip(order.description, "left-[110%]")));
        row.appendChild(createTableCell(order.customer_name, "group " + STATUS[order.status], null, createTooltip(order.description, "translate-x-10")));
        row.appendChild(createTableCell(order.quantity, STATUS[order.status]));
        row.appendChild(createTableCell("", null, null, createDatePicker(order)));

        const daysRemaining = calculateDaysRemaining(order.due_date);
        row.appendChild(createTableCell(daysRemaining, getDueInCSS(daysRemaining), null, null));

        row.appendChild(createTableCell("", null, null, createProgressBar(order)));
        row.appendChild(createTableCell(order.sales_id));
        row.appendChild(createTableCell("", null, null, createCheckBox(order.shipping_this_month, "success", updateBools)));
        row.appendChild(createTableCell("", null, null, createCheckBox(order.incoming_inspection, "warning", updateBools)));
        row.appendChild(createTableCell("", null, null, createCheckBox(order.is_rush, "error", updateBools)));
        row.appendChild(createTableCell("", null, null, createInputBox(order.notes_one)));
        row.appendChild(createTableCell("", null, null, createCheckBox(order.on_hold, "info", updateBools)));
        // assigned to
        row.appendChild(createTableCell("", null, null, createEmpDropDownList(users, order.assigned_to)))

        // add operations
        order.operations.forEach(operation => {
            const op = createTableCell(operation.machine, `${CSS_OPS} bg-${STATUS[operation.status]}`, handleOperation, createTooltip(operationDescription(operation), "translate-y-5"))
            op.ariaLabel = operation.step_number
            // operation Control Panel
            op.append(CreateOperationControlPanel())
            row.appendChild(op)
        });
        tableBody.appendChild(row);
    });
    table.appendChild(tableBody);
    return tableBody
}


// Class responsible for managing the data of work orders and users
class WorkOrderController {
    constructor() {
        this.workOrders = [];
        this.users = [];
        this.tableBody = null
    }
    async init(url) {
        await this.fetchWorkOrders(url);
        this.tableBody = populateTable(this.workOrders, this.users);
    }
    async fetchWorkOrders(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error("Failed to fetch tracker data");

            const { data, users } = await response.json();
            this.workOrders = data;
            this.users = users;
        } catch (error) {
            console.error("Error fetching tracker data:", error);
        }
    }

    updateCompleted(orderNumber) {
        console.log("sddsd")
        console.log(orderNumber)
    }
}

const controller = new WorkOrderController();
controller.init("/work-order-tracker/tracker-main");


