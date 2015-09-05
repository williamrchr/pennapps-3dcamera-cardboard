var videol = document.querySelector("#videoElement");
var videor = document.querySelector("#videoElement2");

var buttonl = document.getElementById("btnLeft");
var buttonr = document.getElementById("btnRight");

buttonl.onclick = chooseSide;
buttonr.onclick = chooseSide;
 
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

function chooseSide(event) {
    if(navigator.getUserMedia && event.target == buttonl) {
      navigator.getUserMedia({video: true}, handleLeft, videoError);
    } else if(navigator.getUserMedia && event.target == buttonr) {
      navigator.getUserMedia({video: true}, handleRight, videoError);
    }
}
 
function handleLeft(stream) {
    videol.src = window.URL.createObjectURL(stream);
}

function handleRight(stream) {
    videor.src = window.URL.createObjectURL(stream);
}
 
function videoError(e) {
    // do something
}