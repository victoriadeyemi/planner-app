
const currentDay = $("#currentDay");
var today = dayjs().format("dddd, MMMM D");

function timeBlock() {
    var currentHour = dayjs().format("H");
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
        if (blockHour < currentHour) {
            $(this).addClass("past");
        } else if (blockHour == currentHour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
        }
    });
}