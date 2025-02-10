
const scheduleData = [
    { id: "1", time: "06:30", activity: "Work Session", duration: "4 hrs", category: "work" },
    { id: "2", time: "10:30", activity: "Gym / Workout", duration: "1 hr", category: "health" },
    { id: "3", time: "11:30", activity: "Breakfast & Relaxation", duration: "30 min", category: "break" },
    { id: "4", time: "12:00", activity: "Theory Study", duration: "1.5 hrs", category: "study" },
    { id: "5", time: "13:30", activity: "Short Break", duration: "15 min", category: "break" },
    { id: "6", time: "13:45", activity: "Practical Study", duration: "1.5 hrs", category: "study" },
    { id: "7", time: "15:15", activity: "Lunch & Relaxation", duration: "1 hr", category: "break" },
    { id: "8", time: "16:15", activity: "Side Project", duration: "1.5 hrs", category: "work" },
    { id: "9", time: "17:45", activity: "Break", duration: "15 min", category: "break" },
    { id: "10", time: "18:00", activity: "Theory Study", duration: "1.5 hrs", category: "study" },
    { id: "11", time: "19:30", activity: "Practical Study", duration: "1.5 hrs", category: "study" },
    { id: "12", time: "21:00", activity: "Dinner & Relaxation", duration: "1 hr", category: "break" },
    { id: "13", time: "22:00", activity: "Personal Time", duration: "1 hr", category: "personal" },
    { id: "14", time: "23:00", activity: "Wind Down", duration: "30 min", category: "personal" },
    { id: "15", time: "23:30", activity: "Sleep 😴", duration: "7 hrs", category: "sleep" },
];

const categoryColors = {
    work: "bg-primary bg-primary-100 border-primary-200 text-primary-900",
    health: "bg-secondary bg-secondary-100 border-secondary-200 text-secondary-900",
    study: "bg-accent bg-stand-100 border-stand-200 text-stand-900",
    break: "bg-neutral bg-yellow-100 border-yellow-200 text-yellow-900",
    personal: "bg-ghost bg-pink-100 border-pink-200 text-pink-900",
    sleep: "bg-link bg-gray-100 border-gray-200 text-gray-900",
};
function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0'); // Ensures two digits
    const minutes = now.getMinutes().toString().padStart(2, '0'); // Ensures two digits
    return `${hours}:${minutes}`;
}


let selectedDate = new Date();

function updateCalendar() {
    document.getElementById('currentDate').textContent = selectedDate;
    renderTimeSlots();
    renderEvents();
    renderCurrentTimeLine()
}

function removeOldTimeLine() {
    const eventElement = document.getElementById("current-time-line")
    eventElement.remove()
}
function renderCurrentTimeLine() {
    const eventElement = document.createElement('a');
    eventElement.id = "current-time-line"
    eventElement.className = `absolute left-0 right-0 bg-red-100  border border-red-500 rounded-full z-[200]`;
    eventElement.style.height = `10px`;
    eventElement.style.top = `${getEventStartPosition(getCurrentTime())}px`;
    eventElement.style.textAlign = "right"
    eventElement.style.padding = "2px"
    eventElement.innerHTML = `
    <h1 class="text-xl font-bold">${getCurrentTime()}<h1>
    `;
    return eventElement

}

function renderTimeSlots() {
    const timeSlotsContainer = document.getElementById('timeSlots');
    timeSlotsContainer.innerHTML = '';
    for (let i = 6; i < 24; i++) {
        const timeSlot = document.createElement('div');
        timeSlot.className = 'h-[60px] text-right pr-2 text-sm text-gray-500 border-b border-gray-200';
        timeSlot.textContent = `${i.toString().padStart(2, '0')}:00`;
        timeSlotsContainer.appendChild(timeSlot);
    }
}

function renderEvents() {
    const eventsContainer = document.getElementById('events');
    eventsContainer.innerHTML = '';
    scheduleData.forEach(item => {
        const eventElement = document.createElement('div');
        eventElement.className = `absolute left-0 right-0 rounded-md p-2 border overflow-hidden cursor-pointer transition-all duration-200 ease-in-out hover:shadow-md ${categoryColors[item.category]}`;
        eventElement.style.height = `${getEventHeight(item.duration)}px`;
        eventElement.style.top = `${getEventStartPosition(item.time)}px`;
        eventElement.innerHTML = `
    <div class="font-semibold text-sm">${item.activity}</div>
    <div class="text-xs opacity-75">${item.time} - ${item.duration}</div>
    `;
        eventElement.onclick = () => showEventDetails(item);
        eventsContainer.appendChild(eventElement);
    });
    eventsContainer.id = "events-container"
    eventsContainer.appendChild(renderCurrentTimeLine(getCurrentTime()))
}

function getEventHeight(duration) {
    const hours = parseFloat(duration.split(' ')[0]);
    return hours * 60;
}

function getEventStartPosition(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return (hours * 60 + minutes - 390);
}

function showEventDetails(event) {
    const modal = document.getElementById('eventModal');
    document.getElementById('modalTitle').textContent = event.activity;
    document.getElementById('modalTime').textContent = `Time: ${event.time}`;
    document.getElementById('modalDuration').textContent = `Duration: ${event.duration}`;
    document.getElementById('modalCategory').textContent = `Category: ${event.category}`;
    modal.showModal();
}

document.getElementById('prevDay').addEventListener('click', () => {
    selectedDate = dateFns.subDays(selectedDate, 1);
    updateCalendar();
});

document.getElementById('nextDay').addEventListener('click', () => {
    selectedDate = dateFns.addDays(selectedDate, 1);
    updateCalendar();
});

updateCalendar();

setInterval(() => {
    removeOldTimeLine()
    const currLine = renderCurrentTimeLine()
    document.getElementById("events-container").appendChild(currLine)
    currLine.scrollIntoView({ behavior: "smooth", block: "center" });
}, 60000);