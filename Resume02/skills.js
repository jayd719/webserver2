// Enhanced skills data structure with categories and proficiency levels
const skillsData = [
    {
        category: "Programming Languages",
        icon: "code",
        skills: [
            { name: "JavaScript", level: 90, icon: "code-square" },
            { name: "Python", level: 85, icon: "braces" },
            { name: "C#", level: 80, icon: "hash" },
            { name: "TypeScript", level: 75, icon: "file-type" },
        ],
    },
    {
        category: "Web Technologies",
        icon: "globe",
        skills: [
            { name: "HTML5", level: 95, icon: "file-code" },
            { name: "CSS3", level: 90, icon: "palette" },
            { name: "React", level: 85, icon: "atom" },
            { name: "Node.js", level: 80, icon: "server" },
        ],
    },
    {
        category: "Databases",
        icon: "database",
        skills: [
            { name: "SQL", level: 85, icon: "table" },
            { name: "MongoDB", level: 80, icon: "leaf" },
            { name: "PostgreSQL", level: 75, icon: "database" },
            { name: "Redis", level: 70, icon: "cpu" },
        ],
    },
    {
        category: "DevOps & Tools",
        icon: "tool",
        skills: [
            { name: "Docker", level: 80, icon: "container" },
            { name: "AWS", level: 75, icon: "cloud" },
            { name: "Git", level: 90, icon: "git-branch" },
            { name: "TensorFlow", level: 70, icon: "brain" },
        ],
    },
]

// Function to create the skills section
function createSkillsSection() {
    // Create the section element
    const skillsSection = document.createElement("section")
    skillsSection.className = "container mx-auto px-4 py-20 my-20"
    skillsSection.id = "skills"

    // Create the section header
    const sectionHeader = document.createElement("div")
    sectionHeader.className = "text-center mb-12"

    // Create the heading
    const heading = document.createElement("h2")
    heading.className = "text-3xl font-bold mb-4 relative inline-block"
    heading.innerHTML =
        'Technical Skills <span class="absolute bottom-0 left-0 w-full h-1 bg-primary transform -translate-y-2"></span>'

    // Create the subheading
    const subheading = document.createElement("p")
    subheading.className = "text-gray-600 max-w-2xl mx-auto"
    subheading.textContent =
        "Here are the technologies and tools I specialize in, organized by category with proficiency levels."

    sectionHeader.appendChild(heading)
    sectionHeader.appendChild(subheading)
    skillsSection.appendChild(sectionHeader)

    // Create filter buttons
    const filterContainer = document.createElement("div")
    filterContainer.className = "flex flex-wrap justify-center gap-2 mb-8"

    // Add "All" filter button
    const allButton = document.createElement("button")
    allButton.className =
        "px-4 py-2 rounded-full bg-primary text-white font-medium transition-all duration-300 hover:shadow-lg active"
    allButton.textContent = "All Skills"
    allButton.dataset.filter = "all"
    filterContainer.appendChild(allButton)

    // Add category filter buttons
    skillsData.forEach((category) => {
        const button = document.createElement("button")
        button.className =
            "px-4 py-2 rounded-full bg-gray-200 text-gray-800 font-medium transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-lg"
        button.textContent = category.category
        button.dataset.filter = category.category

        // Add icon if available
        if (category.icon) {
            const iconSpan = document.createElement("span")
            iconSpan.className = "mr-1"
            iconSpan.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block"><path d="${getIconPath(category.icon)}"></path></svg>`
            button.prepend(iconSpan)
        }

        filterContainer.appendChild(button)
    })

    skillsSection.appendChild(filterContainer)

    // Create the skills container
    const skillsContainer = document.createElement("div")
    skillsContainer.className = "grid grid-cols-1 md:grid-cols-2 gap-8"

    // Create category sections
    skillsData.forEach((category) => {
        const categoryCard = document.createElement("div")
        categoryCard.className =
            "bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border-t-4 border-primary"
        categoryCard.dataset.category = category.category

        // Create category header
        const categoryHeader = document.createElement("div")
        categoryHeader.className = "p-4 bg-gray-50 border-b flex items-center"

        // Add icon if available
        if (category.icon) {
            const iconDiv = document.createElement("div")
            iconDiv.className = "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3"
            iconDiv.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="${getIconPath(category.icon)}"></path></svg>`
            categoryHeader.appendChild(iconDiv)
        }

        const categoryTitle = document.createElement("h3")
        categoryTitle.className = "text-xl font-semibold"
        categoryTitle.textContent = category.category
        categoryHeader.appendChild(categoryTitle)

        categoryCard.appendChild(categoryHeader)

        // Create skills list
        const skillsList = document.createElement("div")
        skillsList.className = "p-4 space-y-4"

        // Add skills with progress bars
        category.skills.forEach((skill) => {
            const skillItem = document.createElement("div")
            skillItem.className = "skill-item"

            const skillHeader = document.createElement("div")
            skillHeader.className = "flex justify-between items-center mb-1"

            const skillName = document.createElement("div")
            skillName.className = "flex items-center"

            // Add skill icon if available
            if (skill.icon) {
                const iconSpan = document.createElement("span")
                iconSpan.className = "mr-2 text-primary"
                iconSpan.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="${getIconPath(skill.icon)}"></path></svg>`
                skillName.appendChild(iconSpan)
            }

            const nameSpan = document.createElement("span")
            nameSpan.className = "font-medium"
            nameSpan.textContent = skill.name
            skillName.appendChild(nameSpan)



            skillHeader.appendChild(skillName)
            skillItem.appendChild(skillHeader)



            skillsList.appendChild(skillItem)
        })

        categoryCard.appendChild(skillsList)
        skillsContainer.appendChild(categoryCard)
    })

    skillsSection.appendChild(skillsContainer)

    // Add event listeners for filter buttons
    setTimeout(() => {
        const filterButtons = filterContainer.querySelectorAll("button")
        filterButtons.forEach((button) => {
            button.className = ButtonUnclicked
            button.addEventListener("click", () => {
                // Update active button
                filterButtons.forEach((btn) => {
                    btn.classList.remove("bg-primary", "text-white")
                    btn.classList.add("bg-gray-200", "text-gray-800")
                })
                button.classList.remove("bg-gray-200", "text-gray-800")
                button.classList.add("bg-primary", "text-white")

                const filter = button.dataset.filter
                const categories = skillsContainer.querySelectorAll("[data-category]")

                if (filter === "all") {
                    categories.forEach((category) => {
                        category.style.display = "block"
                    })
                } else {
                    categories.forEach((category) => {
                        if (category.dataset.category === filter) {
                            category.style.display = "block"
                        } else {
                            category.style.display = "none"
                        }
                    })
                }
            })
        })
    }, 0)

    return skillsSection
}

// Helper function to get SVG path for icons
function getIconPath(iconName) {
    const iconPaths = {
        code: "M16 18l6-6-6-6M8 6l-6 6 6 6",
        globe: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",
        database:
            "M12 2C6.48 2 2 4.02 2 6.5v11C2 19.98 6.48 22 12 22s10-2.02 10-4.5v-11C22 4.02 17.52 2 12 2zm0 18c-5.52 0-8-1.98-8-3.5V7.71C5.55 9.1 8.82 10 12 10s6.45-.9 8-2.29v9.29c0 1.52-2.48 3.5-8 3.5zm0-16c3.52 0 8 1.01 8 3.5S15.52 10 12 10 4 8.99 4 6.5 8.48 4 12 4z",
        tool: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
        "code-square": "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
        braces: "M7 17l-4-4 4-4M17 7l4 4-4 4",
        hash: "M4 9h16M4 15h16M10 3L8 21M16 3l-2 18",
        "file-type": "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
        "file-code": "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
        palette: "M12 19.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15z",
        atom: "M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",
        server:
            "M5 12H5.01M5 19H5.01M5 5H5.01M4 8h16M4 16h16M4 4h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM4 12h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z",
        table: "M3 3h18v18H3zM3 9h18M3 15h18M9 3v18M15 3v18",
        leaf: "M6 3h12l-6 18z",
        cpu: "M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z",
        container: "M20 7h-7m-7 0h3m-3 6h18M8 13v6m8 0v-6M12 20V4M4 8v8h16V8H4z",
        cloud: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z",
        "git-branch": "M6 3v12m0 0a3 3 0 1 0 3 3M6 15a3 3 0 1 0 0-6m12 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 0v6",
        brain: "M15.5 13a5 5 0 1 0-5.5-7.5M10 6a5 5 0 1 0 5.5 7.5",
    }

    return iconPaths[iconName] || ""
}

// Create and append the skills section
const skillsSection = createSkillsSection()
document.body.appendChild(skillsSection)


