const currentDate = document.querySelector(".current_date");

let date = new Date();
let currentMonth = date.getMonth(); // gives month number in array index (starts at 0)
let currentYear = date.getFullYear(); // gives 4 digit year number

const arrayMonth = [
    "January","February","March","April","May","June","July","August","September","October","November","December"
]

const renderCalendar = () => {
    let lastDateOfMonth = new Date(currentYear, currentMonth+1, 0).getDate(); // value set to last date of current month/year combination
    console.log(lastDateOfMonth);

    for (let i = 0; i < lastDateOfMonth; i++) {
        const element = arrayMonth[i];
    }
    
    currentDate.textContent = `${arrayMonth[currentMonth]} ${currentYear}`;
}
renderCalendar();