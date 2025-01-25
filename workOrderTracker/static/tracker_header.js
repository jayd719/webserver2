const LOGO = `<div class="flex items-center gap-2">
  <img id='logo-main'
    class="w-20 liinvert"
    src="https://github.com/jayd719/webserver2/blob/main/workOrderTracker/static/tracker_assets/image.png?raw=true"
    alt="Business and Finance Icon"
  />
  
</div>
`

const LOGO2 = `<div class="flex items-center space-x-6 p-6 bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 max-w-lg mx-auto">
  <div class="relative">
    <img
      class="w-16 h-16 rounded-full border-4 border-primary shadow-lg"
      src="https://www.svgrepo.com/show/294021/graphic-business-and-finance.svg"
      alt="Business and Finance Icon"
    />
    <span class="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
      New
    </span>
  </div>
  <div class="text-left">
    <h1 class="text-3xl font-extrabold text-primary hover:text-primary-focus transition-colors duration-300">
      Work Order Tracker
    </h1>
    <p class="text-sm text-gray-600 mt-1">
      Manage and track work orders with ease. Stay organized and efficient.
    </p>
    <button class="mt-3 px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary-focus transition-colors duration-300 shadow-md">
      Get Started
    </button>
  </div>
</div>
`


const HEADER = `
<div class="navbar bg-base-100">
    <div class="navbar-start">
         ${LOGO}
    </div>
    <div class="navbar-center">
       
    </div>
    <div class="navbar-end">
        <button class="btn btn-ghost btn-circle">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </button>
        <div class="dropdown dropdown-left">
            <div tabIndex="0" role="button" class="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-border-width" viewBox="0 0 16 16">
                    <path d="M0 3.5A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5zm0 5A.5.5 0 0 1 .5 8h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5"/>
                </svg>
            </div>
            <ul
                tabIndex="0"
                class="menu menu-sm dropdown-content bg-base-200 rounded-box z-[100] mt-3 w-52 p-2 shadow">
                <li><a>Homepage</a></li>
                <li><a>Portfolio</a></li>
                <li><a>About</a></li>
            </ul>
        </div>
        <button class="btn btn-ghost btn-circle">
            <div class="indicator">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span class="badge badge-xs badge-primary indicator-item"></span>
            </div>
        </button>
    </div>
</div>
`;

const headerElement = document.createElement('header');
headerElement.innerHTML = HEADER;
document.body.append(headerElement);
