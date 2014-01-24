$(document).ready(function() {
  setInterval(function() {
    var currentDate = new Date();
    updateAnalogClock(currentDate);
    updateDigitalClock(currentDate);
  }, 1000);
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
  var mins = currentDate.getMinutes();
  var secs = currentDate.getSeconds();

  var hdegree = hours * 30 + (mins / 2);
  var mdegree = mins * 6;
  var sdegree = secs * 6;

  $(".hand").css("opacity","1");

  updateRotation("hour", hdegree);
  updateRotation("minute", mdegree);
  updateRotation("second", sdegree);
}

function updateDigitalClock(currentDate) {
  var currentHr = currentDate.getHours();
  var currentMin = currentDate.getMinutes();
  var currentSecs = currentDate.getSeconds();

  currentMin = (currentMin < 10 ? "0" : "") + currentMin;
  currentSecs = (currentSecs < 10 ? "0" : "") + currentSecs;

  var timeOfDay = (currentHr < 12) ? "AM" : "PM";
  currentHr = (currentHr > 12) ? currentHr - 12 : currentHr;
  currentHr = (currentHr == 0) ? 12 : currentHr;

  var currentTimeString = currentHr + ":" + currentMin + ":" + currentSecs + " " + timeOfDay;

  document.getElementById("clock").firstChild.nodeValue = currentTimeString;
}