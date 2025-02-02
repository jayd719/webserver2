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

    // Apply styles to match the given "cta" button
    Object.assign(button.style, {
        display: 'flex',
        alignItems: 'center',
        padding: '11px 33px',
        textDecoration: 'none',
        fontSize: '20px',
        color: 'white',
        background: '#6225e6',
        transition: '0.4s',
        boxShadow: '6px 6px 0 black',
        transform: 'skewX(-15deg)',
        border: 'none',
        cursor: 'pointer',
        position: 'relative',
        fontWeight: 'bold',
        width: "400px",
        marginRight: "auto"
    });

    // Add focus outline removal
    button.onfocus = () => button.style.outline = 'none';

    // Add hover effect
    button.onmouseenter = () => {
        button.style.transition = '0.2s';
        button.style.boxShadow = '10px 10px 0 #fbc638';
    };
    button.onmouseleave = () => {
        button.style.transition = '0.4s';
        button.style.boxShadow = '6px 6px 0 black';
    };

    // Create span for text (to apply skew effect)
    const spanText = document.createElement('span');
    spanText.textContent = 'Checkout Code On GitHub';
    spanText.style.transform = 'skewX(15deg)';

    // Create moving arrow container
    const arrowContainer = document.createElement('span');
    arrowContainer.className = 'second';
    arrowContainer.style.width = '20px';
    arrowContainer.style.marginLeft = '30px';
    arrowContainer.style.position = 'relative';
    arrowContainer.style.top = '12%';
    arrowContainer.style.transition = '0.2s';

    // Create the SVG arrow
    const arrowSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    arrowSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    arrowSVG.setAttribute("width", "20");
    arrowSVG.setAttribute("height", "20");
    arrowSVG.setAttribute("viewBox", "0 0 24 24");
    arrowSVG.setAttribute("fill", "white");
    arrowSVG.innerHTML = `
        <path class="one" d="M9 18l6-6-6-6"></path>
        <path class="two" d="M15 18l6-6-6-6"></path>
    `;

    // Apply arrow path animation
    arrowSVG.querySelector('.one').style.transition = '0.14s';
    arrowSVG.querySelector('.one').style.transform = 'translateX(-60%)';

    arrowSVG.querySelector('.two').style.transition = '0.2s';
    arrowSVG.querySelector('.two').style.transform = 'translateX(-30%)';

    // Append SVG arrow to arrow container
    arrowContainer.appendChild(arrowSVG);

    // On hover, move arrow to the right
    button.onmouseenter = () => {
        button.style.boxShadow = '10px 10px 0 #fbc638';
        arrowContainer.style.marginRight = '45px';

        arrowSVG.querySelector('.one').style.transform = 'translateX(0%)';
        arrowSVG.querySelector('.two').style.transform = 'translateX(0%)';
    };

    button.onmouseleave = () => {
        button.style.boxShadow = '6px 6px 0 black';
        arrowContainer.style.marginRight = '0px';

        arrowSVG.querySelector('.one').style.transform = 'translateX(-60%)';
        arrowSVG.querySelector('.two').style.transform = 'translateX(-30%)';
    };

    // Append elements to button
    button.appendChild(spanText);
    button.appendChild(arrowContainer);

    // Append button to the container
    container.appendChild(button);
    createPortfolioButton("/")
}


function createPortfolioButton(portfolioLink) {
    // Ensure a valid container exists
    const container = document.getElementById("portfoliolink");
    if (!container) {
        console.error("Element with ID 'portfoliolink' not found.");
        return;
    }

    // Create the button element
    const button = document.createElement('a');
    button.href = portfolioLink;
    button.rel = 'noopener noreferrer';

    // Apply styles to match the given "cta" button
    Object.assign(button.style, {
        display: 'flex',
        alignItems: 'center',
        padding: '11px 33px',
        textDecoration: 'none',
        fontSize: '20px',
        color: 'white',
        background: '#007BFF', // Blue color for portfolio
        transition: '0.4s',
        boxShadow: '6px 6px 0 black',
        transform: 'skewX(-15deg)',
        border: 'none',
        cursor: 'pointer',
        position: 'relative',
        fontWeight: 'bold',
        width: "400px",
        marginRight: "auto"
    });

    // Remove outline on focus
    button.onfocus = () => button.style.outline = 'none';

    // Add hover effect
    button.onmouseenter = () => {
        button.style.transition = '0.2s';
        button.style.boxShadow = '10px 10px 0 #fbc638';
    };
    button.onmouseleave = () => {
        button.style.transition = '0.4s';
        button.style.boxShadow = '6px 6px 0 black';
    };

    // Create span for text (to apply skew effect)
    const spanText = document.createElement('span');
    spanText.textContent = 'Visit My Portfolio';
    spanText.style.transform = 'skewX(15deg)';

    // Create moving arrow container
    const arrowContainer = document.createElement('span');
    arrowContainer.className = 'second';
    arrowContainer.style.width = '20px';
    arrowContainer.style.marginLeft = '30px';
    arrowContainer.style.position = 'relative';
    arrowContainer.style.top = '12%';
    arrowContainer.style.transition = '0.2s';

    // Create the SVG arrow
    const arrowSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    arrowSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    arrowSVG.setAttribute("width", "20");
    arrowSVG.setAttribute("height", "20");
    arrowSVG.setAttribute("viewBox", "0 0 24 24");
    arrowSVG.setAttribute("fill", "white");
    arrowSVG.innerHTML = `
        <path class="one" d="M9 18l6-6-6-6"></path>
        <path class="two" d="M15 18l6-6-6-6"></path>
    `;

    // Apply arrow path animation
    arrowSVG.querySelector('.one').style.transition = '0.14s';
    arrowSVG.querySelector('.one').style.transform = 'translateX(-60%)';

    arrowSVG.querySelector('.two').style.transition = '0.2s';
    arrowSVG.querySelector('.two').style.transform = 'translateX(-30%)';

    // Append SVG arrow to arrow container
    arrowContainer.appendChild(arrowSVG);

    // On hover, move arrow to the right
    button.onmouseenter = () => {
        button.style.boxShadow = '10px 10px 0 #fbc638';
        arrowContainer.style.marginRight = '45px';

        arrowSVG.querySelector('.one').style.transform = 'translateX(0%)';
        arrowSVG.querySelector('.two').style.transform = 'translateX(0%)';
    };

    button.onmouseleave = () => {
        button.style.boxShadow = '6px 6px 0 black';
        arrowContainer.style.marginRight = '0px';

        arrowSVG.querySelector('.one').style.transform = 'translateX(-60%)';
        arrowSVG.querySelector('.two').style.transform = 'translateX(-30%)';
    };

    // Append elements to button
    button.appendChild(spanText);
    button.appendChild(arrowContainer);

    // Append button to the container
    container.appendChild(button);
}
