var HoursStart= 9;
var HoursEnd= 5;
var currentTimeEl= $('currentTime');
var currentHourEl= $('currentHour');
var userInput= $('userInput');
var DayPlannerEl=[];
$(document).ready(function(){
// Time Display
var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").text(currentDay)

//changes the color depending on time
function hourCheck(){
var currentHour = moment().hours();
$('time-block').each(function() {
  var thisHour = parseInt($(this).attr(id))
  if (thisHour < currentHour){
      $(this).addClass('past')
  } else if ( thisHour === currentHour){
      $(this).removeClass('past');
      $(this).addClass('present');
  } else{
    $(this).removeClass('past')
    $(this).removeClass('present');
    $(this).addClass('future');
  }
})
}
hourCheck()

// checks time every minute 
var runCheck = setInterval(hourCheck, 60000 );

// saving to local storage
$('.saveBtn').on('click',function(){
var value = $(this).siblings('.description').val()
var time = $(this).parent().attr('id')
console.log(`Time: ${time} | Value: ${value}`)
localStorage.setItem(time,value)
})

$('#9 .description').val(localStorage.getItem('9'))
$('#10 .description').val(localStorage.getItem('10'))
$('#11 .description').val(localStorage.getItem('11'))
$('#12 .description').val(localStorage.getItem('12'))
$('#1 .description').val(localStorage.getItem('1'))
$('#2 .description').val(localStorage.getItem('2'))
$('#3 .description').val(localStorage.getItem('3'))
$('#4 .description').val(localStorage.getItem('4'))
$('#5 .description').val(localStorage.getItem('5'))


})


