document.getElementById("linked-in-button").onclick = function() {
  window.location.href="https://www.linkedin.com/in/anshul-patel-836072143"
}


document.getElementById("github-button").onclick = function() {
  window.location.href="https://github.com/AnshulPatel123"
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}