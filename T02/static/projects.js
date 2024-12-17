// Array of projects
const projects = [
    {
        title: "AI-Powered Chess Engine",
        description: "Developed a chess engine using machine learning algorithms to predict optimal moves.",
        link: "https://github.com/jayd719/chess-engine"
    },
    {
        title: "E-commeeerce Platform",
        description: "Built a full-stack e-commerce website with user authentication, product catalog, and payment integration.",
        link: "https://github.com/jayd719/ecommerce-platform",
        layout: "lg:col-span-2"
    },
    {
        title: "Data Visualization Dashboard",
        description: "Created an interactive dashboard for visualizing complex datasets using D3.js and React.",
        link: "https://github.com/jayd719/data-viz-dashboard",
        layout: "lg:row-span-2"
    },
    {
        title: "E-commes11rce Platform",
        description: "Built a full-stack e-commerce website with user authentication, product catalog, and payment integration.",
        link: "https://github.com/jayd719/ecommerce-platform",
        
    },
    {
        title: "E-commercwe Platform",
        description: "Built a full-stack e-commerce website with user authentication, product catalog, and payment integration.",
        link: "https://github.com/jayd719/ecommerce-platform",
    },
    {
        title: "asdfasfdasorm",
        description: "Built a full-stack e-commerce website with user authentication, product catalog, and payment integration.",
        link: "https://github.com/jayd719/ecommerce-platform",
    }
];




function renderProjects(prepend=true) {
    const projectContianer = document.getElementById('sections');
    console.log(projects)

    let text = ""
    projects.forEach(project => {
        const { title, description, link, layout } = project;
        text = `${text}${createProjectCard(title, description, link, layout)}`
    });
    if (prepend){
        projectContianer.innerHTML = `${text}${projectContianer.innerHTML}`
    }
    else{
        projectContianer.innerHTML = `${projectContianer.innerHTML}${text}`
    }
        
    // Loop to generate project cards


}

function createProjectCard(title, description, link, span = "") {

    // let baseColor = getColor_base();
    let css = ""
    let titleCss = "text-5xl font-normal tracking-tight font-title text-center font-bold mb-10 lg:text-8xl"
    let descriptionCSs = "mt-4 text-2xl text-center text-zinc-500 dark:text-zinc-400 font-light"

    return `
       <a href="${link}" class="${css} ${span}">
            <div class="w-full">
                <p class="${titleCss}">${title}</>
                <p class="${descriptionCSs}">${description}</p>
                <div class="absolute bottom-0 right-0 p-5 group-hover:rotate-[45deg] group-hover:scale-[2] transition duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"></path>
                    </svg>
                </div>
            </div>
        </a>
    `;
}



