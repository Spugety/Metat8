// code for entering affirmation and journal entries 

$(document).ready((getEntry) => {

    $('#formData').on('submit', function (event) {
        event.preventDefault();
        getEntry();
        const moodData = {
            mood: $("[name=todaysMood]:checked").val().trim,
        };
        console.log(moodData);

        const intentionsData = {
            entry: $("#GoalIntentionAffirmation").val().trim,
        };
        const jouralEntry = {
            entry: $("#journalEntry").val().trim
        };
        const feelingsData = {
            mood: $("[name=extraFeelings]:checked").val().trim,
        };

        submitData(moodData, intentionsData, jouralEntry, feelingsData);
    });
    function submitData(dataMood, dataIntentions, dataJournal, dataFeelings) {
        $.ajax({
            url: "/api/day",
            method: "POST",
            data: { dataMood: dataMood, dataIntentions: dataIntentions, dataJournal: dataJournal, dataFeelings: dataFeelings }
        })
            .then(function (data) {
                console.log(data);
                window.location.href = data.redirect;
            });
    }
})