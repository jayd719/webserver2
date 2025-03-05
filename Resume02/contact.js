// Create the contact section with enhanced design and functionality
function createContactSection() {
    // Create the contact section element with a gradient background
    const contactSection = document.createElement("section")
    contactSection.id = "contact"
    contactSection.className = "py-16 bg-gradient-to-b from-white to-gray-100"

    // Create container
    const container = document.createElement("div")
    container.className = "container mx-auto px-4 md:px-8"

    // Create section header
    const sectionHeader = document.createElement("div")
    sectionHeader.className = "text-center mb-12"

    // Create heading with underline effect
    const heading = document.createElement("h2")
    heading.className = "text-3xl md:text-4xl font-bold mb-4 relative inline-block"
    heading.innerHTML =
        'Get In Touch <span class="absolute bottom-0 left-0 w-full h-1 bg-primary transform -translate-y-2"></span>'

    // Create subheading
    const subheading = document.createElement("p")
    subheading.className = "text-gray-600 max-w-2xl mx-auto"
    subheading.textContent =
        "Have a question or want to work together? Feel free to contact me through any of the following methods."

    sectionHeader.appendChild(heading)
    sectionHeader.appendChild(subheading)
    container.appendChild(sectionHeader)

    // Create content wrapper with two columns
    const contentWrapper = document.createElement("div")
    contentWrapper.className = "flex flex-col md:flex-row gap-8 max-w-5xl mx-auto"

    // Create contact info card
    const contactInfoCard = document.createElement("div")
    contactInfoCard.className =
        "bg-white rounded-lg shadow-md p-6 md:p-8 flex-1 border-t-4 border-primary transform transition-all duration-300 hover:shadow-lg"

    // Create contact info header
    const contactInfoHeader = document.createElement("div")
    contactInfoHeader.className = "mb-6"

    const contactInfoTitle = document.createElement("h3")
    contactInfoTitle.className = "text-xl font-semibold mb-2"
    contactInfoTitle.textContent = "Contact Information"

    const contactInfoSubtitle = document.createElement("p")
    contactInfoSubtitle.className = "text-gray-600"
    contactInfoSubtitle.textContent = "Reach out through any of these channels:"

    contactInfoHeader.appendChild(contactInfoTitle)
    contactInfoHeader.appendChild(contactInfoSubtitle)
    contactInfoCard.appendChild(contactInfoHeader)

    // Create contact details list
    const contactDetailsList = document.createElement("ul")
    contactDetailsList.className = "space-y-4"

    // Email contact item with copy functionality
    const emailItem = createContactItem(
        "envelope",
        "Email",
        "sing8282@mylaurier.ca",
        "mailto:sing8282@mylaurier.ca",
        true,
    )

    // Phone contact item with copy functionality
    const phoneItem = createContactItem("phone", "Phone", "437-929-6465", "tel:4379296465", true)

    // Location contact item
    const locationItem = createContactItem(
        "map-pin",
        "Location",
        "Waterloo, Ontario, Canada",
        "https://maps.google.com/?q=Waterloo,Ontario,Canada",
        false,
    )

    contactDetailsList.appendChild(emailItem)
    contactDetailsList.appendChild(phoneItem)
    contactDetailsList.appendChild(locationItem)
    contactInfoCard.appendChild(contactDetailsList)

    // Create social links section
    const socialLinksSection = document.createElement("div")
    socialLinksSection.className = "mt-8"

    const socialLinksTitle = document.createElement("h4")
    socialLinksTitle.className = "text-lg font-medium mb-4"
    socialLinksTitle.textContent = "Connect With Me"
    socialLinksSection.appendChild(socialLinksTitle)

    // Create social links grid
    const socialLinksGrid = document.createElement("div")
    socialLinksGrid.className = "flex gap-3"

    // LinkedIn social link
    const linkedinLink = createSocialLink("linkedin", "LinkedIn", "https://linkedin.com/in/jashansingh65", "bg-[#0077b5]")

    // GitHub social link
    const githubLink = createSocialLink("github", "GitHub", "https://github.com/jayd719", "bg-[#333]")

    // Twitter social link (placeholder)
    const twitterLink = createSocialLink("twitter", "Twitter", "#", "bg-[#1da1f2]")

    // Portfolio social link (placeholder)
    const portfolioLink = createSocialLink("globe", "Portfolio", "#", "bg-[#6366f1]")

    socialLinksGrid.appendChild(linkedinLink)
    socialLinksGrid.appendChild(githubLink)
    socialLinksGrid.appendChild(twitterLink)
    socialLinksGrid.appendChild(portfolioLink)
    socialLinksSection.appendChild(socialLinksGrid)
    contactInfoCard.appendChild(socialLinksSection)

    // Create contact form card
    const contactFormCard = document.createElement("div")
    contactFormCard.className =
        "bg-white rounded-lg shadow-md p-6 md:p-8 flex-1 border-t-4 border-primary transform transition-all duration-300 hover:shadow-lg"

    // Create form header
    const formHeader = document.createElement("div")
    formHeader.className = "mb-6"

    const formTitle = document.createElement("h3")
    formTitle.className = "text-xl font-semibold mb-2"
    formTitle.textContent = "Send Me a Message"

    const formSubtitle = document.createElement("p")
    formSubtitle.className = "text-gray-600"
    formSubtitle.textContent = "I'll get back to you as soon as possible."

    formHeader.appendChild(formTitle)
    formHeader.appendChild(formSubtitle)
    contactFormCard.appendChild(formHeader)

    // Create contact form
    const contactForm = document.createElement("form")
    contactForm.id = "contact-form"
    contactForm.className = "space-y-4"

    // Name input field
    const nameField = createFormField("text", "name", "Your Name", "Enter your full name", true, "user")

    // Email input field
    const emailField = createFormField("email", "email", "Your Email", "Enter your email address", true, "mail")

    // Subject input field
    const subjectField = createFormField("text", "subject", "Subject", "What is this regarding?", true, "help-circle")

    // Message textarea field
    const messageFieldGroup = document.createElement("div")
    messageFieldGroup.className = "form-group"

    const messageLabel = document.createElement("label")
    messageLabel.htmlFor = "message"
    messageLabel.className = "block text-sm font-medium text-gray-700 mb-1"
    messageLabel.textContent = "Your Message"

    const messageWrapper = document.createElement("div")
    messageWrapper.className = "relative"

    const messageIcon = document.createElement("div")
    messageIcon.className = "absolute left-3 top-3 text-gray-400"
    messageIcon.innerHTML = createSvgIcon("message-square")

    const messageTextarea = document.createElement("textarea")
    messageTextarea.id = "message"
    messageTextarea.name = "message"
    messageTextarea.rows = 4
    messageTextarea.className =
        "w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
    messageTextarea.placeholder = "Write your message here..."
    messageTextarea.required = true

    messageWrapper.appendChild(messageIcon)
    messageWrapper.appendChild(messageTextarea)
    messageFieldGroup.appendChild(messageLabel)
    messageFieldGroup.appendChild(messageWrapper)

    // Submit button
    const submitButton = document.createElement("button")
    submitButton.type = "submit"
    submitButton.className =
        "w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition-colors duration-300 flex items-center justify-center"
    submitButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
    Send Message
  `

    // Add form validation and submission handling
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault()

        // Get form data
        const formData = new FormData(contactForm)
        const formValues = Object.fromEntries(formData.entries())

        // Show success message (in a real implementation, you would send this data to a server)
        const successMessage = document.createElement("div")
        successMessage.className = "mt-4 p-3 bg-green-100 text-green-700 rounded-md flex items-center"
        successMessage.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
      Message sent successfully! I'll get back to you soon.
    `

        // Clear form and append success message
        contactForm.reset()
        if (contactForm.querySelector(".success-message")) {
            contactForm.querySelector(".success-message").remove()
        }
        successMessage.classList.add("success-message")
        contactForm.appendChild(successMessage)

        // Remove success message after 5 seconds
        setTimeout(() => {
            successMessage.remove()
        }, 5000)
    })

    // Append all form elements
    contactForm.appendChild(nameField)
    contactForm.appendChild(emailField)
    contactForm.appendChild(subjectField)
    contactForm.appendChild(messageFieldGroup)
    contactForm.appendChild(submitButton)
    contactFormCard.appendChild(contactForm)

    // Append cards to content wrapper
    contentWrapper.appendChild(contactInfoCard)
    contentWrapper.appendChild(contactFormCard)
    container.appendChild(contentWrapper)
    contactSection.appendChild(container)

    return contactSection
}

// Helper function to create a contact item
function createContactItem(icon, label, value, link, copyable) {
    const item = document.createElement("li")
    item.className = "flex items-start"

    const iconContainer = document.createElement("div")
    iconContainer.className = "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0"
    iconContainer.innerHTML = createSvgIcon(icon)

    const contentContainer = document.createElement("div")
    contentContainer.className = "flex-1"

    const itemLabel = document.createElement("p")
    itemLabel.className = "text-sm text-gray-500"
    itemLabel.textContent = label

    const itemValue = document.createElement("div")
    itemValue.className = "flex items-center"

    const itemLink = document.createElement("a")
    itemLink.href = link
    itemLink.className = "text-primary hover:underline"
    itemLink.textContent = value
    itemValue.appendChild(itemLink)

    // Add copy button if copyable
    if (copyable) {
        const copyButton = document.createElement("button")
        copyButton.className = "ml-2 text-gray-400 hover:text-gray-600 focus:outline-none"
        copyButton.title = `Copy ${label}`
        copyButton.innerHTML = createSvgIcon("copy", "16")

        copyButton.addEventListener("click", () => {
            navigator.clipboard.writeText(value).then(() => {
                // Show copied tooltip
                const tooltip = document.createElement("span")
                tooltip.className =
                    "absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 transition-opacity duration-300"
                tooltip.textContent = "Copied!"

                copyButton.style.position = "relative"
                copyButton.appendChild(tooltip)

                // Show and hide tooltip
                setTimeout(() => {
                    tooltip.classList.add("opacity-100")
                    setTimeout(() => {
                        tooltip.classList.remove("opacity-100")
                        setTimeout(() => {
                            tooltip.remove()
                        }, 300)
                    }, 1500)
                }, 100)
            })
        })

        itemValue.appendChild(copyButton)
    }

    contentContainer.appendChild(itemLabel)
    contentContainer.appendChild(itemValue)

    item.appendChild(iconContainer)
    item.appendChild(contentContainer)

    return item
}

// Helper function to create a social link
function createSocialLink(icon, label, url, bgColor) {
    const link = document.createElement("a")
    link.href = url
    link.target = "_blank"
    link.rel = "noopener noreferrer"
    link.className = `${bgColor} text-white w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110`
    link.title = label
    link.setAttribute("aria-label", label)
    link.innerHTML = createSvgIcon(icon)

    return link
}

// Helper function to create a form field
function createFormField(type, id, label, placeholder, required, icon) {
    const fieldGroup = document.createElement("div")
    fieldGroup.className = "form-group"

    const fieldLabel = document.createElement("label")
    fieldLabel.htmlFor = id
    fieldLabel.className = "block text-sm font-medium text-gray-700 mb-1"
    fieldLabel.textContent = label

    const inputWrapper = document.createElement("div")
    inputWrapper.className = "relative"

    const iconElement = document.createElement("div")
    iconElement.className = "absolute left-3 top-3 text-gray-400"
    iconElement.innerHTML = createSvgIcon(icon)

    const input = document.createElement("input")
    input.type = type
    input.id = id
    input.name = id
    input.className =
        "w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
    input.placeholder = placeholder

    if (required) {
        input.required = true
    }

    inputWrapper.appendChild(iconElement)
    inputWrapper.appendChild(input)
    fieldGroup.appendChild(fieldLabel)
    fieldGroup.appendChild(inputWrapper)

    return fieldGroup
}

// Helper function to create SVG icons
function createSvgIcon(name, size = "20") {
    const iconPaths = {
        envelope:
            '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',
        phone:
            '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
        "map-pin":
            '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',
        linkedin:
            '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',
        github:
            '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',
        twitter:
            '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>',
        globe:
            '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',
        user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',
        mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',
        "help-circle":
            '<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>',
        "message-square": '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',
        copy: '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>',
    }

    return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${iconPaths[name]}</svg>`
}

// Create and append the contact section
document.addEventListener("DOMContentLoaded", () => {
    const contactSection = createContactSection()
    document.body.appendChild(contactSection)

    // Add CSS for animations
    const style = document.createElement("style")
    style.textContent = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    #contact .form-group,
    #contact li,
    #contact h3,
    #contact h4 {
      animation: fadeIn 0.5s ease forwards;
      opacity: 0;
    }
    
    #contact h3 { animation-delay: 0.1s; }
    #contact h4 { animation-delay: 0.2s; }
    #contact li:nth-child(1) { animation-delay: 0.3s; }
    #contact li:nth-child(2) { animation-delay: 0.4s; }
    #contact li:nth-child(3) { animation-delay: 0.5s; }
    #contact .form-group:nth-child(1) { animation-delay: 0.3s; }
    #contact .form-group:nth-child(2) { animation-delay: 0.4s; }
    #contact .form-group:nth-child(3) { animation-delay: 0.5s; }
    #contact .form-group:nth-child(4) { animation-delay: 0.6s; }
    #contact button[type="submit"] { animation-delay: 0.7s; }
  `
    document.head.appendChild(style)
})

