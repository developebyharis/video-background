// var Video = document.getElementById("myVideo");
// var btn = document.getElementById("myBtn");
// function myFunction() {
//     if (Video.paused) {
//         Video.play();
//         btn.innerHTML = "Pause";
//     } else {
//         Video.pause();
//         btn.innerHTML = "PLay";
//     }
// }

var Video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");
function myFunction() {
    if (Video.paused) {
    Video.play();
    btn.innerHTML = "Pause";

} else {
    Video.pause();
    btn.innerHTML = "Play";
  }
}