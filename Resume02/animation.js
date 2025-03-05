// Get the canvas element and its context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
canvas.classList.add("absolute", "z-100", "w-full", "h-full", "border")

// Set canvas dimensions to fill the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Circle properties
let x = 50; // Initial x position
let y = canvas.height / 2; // Center the circle vertically
const radius = 30;
const speed = .7; // Movement speed

// Animation loop
function animate() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the circle
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();

    // Update the circle's position
    x += speed;

    // Reset position if the circle goes off the screen
    if (x - radius > canvas.width) {
        x = -radius;
    }

    // Request the next frame
    requestAnimationFrame(animate);
}

// Start the animation
animate();

// Handle window resizing
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});