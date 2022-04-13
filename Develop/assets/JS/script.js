var HoursStart= 9;
var HoursEnd= 5;
var userInput= localStorage.getItem ('time,values');
var DayPlannerEl=[];

$(document).ready(function(){
// Time Display
var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
  $("#currentDay").text(currentDay)

//changes the color depending on time
function hourCheck(){
  var currentHour = moment().hours();
  //;
  console.log("current hour ", currentHour)
  var timeblock = $('.timeblock');
   timeblock.each(function() {
     console.log($(this).attr("id"));
   var thisHour = parseInt($(this).attr("id"))
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
  var values = $(this).siblings('.description').val()
  var time = $(this).parent().attr('id');
// console.log(`Time: ${time}  Value: ${values}`)
// console.log(values)
localStorage.setItem(time,values);
})

$('#9').children('.description').val(localStorage.getItem('9'))
$('#10').children('textarea').val(localStorage.getItem('10'))
$('#11').children('textarea').val(localStorage.getItem('11'))
$('#12').children('textarea').val(localStorage.getItem('12'))
$('#13').children('textarea').val(localStorage.getItem('13'))
$('#14').children('textarea').val(localStorage.getItem('14'))
$('#15').children('textarea').val(localStorage.getItem('15'))
$('#16').children('textarea').val(localStorage.getItem('16'))
$('#17').children('textarea').val(localStorage.getItem('17'))

});
