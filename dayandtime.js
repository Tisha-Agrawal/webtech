function displayDayandDate() {
    const current_date = new Date();
    const days_of_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = days_of_week[current_date.getDay()];
    const hours = current_date.getHours() % 12 || 12; 
    const minutes = current_date.getMinutes().toString().padStart(2, '0');
    const seconds = current_date.getSeconds().toString().padStart(2, '0');
    const ampm = current_date.getHours() >= 12 ? "PM" : "AM";

    console.log(`Today is: ${day}`);
    console.log(`Current time is: ${hours}:${minutes}:${seconds} ${ampm}`);
}
displayDayandDate(); 