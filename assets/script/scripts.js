var currentText = document.getElementById("currentDay");
var current = moment().format("dddd, MMMM Do YYYY");
var currenthr = moment().format("HH:mm a");
var startday = moment().startOf('hour');


currentText.textContent = current;

// show current day ✅

function hours(){
    $(".hour").each(function(index){
        $(this).text(startday.hour(index + 9).format("h A"));
        if (startday.hour(index + 9).isBefore(moment())){
            $(this).next().addClass("past");
        }
        if (startday.hour(index + 9).isAfter(moment())){
            $(this).next().addClass("future");
        }
        if (startday.hour(index + 9).isSame(moment(), "hour")){
            $(this).next().addClass("present");
        }
    });
};

hours();

// timeblocks for standard buisness hours ✅
// color coded blocks ✅

// change and save events in timeblock
// refresh and events persist