


$(document).ready(function(){

  $("#currentDay").text(moment().format("dddd, MMMM Do"));
  var time = moment();
  var saveBtn = $(".saveBtn");
  
  // store value to localstorage

  saveBtn.on("click",  function () {
    var time = $(this).parent().attr("id");
    var dailySchedule = $(this).siblings(".schedule").val();
    localStorage.setItem(time, dailySchedule);
  });


  // set value
  function dayPlanner() {
    $(".time-block").each(function () {
      var id = $(this).attr("id");
      var dailySchedule = localStorage.getItem(id);

      if (dailySchedule !== null) {
          $(this).children(".schedule").val(dailySchedule);
      }
  });

  }

  dayPlanner()
  // change color base on hour
  function dayHours() {
    hour = time.hours();
    $(".time-block").each(function () {
        var thisHour = parseInt($(this).attr("id"));

        if (thisHour > hour) {
            $(this).addClass("future")
        }
        else if (thisHour === hour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("past");
        }
    })
  }
  dayHours();
});