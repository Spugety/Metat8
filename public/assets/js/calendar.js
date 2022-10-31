const currentDate = document.querySelector(".currentDate");
const datesClass = document.querySelector(".dates");
const backBtn = document.querySelector(".arrowLeft");
const nextBtn = document.querySelector(".arrowRight");

let monthInc = 0; // track which month you're looking at
let clicked = null; // whatever day you clicked on

const weekdaysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthsArray = ["January","February","March","April","May","June","July","August","September","October","November","December"]

function renderCalendar() {
    let date = new Date();

    if(monthInc !== 0) {
        date.setMonth(new Date().getMonth() + monthInc);
    }

    let currMonth = date.getMonth(); // gives month number in array index (starts at 0)
    let currYear = date.getFullYear(); // gives 4 digit year number

    const monthfirstDay = new Date(currYear, currMonth, 1);
    const monthTotalDays = new Date(currYear, currMonth+1, 0).getDate(); // next month first date - 1 = this month last date

    const firstDateToString = monthfirstDay.toLocaleDateString("en-us", {
        weekday: "long",
        month: "numeric",
        day: "numeric",
        year: "numeric",
    });

    // splits string into array of 2 halves. [0] is weekday [1] is date
    const disabledDays = weekdaysArray.indexOf(firstDateToString.split(", ")[0]);
    
    datesClass.innerHTML = "";

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

    //current month and year
    currentDate.innerText = `${monthsArray[currMonth]} ${currYear}`;
}

function buttonFunction() {
    backBtn.addEventListener("click", () => {
        console.log("clicked");
        monthInc--;
        renderCalendar();
    });

    nextBtn.addEventListener("click", () => {
        console.log("clicked");
        monthInc++;
        renderCalendar();
    });
}

buttonFunction();
renderCalendar();
