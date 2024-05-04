function calculateTimeFromDate(inputDate) {
    // Convert inputDate to a JavaScript Date object
    const startDate = new Date(inputDate);
    
    // Get the current date and time
    const currentDate = new Date();
    
    // Calculate the difference in milliseconds
    const difference = startDate-currentDate ;
    
    // Convert milliseconds to days, hours, minutes, and seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}

function updateGradute(){
// Example usage:
const inputDate = '2025-08-30T12:00:00'; // Example date string
const timeDifference = calculateTimeFromDate(inputDate);
document.getElementById('days').textContent= timeDifference.days
document.getElementById('hours').textContent = timeDifference.hours
document.getElementById('mins').textContent=timeDifference.minutes
document.getElementById('secs').textContent = timeDifference.seconds
console.log(document.getElementById('days'))

console.log(timeDifference)

}


setInterval(updateGradute, 1000);