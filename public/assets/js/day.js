// code for entering affirmation and journal entries 

$(document).ready(()=>{
    $('#formData').on('submit', function(event){
        event.preventDefault();

        const moodData={
            mood: $("[name=todaysMood]:checked").val(),
        };
        console.log(moodData);
        
        const intentionsData={
            entry: $("#GoalIntentionAffirmation").val().tim
        };
        const jouralEntry= {
            entry: $("#journalEntry").val().tim
        };
        const feelingsData={
            mood: $("[name=extraFeelings]:checked").val(),
        };

        submitData (moodData, intentionsData, jouralEntry, feelingsData);
    });
    function submitData( dataMood, dataIntentions, dataJournal, dataFeelings){
        $.ajax({
            url:"/api/day",
            method: "POST",
            data: { dataMood: dataMood, dataIntentions: dataIntentions, dataJournal: dataJournal, dataFeelings: dataFeelings }
        })
        .then(function(data){
            console.log(data);
            window.location.href= data.redirect;
        });
    }
})