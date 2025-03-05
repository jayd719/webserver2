// Create an enhanced footer with better design and functionality
function createFooter() {
  // Create the footer element with gradient background
  const footer = document.createElement("footer")
  footer.className = "bg-base-200 pt-16 pb-8"

  // Create the main footer container
  const footerContainer = document.createElement("div")
  footerContainer.className = "container mx-auto px-4"

  // Create the footer top section with logo and description
  const footerTop = document.createElement("div")
  footerTop.className = "flex flex-col md:flex-row justify-between items-start mb-12 border-b border-gray-700 pb-8"

  // Logo and description section
  const logoSection = document.createElement("div")
  logoSection.className = "mb-8 md:mb-0 md:w-1/3"

  // Create logo
  const logoLink = document.createElement("a")
  logoLink.href = "#"
  logoLink.className = "inline-block mb-4"

  const logoText = document.createElement("h2")
  logoText.className = "text-2xl font-bold  flex items-center"
  logoText.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 text-primary"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path></svg>
    Jashandeep Singh
  `

  logoLink.appendChild(logoText)
  logoSection.appendChild(logoLink)

  // Add description
  const description = document.createElement("p")
  description.className = " mb-4 pr-4"
  description.textContent =
    "A passionate developer focused on creating innovative solutions and delivering exceptional user experiences."
  logoSection.appendChild(description)

  // Add social media links
  const socialLinks = document.createElement("div")
  socialLinks.className = "flex space-x-3"

  // LinkedIn social link
  const linkedinLink = createSocialLink("linkedin", "LinkedIn", "https://linkedin.com/in/jashansingh65")

  // GitHub social link
  const githubLink = createSocialLink("github", "GitHub", "https://github.com/jayd719")

  // Website social link
  const websiteLink = createSocialLink("globe", "Website", "https://jashandeep.co.uk")

  // Twitter social link
  const twitterLink = createSocialLink("twitter", "Twitter", "#")

  socialLinks.appendChild(linkedinLink)
  socialLinks.appendChild(githubLink)
  socialLinks.appendChild(websiteLink)
  socialLinks.appendChild(twitterLink)
  logoSection.appendChild(socialLinks)

  footerTop.appendChild(logoSection)

  // Create the footer grid for links and info
  const footerGrid = document.createElement("div")
  footerGrid.className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:w-2/3"

  // Quick Links Section
  const quickLinks = document.createElement("div")
  quickLinks.className = "footer-column"

  const quickLinksTitle = document.createElement("h3")
  quickLinksTitle.className = "text-lg font-semibold  mb-4 pb-2 border-b border-gray-700 inline-block"
  quickLinksTitle.textContent = "Quick Links"
  quickLinks.appendChild(quickLinksTitle)

  const quickLinksList = document.createElement("ul")
  quickLinksList.className = "space-y-2"

  // Array of quick links
  const links = [
    { name: "About", href: "#about", icon: "user" },
    { name: "Skills", href: "#skills", icon: "code" },
    { name: "Projects", href: "#projects", icon: "folder" },
    { name: "Experience", href: "#experience", icon: "briefcase" },
    { name: "Contact", href: "#contact", icon: "mail" },
  ]

  // Create quick link items
  links.forEach((link) => {
    const listItem = document.createElement("li")

    const anchor = document.createElement("a")
    anchor.href = link.href
    anchor.className = "flex items-center  hover:text-primary transition-colors duration-300"
    anchor.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">${getIconPath(link.icon)}</svg>
      ${link.name}
    `

    listItem.appendChild(anchor)
    quickLinksList.appendChild(listItem)
  })

  quickLinks.appendChild(quickLinksList)
  footerGrid.appendChild(quickLinks)

  // Contact Info Section
  const contactInfo = document.createElement("div")
  contactInfo.className = "footer-column"

  const contactTitle = document.createElement("h3")
  contactTitle.className = "text-lg font-semibold  mb-4 pb-2 border-b border-gray-700 inline-block"
  contactTitle.textContent = "Contact Info"
  contactInfo.appendChild(contactTitle)

  const contactList = document.createElement("ul")
  contactList.className = "space-y-3"

  // Email contact item
  const emailItem = document.createElement("li")
  emailItem.className = "flex items-start"
  emailItem.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 mt-1 text-primary">${getIconPath("mail")}</svg>
    <div>
      <span class="block text-sm ">Email</span>
      <a href="mailto:sing8282@mylaurier.ca" class=" hover:text-primary transition-colors duration-300">sing8282@mylaurier.ca</a>
    </div>
  `
  contactList.appendChild(emailItem)

  // Phone contact item
  const phoneItem = document.createElement("li")
  phoneItem.className = "flex items-start"
  phoneItem.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 mt-1 text-primary">${getIconPath("phone")}</svg>
    <div>
      <span class="block text-sm ">Phone</span>
      <a href="tel:4379296465" class=" hover:text-primary transition-colors duration-300">437-929-6465</a>
    </div>
  `
  contactList.appendChild(phoneItem)

  // Location contact item
  const locationItem = document.createElement("li")
  locationItem.className = "flex items-start"
  locationItem.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 mt-1 text-primary">${getIconPath("map-pin")}</svg>
    <div>
      <span class="block text-sm ">Location</span>
      <a href="https://maps.google.com/?q=Waterloo,Ontario" target="_blank" class=" hover:text-primary transition-colors duration-300">Waterloo, Ontario, Canada</a>
    </div>
  `
  contactList.appendChild(locationItem)

  contactInfo.appendChild(contactList)
  footerGrid.appendChild(contactInfo)

  // Newsletter Section
  const newsletter = document.createElement("div")
  newsletter.className = "footer-column"

  const newsletterTitle = document.createElement("h3")
  newsletterTitle.className = "text-lg font-semibold  mb-4 pb-2 border-b border-gray-700 inline-block"
  newsletterTitle.textContent = "Stay Updated"
  newsletter.appendChild(newsletterTitle)

  const newsletterText = document.createElement("p")
  newsletterText.className = " mb-4"
  newsletterText.textContent = "Subscribe to my newsletter for the latest updates on projects and tech insights."
  newsletter.appendChild(newsletterText)

  // Create newsletter form
  const newsletterForm = document.createElement("form")
  newsletterForm.className = "space-y-2"
  newsletterForm.id = "newsletter-form"

  // Email input container
  const inputContainer = document.createElement("div")
  inputContainer.className = "relative"

  // Email icon
  const emailIcon = document.createElement("div")
  emailIcon.className = "absolute left-3 top-1/2 transform -translate-y-1/2 "
  emailIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${getIconPath("mail")}</svg>`

  // Email input
  const emailInput = document.createElement("input")
  emailInput.type = "email"
  emailInput.placeholder = "Your email address"
  emailInput.className =
    "w-full border border-gray-600 rounded-md py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
  emailInput.required = true

  inputContainer.appendChild(emailIcon)
  inputContainer.appendChild(emailInput)
  newsletterForm.appendChild(inputContainer)

  // Submit button
  const submitButton = document.createElement("button")
  submitButton.type = "submit"
  submitButton.className =
    "w-full bg-primary hover:bg-primary/90  py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center"
  submitButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"></path></svg>
    Subscribe
  `

  // Add form submission handling
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Show success message
    const successMessage = document.createElement("div")
    successMessage.className = "mt-2 p-2 bg-green-900/50 text-green-400 rounded-md text-sm flex items-center"
    successMessage.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
      Thanks for subscribing!
    `

    // Clear form and append success message
    newsletterForm.reset()
    if (newsletterForm.querySelector(".success-message")) {
      newsletterForm.querySelector(".success-message").remove()
    }
    successMessage.classList.add("success-message")
    newsletterForm.appendChild(successMessage)

    // Remove success message after 5 seconds
    setTimeout(() => {
      successMessage.remove()
    }, 5000)
  })

  newsletterForm.appendChild(submitButton)
  newsletter.appendChild(newsletterForm)

  footerGrid.appendChild(newsletter)
  footerTop.appendChild(footerGrid)
  footerContainer.appendChild(footerTop)

  // Create the footer bottom section
  const footerBottom = document.createElement("div")
  footerBottom.className = "mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center"

  // Copyright text
  const copyright = document.createElement("div")
  copyright.className = " mb-4 md:mb-0"
  copyright.innerHTML = `&copy; ${new Date().getFullYear()} Jashandeep Singh. All rights reserved.`
  footerBottom.appendChild(copyright)

  // Additional links
  const additionalLinks = document.createElement("div")
  additionalLinks.className = "flex flex-wrap justify-center gap-4 text-sm"

  // Array of additional links
  const extraLinks = [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Sitemap", href: "#sitemap" },
  ]

  // Create additional link items
  extraLinks.forEach((link) => {
    const anchor = document.createElement("a")
    anchor.href = link.href
    anchor.className = " hover:text-primary transition-colors duration-300"
    anchor.textContent = link.name
    additionalLinks.appendChild(anchor)
  })

  footerBottom.appendChild(additionalLinks)
  footerContainer.appendChild(footerBottom)

  // Create back to top button
  const backToTopButton = document.createElement("button")
  backToTopButton.className =
    "fixed bottom-8 right-8 bg-primary  w-10 h-10 rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110 focus:outline-none z-50 opacity-0"
  backToTopButton.id = "back-to-top"
  backToTopButton.setAttribute("aria-label", "Back to top")
  backToTopButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
  `

  // Add click event to scroll to top
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })

  // Show/hide back to top button based on scroll position
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add("opacity-100")
    } else {
      backToTopButton.classList.remove("opacity-100")
    }
  })

  footer.appendChild(footerContainer)
  document.body.appendChild(backToTopButton)

  return footer
}

// Helper function to create a social link
function createSocialLink(icon, label, url) {
  const link = document.createElement("a")
  link.href = url
  link.target = "_blank"
  link.rel = "noopener noreferrer"
  link.className =
    "w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 hover:bg-primary hover: transition-all duration-300"
  link.title = label
  link.setAttribute("aria-label", label)
  link.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${getIconPath(icon)}</svg>`

  return link
}

// Helper function to get SVG path for icons
function getIconPath(iconName) {
  const iconPaths = {
    linkedin:
      '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',
    github:
      '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',
    twitter:
      '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>',
    globe:
      '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',
    mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',
    phone:
      '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
    "map-pin":
      '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',
    user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',
    code: '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
    folder: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>',
    briefcase:
      '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',
  }

  return iconPaths[iconName] || ""
}

// Create and append the footer
document.addEventListener("DOMContentLoaded", () => {
  const footer = createFooter()
  document.body.appendChild(footer)

  // Add CSS for animations
  const style = document.createElement("style")
  style.textContent = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    .footer-column {
      animation: fadeIn 0.5s ease forwards;
    }
    
    #back-to-top {
      transition: opacity 0.3s ease, transform 0.3s ease;
    }
  `
  document.head.appendChild(style)
})

