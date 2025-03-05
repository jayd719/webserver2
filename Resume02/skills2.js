// Create floating tech icons around the image
const techIcons = ["code", "cpu", "database", "server", "terminal"]
techIcons.forEach((icon, index) => {
    const iconElement = document.createElement("div")
    iconElement.className = "absolute bg-gray-800 p-3 rounded-full shadow-lg text-primary animate-float"
    iconElement.style.animationDelay = `${index * 0.5}s`

    // Position icons around the image
    const angle = (index / techIcons.length) * Math.PI * 2
    const radius = 160
    const x = Math.cos(angle) * radius
    const y = Math.sin(angle) * radius

    iconElement.style.transform = `translate(${x}px, ${y}px)`
    iconElement.innerHTML = getTechIcon(icon)

    imageContainer.appendChild(iconElement)
})