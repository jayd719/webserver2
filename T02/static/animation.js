const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
canvas.classList.add("fixed", "top-0", "z-100", "w-full", "h-full");

// Set initial canvas size
function setCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
setCanvasSize();

// Object class
class MovingObject {
    constructor(x, y, radius, color, dx, dy, type = 'circle') {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.dx = dx; // Horizontal speed
        this.dy = dy; // Vertical speed
        this.type = type; // 'circle' or 'square'
        this.size = radius * 2; // For squares
    }

    // Draw the object
    draw() {
        ctx.beginPath();
        if (this.type === 'circle') {
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        } else if (this.type === 'square') {
            ctx.rect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
        }
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    // Update the object's position
    update() {
        // Bounce off walls
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        // Update position
        this.x += this.dx;
        this.y += this.dy;

        // Draw the object
        this.draw();
    }
}

// Array to hold all objects
let objects = [];

// Create initial objects
function createInitialObjects() {
    objects.push(new MovingObject(100, 100, 30, 'blue', 2, 2)); // Circle
    objects.push(new MovingObject(200, 200, 40, 'red', -1.5, 1.5, 'square')); // Square
    objects.push(new MovingObject(300, 300, 25, 'green', 1, -1)); // Circle
    objects.push(new MovingObject(400, 400, 25, 'orange', 1, -1)); // Circle
    objects.push(new MovingObject(500, 500, 50, 'yellow', -1.5, 1.5, 'square')); // Square
    objects.push(new MovingObject(600, 600, 45, 'purple', 1, -1)); // Circle
}
createInitialObjects();

// Animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw all objects
    objects.forEach(obj => {
        obj.update();
    });

    // Check for collisions
    checkCollisions();

    requestAnimationFrame(animate);
}

// Start the animation
animate();

// Handle window resizing
window.addEventListener('resize', () => {
    setCanvasSize();
});

// Add new object on click
canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Create a new object at the click position
    const newObj = new MovingObject(
        mouseX,
        mouseY,
        20,
        `hsl(${Math.random() * 360}, 50%, 50%)`, // Random color
        (Math.random() - 0.5) * 4, // Random horizontal speed
        (Math.random() - 0.5) * 4, // Random vertical speed
        Math.random() > 0.5 ? 'circle' : 'square' // Random type
    );
    objects.push(newObj);
});

// Check for collisions between objects
function checkCollisions() {
    for (let i = 0; i < objects.length; i++) {
        for (let j = i + 1; j < objects.length; j++) {
            const obj1 = objects[i];
            const obj2 = objects[j];

            const dx = obj1.x - obj2.x;
            const dy = obj1.y - obj2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // If objects collide
            if (distance < obj1.radius + obj2.radius) {
                // Swap speeds for a simple bounce effect
                [obj1.dx, obj2.dx] = [obj2.dx, obj1.dx];
                [obj1.dy, obj2.dy] = [obj2.dy, obj1.dy];

                // Change colors on collision
                obj1.color = `hsl(${Math.random() * 360}, 50%, 50%)`;
                obj2.color = `hsl(${Math.random() * 360}, 50%, 50%)`;
            }
        }
    }
}