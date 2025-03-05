// Create the header element
const header = document.createElement('header');
header.className = 'sticky top-0 z-50 hover:bg-base-100 transition duration-300 hover:shadow-xl';

// Create the container div
const container = document.createElement('div');
container.className = 'container mx-auto px-6 py-4 flex justify-between items-center';

// Create the logo link
const logoLink = document.createElement('a');
logoLink.href = '#';
container.appendChild(logoLink);

const logoImage = document.createElement("img")
logoImage.src = "https://jayd719.github.io/staticfiles/j.png"
logoLink.appendChild(logoImage)
logoImage.className = "w-6 scale-[2.4] translate-y-4"

// Create the mobile menu toggle button
const menuToggle = document.createElement('button');
menuToggle.className = 'md:hidden';
menuToggle.id = 'menu-toggle';

// Create the hamburger icon SVG
const hamburgerIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
hamburgerIcon.setAttribute('class', 'w-6 h-6');
hamburgerIcon.setAttribute('fill', 'none');
hamburgerIcon.setAttribute('stroke', 'currentColor');
hamburgerIcon.setAttribute('stroke-width', '2');
hamburgerIcon.setAttribute('viewBox', '0 0 24 24');

const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
path1.setAttribute('stroke-linecap', 'round');
path1.setAttribute('stroke-linejoin', 'round');
path1.setAttribute('d', 'M4 6h16');

const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
path2.setAttribute('stroke-linecap', 'round');
path2.setAttribute('stroke-linejoin', 'round');
path2.setAttribute('d', 'M4 12h16');

const path3 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
path3.setAttribute('stroke-linecap', 'round');
path3.setAttribute('stroke-linejoin', 'round');
path3.setAttribute('d', 'M4 18h16');

hamburgerIcon.appendChild(path1);
hamburgerIcon.appendChild(path2);
hamburgerIcon.appendChild(path3);

menuToggle.appendChild(hamburgerIcon);
container.appendChild(menuToggle);

// Create the navigation menu
const nav = document.createElement('nav');
nav.className = 'hidden md:flex space-x-6';
nav.id = 'menu';

// Array of navigation links
const links = [
    { href: '#about', text: 'About' },
    { href: '#skills', text: 'Skills' },
    { href: '#projects', text: 'Projects' },
    { href: '#contact', text: 'Contact' }
];

// Loop through the links array and create anchor elements
links.forEach(link => {
    const anchor = document.createElement('a');
    anchor.href = link.href;
    anchor.className = 'hover:text-blue-600';
    anchor.textContent = link.text;
    nav.appendChild(anchor);
});

// Append the navigation menu to the container
container.appendChild(nav);

// Append the container to the header
header.appendChild(container);

// Append the header to the body or any other container
document.body.appendChild(header);

// Add event listener for mobile menu toggle
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('hidden');
});