// Create the experience section element
const experienceSection = document.createElement('section');
experienceSection.className = 'container mx-auto px-8 py-12 bg-white';

// Create the headingExp
const headingExp = document.createElement('h2');
headingExp.className = 'text-3xl font-bold text-center';
headingExp.textContent = 'Experience';
experienceSection.appendChild(headingExp);

// Create the experience list container
const experienceList = document.createElement('div');
experienceList.className = 'mt-6 space-y-6';

// Array of experience items
const experiences = [
    {
        title: 'Lead Manufacturing Engineer',
        company: 'Canadian Babbitt Bearings (2023 - 2024)',
        description: 'Led the manufacturing department and optimized CNC workflows for increased production efficiency.'
    },
    {
        title: 'Manufacturing Engineer',
        company: 'Canadian Babbitt Bearings (2020 - 2023)',
        description: 'Created and optimized CNC programs for various machining centers.'
    }
];

// Loop through the experiences array and create experience cards
experiences.forEach(experience => {
    const experienceCard = document.createElement('div');
    experienceCard.className = 'p-4 shadow-md rounded-lg bg-base-300';

    const title = document.createElement('h3');
    title.className = 'text-xl font-bold';
    title.textContent = experience.title;

    const company = document.createElement('p');
    company.className = 'text-sm text-gray-500';
    company.textContent = experience.company;

    const description = document.createElement('p');
    description.className = 'mt-2';
    description.textContent = experience.description;

    // Append elements to the experience card
    experienceCard.appendChild(title);
    experienceCard.appendChild(company);
    experienceCard.appendChild(description);

    // Append the experience card to the list
    experienceList.appendChild(experienceCard);
});

// Append the experience list to the section
experienceSection.appendChild(experienceList);

// Append the section to the body or any other container
document.body.appendChild(experienceSection);