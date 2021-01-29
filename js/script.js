


$(document).ready(function(){

  $("#currentDay").text(moment().format("dddd, MMMM Do"));
  var time = moment();
  var saveBtn = $(".saveBtn");
  
  // store value to localstorage

  saveBtn.on("click",  function () {
    var time = $(this).parent().attr("id");
    var schedule = $(this).siblings(".schedule").val();
    localStorage.setItem(time, schedule);
  });


  // set value
  function dayPlanner() {
    $(".time-block").each(function () {
      var id = $(this).attr("id");
      var schedule = localStorage.getItem(id);

      if (schedule !== null) {
          $(this).children(".schedule").val(schedule);
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