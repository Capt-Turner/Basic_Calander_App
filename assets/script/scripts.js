var currentText = document.getElementById("currentDay");
var current = moment().format("[It is currently] dddd, MMMM Do YYYY");

currentText.textContent = current;

// show current day ✅
// timeblocks for standard buisness hours
// color coded blocks
// change and save events in timeblock
// refresh and events persist