document.body.classList.add("bg-base-100", "h-screen")
/**
 * Creates an HTML table to display work order tracker data.
 * @param {Array} data - Array of work order objects.
 */
const HEADERS = {
    id: "Work Order",
    customer: "Customer",
    due_date: "Due Date",
    status: "Status",
    assigned_to: "Assigned To",
    priority: "Priority",
    product: "Product",
    quantity: "Quantity",
    sales_id: "Sales ID",
    product_1: "Product 1",
    product_2: "Product 2",
    product_3: "Product 3",
    product_4: "Product 4",
    product_5: "Product 5",
    product_6: "Product 6",
    product_7: "Product 7",
    product_8: "Product 8",
    product_9: "Product 9",
    product_10: "Product 10",
    product_11: "Product 11",
    product_12: "Product 12",
};

// Function to create hover description
function createHoverNotes(description) {
    const descriptionDiv = document.createElement("div")
    descriptionDiv.classList.add(
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
        "left-[110%]",
        "opactiy-100"
    );
    descriptionDiv.innerText = description
    return descriptionDiv
}



// Function to initialize the table
function initTable() {
    // Create outer container
    const container = document.createElement("div");
    container.className = "overflow-x-auto";

    // Create inner scrollable container
    const containerInner = document.createElement("div");
    containerInner.className = "relative overflow-x-auto overflow-y-auto max-h-96";

    // Create the table element
    const table = document.createElement("table");
    table.className = "table";

    // Create table header
    const header = document.createElement("thead");
    const headerRow = document.createElement("tr");


    // Add header cells dynamically
    Object.entries(HEADERS).forEach(([key, headerText]) => {
        const th = document.createElement("th");
        th.className = "sticky top-0 z-10 bg-base-300 py-6 border border-base-300 text-center";
        th.innerText = headerText;
        if (Object.keys(HEADERS).slice(0, 1).includes(key)) {
            th.classList.add("sticky", "left-0", "z-20");
        }
        headerRow.appendChild(th);
    });

    header.appendChild(headerRow);
    table.appendChild(header); // Append header to the table

    // Add table to the inner container
    containerInner.appendChild(table);

    // Add inner container to the outer container
    container.appendChild(containerInner);

    // Append the container to the document body
    document.body.appendChild(container);

    return table;
}

// Function to populate the table with data
function createTrackerHTML(data) {
    // Initialize the table
    const workOrderTracker = initTable();

    // Create table body
    const body = document.createElement("tbody");

    // Populate rows dynamically based on data
    data.forEach(order => {
        const row = document.createElement("tr");
        row.classList.add("border", "border-base-300", "hover:bg-base-200")


        // Add cells dynamically for each property
        Object.entries(HEADERS).forEach(([prop, value]) => {
            const cell = document.createElement("td");
            cell.className = "whitespace-nowrap border border-base-300";
            cell.innerText = order[prop] || "N/A";

            if (Object.keys(HEADERS).slice(0, 1).includes(prop)) {
                cell.classList.add("sticky", "left-0", "backdrop-blur-xl", "group", "cursor-help",);
                // add hovering description 
                cell.appendChild(createHoverNotes(order["customer"]))
            }
            row.appendChild(cell);
        });

        body.appendChild(row); // Append row to the body
    });

    // Append body to the table
    workOrderTracker.appendChild(body);
}




const url = '/work-order-tracker/testlink/'
/**
 * Fetches work order tracker data and renders it as an HTML table.
 */
async function createTracker() {
    const respone = await fetch(url);
    if (!respone.ok) {
        console.log("Failed to Create Tracker")
    }
    console.log(respone.status)
    const data = await respone.json()
    createTrackerHTML(data.data)
}
createTracker()