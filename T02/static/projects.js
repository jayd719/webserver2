// Array of projects
const projects = [
    {
        title: "Video Highlight Generator",
        description: "Developed video processing application during the Laurier Analytics Hackathon hosted at Google Waterloo to automate the process of generating highlight clips from sports videos",
        link: "/pages/LaurierAnalytics2025",
        Tools: ["Python", "OpenCV", "Tesseract", "FFmpeg"],
        layout: "lg:col-span-2",
    },
    {
        title: "k-Nearest Neighbors Classifier:",
        description: "Developed a k-NN classifier from scratch using Euclidean and Manhattan distances, cross-validation, and hyperparameter tuning to find the best k for accurate predictions",
        link: "/pages/knn-1",
        Tools: ["Numpy", "Scikit Learn", "Matplotlib", "KNN"],
        layout: "lg:col-span-2",
    },
    {
        title: "WorkFlow Tracker",
        description: " A tool for managing work orders, tracking progress, and ensuring seamless task organization and visibility.",
        link: "/work-order-tracker/tracker/",
        Tools: ["Python", "Django", "JavaScript", "MySQL"],
        githubLink: "/pages/resume/1",
    },
    {
        title: "Stock Market Analysis I",
        description: "Stock market analysis using Yahoo Finance API, visualizing volume trends, price movements, statistical distributions, error handling, and technical insights",
        link: "/pages/data-visualisation-1",
        Tools: ["Numpy", "Pandas", "Matplotlib", "Yahoo Finance API"],
        githubLink: "/pages/resume/1",
    },
    {
        title: "Image Processing Toolkit",
        description: "Created a toolkit using OpenCV to simplify image processing tasks and visualize transformations in real-time on a live webpage.",
        link: "/pages/image-processing-toolkit/",
        Tools: ["Python", "OpenCV", "Image Processing"],
        githubLink: "https://github.com/jayd719/openCV/tree/template1",
    },
    {
        title: "3D Files Renderer",
        description: "Real-time 3D object rendering application built using OpenG.",
        link: "/pages/computer-graphics-3d-renderer/",
        Tools: ["C++", "OpenGL", "Computer Graphics"],
        githubLink: ""
    },
    {
        title: "Grab my résumé!",
        description: "Discover my work experience, explore the projects I've been involved in, and learn about my educational achievements. Dive deeper into the skills and expertise that have shaped my career.",
        link: "/pages/resume/1",
        Tools: [],
        githubLink: ""
    },
    {
        title: "Sorting Algorithms",
        description: "visualizing the step- by - step process of sorting data",
        link: "/version_1/sorting-algorithms/",
        Tools: [],
        githubLink: ""
    },
    {
        title: "CNC Section",
        description: "Gain insights into the complex projects I've programmed, theprecision machining skills I've honed, and the advanced techniquesI employ.",
        link: "/manufacturing_engineering/",
        Tools: [],
        githubLink: ""
    },



];




function renderProjects(prepend = true) {
    const projectContianer = document.getElementById('sections');

    let text = ""
    projects.forEach(project => {
        const { title, description, link, Tools, layout } = project;
        text = `${text}${createProjectCard(title, description, link, Tools, layout)}`
    });
    if (prepend) {
        projectContianer.innerHTML = `${text}${projectContianer.innerHTML}`
    }
    else {
        projectContianer.innerHTML = `${projectContianer.innerHTML}${text}`
    }



}

function getRandomSpan(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
const items = ["lg:col-span-2", "lg:row-span-2", "lg:row-span-1", "lg:col-span-1"];

function createProjectCard(title, description, link, tools, span = "") {

    // let baseColor = getColor_base();
    let css = "1"
    let titleCss = "text-3xl font-normal tracking-tight font-title text-center font-bold mb-10 text-5xl"
    let descriptionCSs = "mt-4 text-2xl text-center text-zinc-500 dark:text-zinc-400 font-light"
    let toolCss = "bg-gray-300 p-2 rounded-full px-6 shadow-md text-center text-gray-800 hover:bg-gray-400 transition-all duration-300"
    let toolText = ""
    tools.forEach(tool => {
        toolText += `<p class="${toolCss}">${tool}</p>`
    });
    return `
       <a href="${link}" class="${css} ${getRandomSpan(items)}">
            <div class="w-full h-full grid content-between">
                <div>
                    <p class="${titleCss}">${title}</>
                    <p class="${descriptionCSs}">${description}</p>
                </div>
                <div>
                    <div class="flex items-center gap-3 pt-5">${toolText}</div>
                    <div class="absolute bottom-0 right-0 p-5 group-hover:rotate-[45deg] group-hover:scale-[2] transition duration-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"></path>
                        </svg>
                    </div>
                </div>
                    
            </div>
        </a>
    `;
}



