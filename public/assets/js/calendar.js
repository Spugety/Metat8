const currentDate = document.querySelector(".currentDate");
const datesClass = document.querySelector(".dates");

let monthInc = 0; // track which month you're looking at
let clicked = null; // whatever day you clicked on

let date = new Date();
let currMonth = date.getMonth(); // gives month number in array index (starts at 0)
let currYear = date.getFullYear(); // gives 4 digit year number

const weekdaysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthsArray = ["January","February","March","April","May","June","July","August","September","October","November","December"]

const renderCalendar = () => {
    const monthfirstDay = new Date(currYear, currMonth, 1);
    const monthTotalDays = new Date(currYear, currMonth+1, 0).getDate(); // next month first date - 1 = this month last date
    console.log(monthTotalDays);
    
    const firstDateToString = monthfirstDay.toLocaleDateString("en-us", {
        weekday: "long",
        month: "numeric",
        day: "numeric",
        year: "numeric",
    });
    console.log(firstDateToString);

    // splits string into array of 2 halves. [0] is weekday [1] is date
    const disabledDays = weekdaysArray.indexOf(firstDateToString.split(", ")[0]);
    console.log(disabledDays);
    
    // loop for as long as total days in month + disabled days that are part of previous month
    for(let i = 1; i <= disabledDays + monthTotalDays; i++) {
        // add div tag
        const daySlot = document.createElement("li");
        // each div tag has day class
        daySlot.classList.add("day");

        // index is on a disabled day
        if(i > disabledDays) {
            //
            daySlot.innerText = i - disabledDays;
            // add button click listener
            daySlot.addEventListener("click", () => {
                console.log("click");
            });
        } else {
            daySlot.classList.add("disabled");
        }



        datesClass.appendChild(daySlot);
    }

    currentDate.textContent = `${monthsArray[currMonth + monthInc]} ${currYear}`;
}
renderCalendar();