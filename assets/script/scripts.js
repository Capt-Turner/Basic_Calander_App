var currentText = document.getElementById("currentDay");
var current = moment().format("dddd, MMMM Do YYYY");
var currenthr = moment().format("HH:mm a");
var startday = moment().startOf('hour');


currentText.textContent = current;

// show current day ✅

function hours(){
    $(".hour").each(function(index){
        $(this).text(startday.hour(index + 9).format("h A"));
    });
};

hours();

// timeblocks for standard buisness hours ✅


// color coded blocks
// change and save events in timeblock
// refresh and events persist