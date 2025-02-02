function createGithubButton(githubLink) {
    // Ensure a valid container exists
    const container = document.getElementById("gitlink");
    if (!container) {
        console.error("Element with ID 'gitlink' not found.");
        return;
    }

    // Create the button element
    const button = document.createElement('a');
    button.href = githubLink;
    button.target = '_blank';
    button.rel = 'noopener noreferrer';
    button.textContent = 'Checkout Code On GitHub';

    // Apply styles via JavaScript
    button.style.display = 'inline-flex';
    button.style.alignItems = 'center';
    button.style.justifyContent = 'center';
    button.style.padding = '10px 16px';
    button.style.backgroundColor = '#24292e';
    button.style.color = 'white';
    button.style.fontSize = '16px';
    button.style.fontWeight = 'bold';
    button.style.textDecoration = 'none';
    button.style.borderRadius = '5px';
    button.style.transition = 'background-color 0.3s ease';
    button.style.border = 'none';
    button.style.cursor = 'pointer';
    button.style.gap = '8px';

    // Create SVG icon
    const githubIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    githubIcon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    githubIcon.setAttribute("width", "16");
    githubIcon.setAttribute("height", "16");
    githubIcon.setAttribute("fill", "currentColor");
    githubIcon.setAttribute("viewBox", "0 0 16 16");
    githubIcon.innerHTML = `
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
    `;

    // Apply icon styles
    githubIcon.style.width = '50px';
    githubIcon.style.height = '50px';
    githubIcon.style.border = '0'
    githubIcon.style.paddingTop = '10px'

    // Append icon and text to button
    button.prepend(githubIcon);

    // Add hover effect
    button.onmouseenter = () => button.style.backgroundColor = '#333';
    button.onmouseleave = () => button.style.backgroundColor = '#24292e';

    // Append the button to the container
    container.appendChild(button);
    container.style.textAlign = "center"
    container.style.padding = "5%"
}
