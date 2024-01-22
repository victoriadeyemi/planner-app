// event listener for save button
$(".saveBtn").on("click", function () {
var value = $(this).siblings(".description").val();
var time = $(this).parent().attr("id");
localStorage.setItem(time, value);
});

const currentDay = $("#currentDay");
var today = dayjs();
currentDay.text(today.format("D MMM YYYY"));

function timeBlock() {
    var currentHour = dayjs().format("H");
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
        if (blockHour < currentHour) {
            $(this).addClass("past");
        } else if (blockHour === currentHour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
        }
        console.log(blockHour, currentHour);
    });
}

//for loop for getItem
for (var i = 9; i < 18; i++) {
    $("#hour-" + i + " .description").val(localStorage.getItem("hour-" + i));
}

timeBlock();