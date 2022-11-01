const currentDate = document.querySelector(".currentDate");
const datesClass = document.querySelector(".dates");
const backBtn = document.querySelector(".arrowLeft");
const nextBtn = document.querySelector(".arrowRight");

// track which month you're looking at
let monthInc = 0;
const weekdaysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthsArray = ["January","February","March","April","May","June","July","August","September","October","November","December"];

// keeps track of the present date
// presentDate object
const presentDate = new Date();
// turns presentDate to string
const presentDateToString = presentDate.toLocaleDateString("en-us", {
    weekday: "long",
    month: "numeric",
    day: "numeric",
    year: "numeric"
});

// make calendar
function renderCalendar() {
    const date = new Date();
    
    // if month increment counter had been touched before at all
    if(monthInc !== 0) {
        // set date to the first date, so calculations can be used without worry of skipping months depending on 28,29,30, or 31 days.
        date.setDate(1);
        // update date object to add monthInc. date object automatically handles the month/year calculation
        date.setMonth(new Date().getMonth() + monthInc); 
    }

    // uses these variables/values to calc index math stuffs
    const currMonth = date.getMonth(); // gives month number in array index (starts at 0)
    const currYear = date.getFullYear(); // gives 4 digit year number

    const monthFirstDay = new Date(currYear, currMonth, 1);
    const monthTotalDays = new Date(currYear, currMonth+1, 0).getDate(); // next month first date - 1 = this month last date

    // finds the weekday on the first day of the month, also formats the object's properties
    const firstDateToString = monthFirstDay.toLocaleDateString("en-us", {
        weekday: "long",
        month: "numeric",
        day: "numeric",
        year: "numeric"
    });

    // first splits string into array of 2 halves. [0] is weekday [1] is date
    // then uses that weekday string and uses that to find the index of the weekdays array
    // this is how to calculate the disabled days
    const disabledDays = weekdaysArray.indexOf(firstDateToString.split(", ")[0]);
    
    // before we forloop to create the calendar dates remove any previous HTML elements
    datesClass.innerHTML = "";

    // loop for as long as total days in month + disabled days that are part of previous month
    for(let i = 1; i <= disabledDays + monthTotalDays; i++) {
        // add list tag
        const daySlot = document.createElement("li");
        // each list tag has day class
        daySlot.classList.add("day");

        // if index is not a disabled date
        if(i > disabledDays) {
            // daySlot text is index - disabledDays: which should be the date
            daySlot.innerText = i - disabledDays;

            // if the text in daySlot = present date and it's the correct month/year
            if(daySlot.innerText == presentDate.getDate() && (currMonth == presentDate.getMonth() && currYear == presentDate.getFullYear())) {
                // change color of daySlot
                daySlot.style.background = "lightsteelblue";
                // on hover of presentDate, change color of daySlot
                daySlot.addEventListener("mouseover", () => {
                    daySlot.style.background = "lightskyblue";
                });
                daySlot.addEventListener("mouseout", () => {
                    daySlot.style.background = "lightsteelblue";
                });
            }

            // add button click listener for dates
            daySlot.addEventListener("click", () => {
                // if you click on a daySlot that's been used before
                if(daySlot.innerText <= presentDate.getDate() && (currMonth <= presentDate.getMonth() && currYear <= presentDate.getFullYear())) {
                    viewDateEntry();
                    // pseudocode
                    // if you click on a daySlot either current or passed
                    // it'll view the day options on page
                    // then after you're done selecting stuff
                    // it'll save into the calendar
                }
                //insertcodeherelmaoasdhfjahsuehjaskdhfj
                console.log("clicked a date");

            });
        } else {
            // if index is a disabled date, add disabled class to it
            daySlot.classList.add("disabled");
        }

        datesClass.appendChild(daySlot);
    }

    //current month and year
    currentDate.innerText = `${monthsArray[currMonth]} ${currYear}`;
}

// make arrow buttons for month increment
function buttonFunction() {
    // when you click button
    backBtn.addEventListener("click", () => {
        // decrement monthInc
        monthInc--;
        // call to make calendar again
        // inside renderCalendar() function should be logic for changing month/year automatically
        renderCalendar();
    });

    nextBtn.addEventListener("click", () => {
        monthInc++;
        renderCalendar();
    });
}

// opens modal to view entry information on present/past date
function viewDateEntry() {
    
}

//call functions
buttonFunction();
renderCalendar();