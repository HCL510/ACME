var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#polina button");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Paused";
}

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed 
vid.pause();
// to capture IE10
vidFade();
}); 

pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "Pause";
  } else {
    vid.pause();
    pauseButton.innerHTML = "Paused";
  }
})

(function() {


  var inputs = document.createElement('input');
  
  var supports = {};
  
  supports.autofocus   = 'autofocus' in inputs;
  supports.required    = 'required' in inputs;
  supports.placeholder = 'placeholder' in inputs;

  var send = document.getElementById('contact-submit');
  if(send) {
    send.onclick = function () {
      this.innerHTML = '...Sending';
    }
  }

})();
