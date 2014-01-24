$(document).ready(function() {
  var currentDate = new Date();

  var interval = setInterval(function() {
    currentDate = new Date();
    updateAnalogClock(currentDate);
    updateDigitalClock(currentDate);
  }, 1000);

  // setInterval(function() {
  //   //alert(currentDate);
  //   clearInterval(interval);
  // }, 10000);
});

function updateRotation(id, degrees) {
  var rotation = "rotate(" + degrees + "deg)";

  $("#" + id).css({
    "-webkit-transform" : rotation,
    "-moz-transform" : rotation,
    "-ms-transform" : rotation,
    "-o-transform" : rotation,
    "transform" : rotation
  });
}

function updateAnalogClock(currentDate) {
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();

  var hourDegree = hours * 30 + (minutes / 2);
  var minuteDegree = minutes * 6;
  var secondDegree = seconds * 6;

  updateRotation("hour", hourDegree);
  updateRotation("minute", minuteDegree);
  updateRotation("second", secondDegree);
}

function updateDigitalClock(currentDate) {
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();

  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  var ampm = (hours < 12) ? "AM" : "PM";
  hours = (hours > 12) ? hours - 12 : hours;
  hours = (hours == 0) ? 12 : hours;

  var currentTimeString = hours + ":" + minutes + ":" + seconds + " " + ampm;

  $("#clock").text(currentTimeString);


  // $('.container').hide();
  // $('.btn').click(function() {
  //   $('.container').hide();
  //   $('#'+this.id.split('-')[1]+'_container').show();
// });
}