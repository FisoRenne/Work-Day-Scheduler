$(document).ready(function () {
  var today = dayjs();
  var currentDate = dayjs().format('MMMM D, YYYY HH:ss' );
  var dateDisplay = document.getElementById("currentDay");
  dateDisplay.innerHTML = currentDate;
  retrieveNotesAndPopulateSchedule();
});

function saveNewNoteToLocalStorage(noteObject) {
  console.log('saved note is', noteObject);
  var existingNotesArray = JSON.parse(localStorage.getItem('savedNotes')) || [];
  // push our noteObject to our existing notes array
  existingNotesArray.push(noteObject);
  // now let's saved back to local storage, but before that we stringify the contents
  localStorage.setItem('savedNotes', JSON.stringify(existingNotesArray));
};

$(".saveBtn").click(function (e) {
  if (e.target.matches('button')) {
    console.log('button clicked');
    var textToSave1 = $(this).siblings('textarea').val();
    var hour1 = $(this).parent().attr('id');
    // let's create an object, with two properties: text and hour
    var myNote = {
      text: textToSave1,
      hour: hour1,
    };
    // and then let's pass in my note object to my save note function
    saveNewNoteToLocalStorage(myNote);
  } else if (e.target.matches('i')) {
    var parentDiv = $(this).parents('div.row');
    var textToSave2 = parentDiv.children('textarea').val();
    var hour2 = parentDiv.attr('id');

    console.log(parentDiv);
    // let's create an object, with two properties: text and hour
    var myNote = {
      text: textToSave2,
      hour: hour2,
    }
    // and then let's pass in my note object to my save note function
    saveNewNoteToLocalStorage(myNote);
  }
});

$('#hour-8 textarea').val(localStorage.getItem('hour-8'));
$('#hour-9 textarea').val(localStorage.getItem('hour-9'));
$('#hour-10 textarea').val(localStorage.getItem('hour-10'));
$('#hour-11 textarea').val(localStorage.getItem('hour-11'));
$('#hour-12 textarea').val(localStorage.getItem('hour-12'));
$('#hour-1 textarea').val(localStorage.getItem('hour-1'));
$('#hour-2 textarea').val(localStorage.getItem('hour-2'));
$('#hour-3 teextarea').val(localStorage.getItem('hour-3'));
$('#hour-4 .description').val(localStorage.getItem('hour-4'));
$('#hour-5 .description').val(localStorage.getItem('hour-5'));
$('#hour-6 .description').val(localStorage.getItem('hour-6'));
$('#hour-7 .description').val(localStorage.getItem('hour-7'));

function colorTime() {
  
  var currHour = today.hour();

  $('.time-block').each(function(){
    var time = parseInt($(this).attr('id').split("hour")[1]);
    if (currHour < hour) {
      $(this).addClass('past');
    }
      else if (time === currHour) {
        $(this).removeClass('past');
        $(this).removeClass('future');
        $(this).addClass('present');
      } 
      else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future'); 
    }
  });
}

colorTime();



 