$(document).ready(function () {
    
  // Function to grab current time from momentJS and display it, updating every second. 
  var timeLive = function () {
    document.getElementById("time-live").innerHTML = moment().format(
      "MMMM Do, YYYY; h:mm:ss a"
    );
  };
  setInterval(timeLive, 1000);

  // Function to check current time and assign the proper color coding to each hour block accordingly.

  function currentHour() {
    // Using momentJS to grab current hour.

    var presentHour = moment().hour();
    // console.log(presentHour);

    // Loop over time blocks
    // We use parseInt to make it easy to compare the value to the current hour we get from momentJS
    // We tack on the h in front of the hour because HTML rules, and then split it to grab just the number value.
    // Had to get outside help from a friend for this one.

    $(".time-block").each(function () {
      var timeBlock = parseInt($(this).attr("id").split("h")[1]);
      console.log(timeBlock);

      // Assigning classes to blocks depending on present hour.

      if (timeBlock < presentHour) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
      } else if (timeBlock === presentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
      } else if (timeBlock > presentHour) {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  // assigning click listener to save button

  $(".submitBtn").on("click", function () {

    // Retrieving values of corresponding hour block

    var event = $(this).siblings(".events").val();
    var hr = $(this).parent().attr("id");
    // console.log(event)
    // console.log(hr)

    // Save to local storage

    localStorage.setItem(hr, event);
    alert("Event saved!");
  });

  // Retrieving local storage values
  // probably a potential for a loop similar to time-block

  $("#h8 .events").val(localStorage.getItem("h8"));
  $("#h9 .events").val(localStorage.getItem("h9"));
  $("#h10 .events").val(localStorage.getItem("h10"));
  $("#h11 .events").val(localStorage.getItem("h11"));
  $("#h12 .events").val(localStorage.getItem("h12"));
  $("#h13 .events").val(localStorage.getItem("h13"));
  $("#h14 .events").val(localStorage.getItem("h14"));
  $("#h15 .events").val(localStorage.getItem("h15"));
  $("#h16 .events").val(localStorage.getItem("h16"));
  $("#h17 .events").val(localStorage.getItem("h17"));

  currentHour();
});
