let timeout;

function myFunction() {
  var vid = document.getElementById("myVideo");
  var surpriseText = document.getElementById("surprise-enabler");

  surpriseText.style.display = "none";
  vid.style.display = "block";
  vid.play();

  timeout = setTimeout(alertFunc, 1000);
}

function alertFunc() {
  alert("Well well well looks like someone got rickrolled!");
}
