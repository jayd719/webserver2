function createGithubButton(githubLink) {
    // Create the main button container
    const button = document.createElement('a');
    button.href = githubLink;
    button.target = '_blank';
    button.rel = 'noopener noreferrer';
    button.className = 'w-full max-w-xs  my-10 mx-auto flex items-center justify-center px-4 py-2 btn btn-secondary';

    // GitHub icon
    const githubIcon = document.createElement('i');
    githubIcon.className = 'fab fa-github text-lg mr-2';

    // Button text
    const buttonText = document.createElement('span');
    buttonText.textContent = 'Checkout Project On GitHub';

    // Assemble the button
    button.appendChild(githubIcon);
    button.appendChild(buttonText);

    // Append the button to the body (or any other container)
    document.getElementById("gitlink").appendChild(button);
}


