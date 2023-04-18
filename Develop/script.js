$(document).ready(function () {
  var currentDate = dayjs().format('MMMM D, YYYY HH:ss' );
  var dateDisplay = document.getElementById("currentDay");
  dateDisplay.innerHTML = currentDate;


var today = dayjs();
$(document).ready(function (){


$(".saveBtn").click(function (e) {
  if (e.target.matches('button')) {
    console.log('button clicked');
    var textToSave = $(this).siblings('.description').val();
    var hour = $(this).parent().attr('id');
    localStorage.setItem(hour, textToSave);
  }});

$('#hour8 .description').val(localStorage.getItem('hour8'));
$('#hour9 .description').val(localStorage.getItem('hour9'));
$('#hour10 .description').val(localStorage.getItem('hour10'));
$('#hour11 .description').val(localStorage.getItem('hour11'));
$('#hour12 .description').val(localStorage.getItem('hour12'));
$('#hour1 .description').val(localStorage.getItem('hour1'));
$('#hour2 .description').val(localStorage.getItem('hour2'));
$('#hour3 .description').val(localStorage.getItem('hour3'));
$('#hour4 .description').val(localStorage.getItem('hour4'));
$('#hour5 .description').val(localStorage.getItem('hour5'));
$('#hour6 .description').val(localStorage.getItem('hour6'));

function colorTime() {
  var currHour = today.hour();

  $(".time-block").each(function () {
    var time = parseInt($(this).attr("id").split("hour")[1]);

    if (currHour > time) {
      $(this).removeClass("present");
      $(this).removeClass("future");
      $(this).addClass("past");
    }
      else if (time === currHour) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      } 
      else {
        $(this).removeClass("past");
        $(this).removeClass('present');
        $(this).addClass("future"); 
    }

  })
}

colorTime();

})

});

 