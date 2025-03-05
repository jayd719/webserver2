// Sample projects data
const projects = [
    {
        id: "1",
        title: "E-Commerce Platform",
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        description:
            "A full-featured e-commerce platform with product management, cart functionality, user authentication, and payment processing. Implemented responsive design and optimized for performance.",
        image: "/placeholder.svg?height=200&width=400",
        demoUrl: "https://example.com/demo",
        codeUrl: "https://github.com/username/project",
    },
    {
        id: "2",
        title: "Task Management App",
        technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
        description:
            "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
        image: "/placeholder.svg?height=200&width=400",
        demoUrl: "https://example.com/demo2",
        codeUrl: "https://github.com/username/project2",
    },
    {
        id: "3",
        title: "Weather Dashboard",
        technologies: ["JavaScript", "OpenWeather API", "Chart.js", "CSS"],
        description:
            "An interactive weather dashboard that displays current weather conditions and forecasts for multiple locations with data visualization.",
        image: "/placeholder.svg?height=200&width=400",
        demoUrl: "https://example.com/demo3",
        codeUrl: "https://github.com/username/project3",
    },
]

// Function to truncate description if it's too long
function truncateDescription(text, maxLength = 100) {
    if (text.length <= maxLength) return text
    return text.slice(0, maxLength) + "..."
}

// Get the container element where project cards will be added
const projectsContainer = document.createElement("div")
document.body.appendChild(projectsContainer)
projectsContainer.classList.add("container", "mx-auto")
// Create the section title
const sectionTitle = document.createElement("h2")
sectionTitle.className = HEADINGCSS
sectionTitle.textContent = "My Projects"
projectsContainer.appendChild(sectionTitle)

// Create the grid container
const projectsGrid = document.createElement("div")
projectsGrid.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
projectsContainer.appendChild(projectsGrid)

// Loop through the projects array and create project cards
projects.forEach((project) => {
    // Create the project card container
    const projectCard = document.createElement("div")
    projectCard.className =
        "overflow-hidden transition-all duration-300 hover:shadow-lg border-t-4 border-t-primary h-full flex flex-col bg-white rounded-lg shadow"
    projectCard.dataset.id = project.id

    // Create the image container
    const imageContainer = document.createElement("div")
    imageContainer.className = "relative h-48 w-full overflow-hidden"

    // Create the image
    const image = document.createElement("img")
    image.src = project.image || "/placeholder.svg"
    image.alt = project.title
    image.className = "object-cover w-full h-full transition-transform duration-500 hover:scale-105"
    imageContainer.appendChild(image)
    projectCard.appendChild(imageContainer)

    // Create the card header
    const cardHeader = document.createElement("div")
    cardHeader.className = "p-6 pb-2"

    // Create the title
    const title = document.createElement("h3")
    title.className = "text-xl font-bold text-primary"
    title.textContent = project.title
    cardHeader.appendChild(title)

    // Create the technologies container
    const techContainer = document.createElement("div")
    techContainer.className = "flex flex-wrap gap-1 mt-2"

    // Add technology badges
    project.technologies.forEach((tech) => {
        const badge = document.createElement("span")
        badge.className =
            "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
        badge.textContent = tech
        techContainer.appendChild(badge)
    })

    cardHeader.appendChild(techContainer)
    projectCard.appendChild(cardHeader)

    // Create the card content
    const cardContent = document.createElement("div")
    cardContent.className = "p-6 pt-2 flex-grow"

    // Create the description container
    const descriptionContainer = document.createElement("div")
    descriptionContainer.className = "text-sm text-gray-600"

    // Store the full description for later use
    const fullDescription = project.description

    // Create the description paragraph with truncated text
    const description = document.createElement("p")
    description.className = "description-text"
    description.textContent = truncateDescription(fullDescription)
    descriptionContainer.appendChild(description)

    // Add "Read more" button if description is long enough
    if (fullDescription.length > 100) {
        const readMoreBtn = document.createElement("button")
        readMoreBtn.className = "text-primary text-sm ml-1 focus:outline-none"
        readMoreBtn.innerHTML =
            'Read more <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block ml-1"><polyline points="6 9 12 15 18 9"></polyline></svg>'

        // Toggle between expanded and collapsed state
        readMoreBtn.addEventListener("click", () => {
            const isExpanded = description.dataset.expanded === "true"
            if (isExpanded) {
                description.textContent = truncateDescription(fullDescription)
                readMoreBtn.innerHTML =
                    'Read more <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block ml-1"><polyline points="6 9 12 15 18 9"></polyline></svg>'
            } else {
                description.textContent = fullDescription
                readMoreBtn.innerHTML =
                    'Show less <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block ml-1"><polyline points="18 15 12 9 6 15"></polyline></svg>'
            }
            description.dataset.expanded = !isExpanded
        })

        descriptionContainer.appendChild(readMoreBtn)
    }

    cardContent.appendChild(descriptionContainer)
    projectCard.appendChild(cardContent)

    // Create the card footer
    const cardFooter = document.createElement("div")
    cardFooter.className = "p-6 pt-2 flex justify-between gap-2"

    // Add demo button if URL exists
    if (project.demoUrl) {
        const demoBtn = document.createElement("a")
        demoBtn.href = project.demoUrl
        demoBtn.target = "_blank"
        demoBtn.rel = "noopener noreferrer"
        demoBtn.className =
            "flex-1 inline-flex justify-center items-center px-4 py-2 text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        demoBtn.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg> Live Demo'
        cardFooter.appendChild(demoBtn)
    }

    // Add code button if URL exists
    if (project.codeUrl) {
        const codeBtn = document.createElement("a")
        codeBtn.href = project.codeUrl
        codeBtn.target = "_blank"
        codeBtn.rel = "noopener noreferrer"
        codeBtn.className =
            "flex-1 inline-flex justify-center items-center px-4 py-2 text-sm font-medium rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        codeBtn.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> View Code'
        cardFooter.appendChild(codeBtn)
    }

    projectCard.appendChild(cardFooter)

    // Append the project card to the grid
    projectsGrid.appendChild(projectCard)
})


