// Create an enhanced hero section with modern design and animations
function createHeroSection() {
  // Create the hero section element with a gradient background
  const heroSection = document.createElement("section")
  heroSection.id = "hero"
  heroSection.className = "relative min-h-screen flex items-center justify-center overflow-hidden"

  // Create background gradient overlay
  const backgroundOverlay = document.createElement("div")
  backgroundOverlay.className = "absolute inset-0"
  heroSection.appendChild(backgroundOverlay)


  // Create animated background particles
  const particlesContainer = document.createElement("div")
  particlesContainer.className = "absolute inset-0 z-0"
  particlesContainer.id = "particles-container"

  // Create particles
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div")
    const size = Math.random() * 4 + 1
    particle.className = "absolute rounded-full bg-white bg-opacity-20"
    particle.style.width = `${size}px`
    particle.style.height = `${size}px`
    particle.style.top = `${Math.random() * 100}%`
    particle.style.left = `${Math.random() * 100}%`
    particle.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`
    particle.style.opacity = Math.random() * 0.5 + 0.1
    particlesContainer.appendChild(particle)
  }

  heroSection.appendChild(particlesContainer)

  // Create decorative shapes
  const shapes = document.createElement("div")
  shapes.className = "absolute inset-0 z-0 overflow-hidden"

  // Create circle shape
  const circle = document.createElement("div")
  circle.className = "absolute rounded-full bg-primary bg-opacity-10 animate-pulse"
  circle.style.width = "500px"
  circle.style.height = "500px"
  circle.style.top = "-100px"
  circle.style.right = "-100px"
  shapes.appendChild(circle)

  // Create blob shape
  const blob = document.createElement("div")
  blob.className = "absolute bg-blue-600 bg-opacity-10 rounded-full filter blur-3xl"
  blob.style.width = "600px"
  blob.style.height = "600px"
  blob.style.bottom = "-200px"
  blob.style.left = "-200px"
  blob.style.animation = "blob-animation 15s infinite alternate"
  shapes.appendChild(blob)

  heroSection.appendChild(shapes)

  // Create the hero content container
  const heroContent = document.createElement("div")
  heroContent.className = "container mx-auto px-4 z-10 flex flex-col lg:flex-row items-center justify-between gap-12 py-20"

  // Create the text content container
  const textContent = document.createElement("div")
  textContent.className = "text-center lg:text-left lg:w-1/2"

  // Create the greeting text
  const greeting = document.createElement("div")
  greeting.className = "text-primary font-medium text-lg mb-4 flex items-center justify-center lg:justify-start"
  greeting.innerHTML = `
    <span class="inline-block w-8 h-[2px] bg-primary mr-3"></span>
    Hello, I'm
  `
  textContent.appendChild(greeting)

  // Create the heading with animated text reveal
  const heading = document.createElement("h1")
  heading.className = "text-4xl md:text-3xl lg:text-6xl font-bold  mb-6 leading-tight "

  // Split the name into individual characters for animation
  const name = "Jashandeep Singh"
  name.split("").forEach((char, index) => {
    const charSpan = document.createElement("span")
    charSpan.textContent = char === " " ? "\u00A0" : char
    charSpan.className = "inline-block animate-text-reveal"
    charSpan.style.animationDelay = `${0.1 + index * 0.05}s`
    heading.appendChild(charSpan)
  })

  textContent.appendChild(heading)

  // Create the profession text with typing effect
  const professionContainer = document.createElement("div")
  professionContainer.className = "h-8 mb-6"

  const profession = document.createElement("h2")
  profession.className = "text-xl md:text-2xl  typing-text"
  profession.setAttribute("data-text", "Software Developer")
  professionContainer.appendChild(profession)
  textContent.appendChild(professionContainer)

  // Create the bio paragraph
  const paragraph = document.createElement("p")
  paragraph.className = "text-leading mb-8 max-w-lg mx-auto lg:mx-0 text-lg opacity-75"
  paragraph.textContent =
    "As a passionate Computer Science student at Wilfrid Laurier University, I thrive at the intersection of software development, machine learning, and backend systems. With a strong foundation in data structures & algorithms, AI/ML, and cloud technologies, I enjoy solving complex problems and building scalable solutions."
  textContent.appendChild(paragraph)

  // Create the buttons container
  const buttonsContainer = document.createElement("div")
  buttonsContainer.className = "flex flex-wrap justify-center lg:justify-start gap-4 mb-8"

  // Create the "Contact Me" button with icon
  const contactButton = document.createElement("a")
  contactButton.href = "mailto:jsingh0779@gmail.com"
  contactButton.className = ButtonClicked
  contactButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
    Contact Me
  `
  buttonsContainer.appendChild(contactButton)

  // Create the "View Projects" button with icon
  const projectsButton = document.createElement("a")
  projectsButton.href = "/projects/"
  projectsButton.className = ButtonUnclicked
  projectsButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
    View Projects
  `
  buttonsContainer.appendChild(projectsButton)

  // Create the "Download Resume" button with icon
  const resumeButton = document.createElement("a")
  resumeButton.href = "/pages/resume/1"
  resumeButton.target = "_blank"
  resumeButton.className =
    "bg-transparent border border-gray-600  px-6 py-3 rounded-full font-medium transition-all duration-300 hover:border-primary hover:text-primary flex items-center"
  resumeButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
    Download Resume
  `
  buttonsContainer.appendChild(resumeButton)

  textContent.appendChild(buttonsContainer)

  // Create social media links
  const socialLinks = document.createElement("div")
  socialLinks.className = "flex justify-center lg:justify-start gap-4"

  // Array of social links
  const socials = [
    { name: "LinkedIn", icon: "linkedin", url: "https://linkedin.com/in/jashansingh65" },
    { name: "GitHub", icon: "github", url: "https://github.com/jayd719" },
    { name: "Twitter", icon: "twitter", url: "#" },
    { name: "Website", icon: "globe", url: "https://jashandeep.co.uk" },
  ]

  // Create social link items
  socials.forEach((social) => {
    const link = document.createElement("a")
    link.href = social.url
    link.target = "_blank"
    link.rel = "noopener noreferrer"
    link.className =
      "w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center transition-all duration-300 hover:border-primary hover:text-primary hover:scale-110"
    link.title = social.name
    link.setAttribute("aria-label", social.name)

    // Add icon
    link.innerHTML = getSocialIcon(social.icon)

    socialLinks.appendChild(link)
  })

  textContent.appendChild(socialLinks)

  // Create the profile image container with animated border
  const imageContainer = document.createElement("div")
  imageContainer.className = "relative lg:w-2/5 mt-12 lg:mt-0"

  // Create animated border
  const animatedBorder = document.createElement("div")
  animatedBorder.className = "absolute inset-0 rounded-full border-2 border-primary animate-spin-slow"

  // Create image wrapper
  const imageWrapper = document.createElement("div")
  imageWrapper.className =
    "relative z-10 rounded-full p-2 bg-gradient-to-br from-primary to-blue-700 shadow-xl mx-auto w-64 h-64 md:w-80 md:h-80 overflow-hidden"

  // Create the profile image
  const profileImage = document.createElement("img")
  profileImage.src = ""
  profileImage.className = "rounded-full w-full h-full object-cover"
  profileImage.alt = "Jashandeep Singh"
  profileImage.loading = "lazy"

  imageWrapper.appendChild(profileImage)
  imageContainer.appendChild(animatedBorder)
  imageContainer.appendChild(imageWrapper)



  // Append text content and image to hero content
  heroContent.appendChild(textContent)
  heroContent.appendChild(imageContainer)

  // Create scroll indicator
  const scrollIndicator = document.createElement("div")
  scrollIndicator.className =
    "absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce"
  scrollIndicator.innerHTML = `
    <span class="text-sm mb-2">Scroll Down</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
  `

  // Append hero content and scroll indicator to hero section
  heroSection.appendChild(heroContent)
  heroSection.appendChild(scrollIndicator)

  return heroSection
}

// Helper function to get social media icons
function getSocialIcon(name) {
  const icons = {
    linkedin:
      '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',
    github:
      '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',
    twitter:
      '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>',
    globe:
      '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${icons[name]}</svg>`
}

// Helper function to get tech icons
function getTechIcon(name) {
  const icons = {
    code: '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
    cpu: '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>',
    database:
      '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',
    server:
      '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>',
    terminal: '<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>',
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${icons[name]}</svg>`
}

// Create and append the hero section
document.addEventListener("DOMContentLoaded", () => {
  const heroSection = createHeroSection()
  // document.body.appendChild(heroSection)
  header.after(heroSection)

  // Add CSS for animations
  const style = document.createElement("style")
  style.textContent = `
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }
    
    @keyframes blob-animation {
      0% { transform: scale(1) translate(0, 0); }
      33% { transform: scale(1.1) translate(50px, 50px); }
      66% { transform: scale(0.9) translate(-50px, 50px); }
      100% { transform: scale(1) translate(0, 0); }
    }
    
    @keyframes spin-slow {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    .animate-spin-slow {
      animation: spin-slow 15s linear infinite;
    }
    
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    
    .animate-text-reveal {
      opacity: 0;
      transform: translateY(20px);
      animation: textReveal 0.5s ease forwards;
    }
    
    @keyframes textReveal {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .typing-text::after {
      content: '|';
      animation: blink 1s infinite;
    }
    
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
    
    .btn-primary {
      background: linear-gradient(to right, #3b82f6, #2563eb);
      color: white;
    }
  `
  document.head.appendChild(style)

  // Implement typing effect
  setTimeout(() => {
    const typingElement = document.querySelector(".typing-text")
    const text = typingElement.getAttribute("data-text")
    let i = 0

    function typeWriter() {
      if (i < text.length) {
        typingElement.textContent = text.substring(0, i + 1)
        i++
        setTimeout(typeWriter, 100)
      }
    }

    typeWriter()
  }, 1000)
})

