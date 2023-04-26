var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);

  // remueve ambas clases activas antes de agregar una nueva
  var leftButton = document.getElementsByClassName("button")[0];
  leftButton.classList.remove("active-left");

  var rightButton = document.getElementsByClassName("button")[1];
  rightButton.classList.remove("active-right");

  // agrega la clase activa correspondiente
  if (n === 1) {
    leftButton.classList.add("active-left");
  } else if (n === 2) {
    rightButton.classList.add("active-right");
  }
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

// Agrega la clase "active-left" al botón de la izquierda al cargar la página
var leftButton = document.getElementsByClassName("button")[0];
leftButton.classList.add("active-left");


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("button");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Para el segundo grafico la posicion de los botones está invertida por lo que a los botones izquierdos se les
// otorgará el active-right y viceversa.

var slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
  
  var leftButton = document.getElementsByClassName("button2")[0];
  leftButton.classList.remove("active-right");

  var rightButton = document.getElementsByClassName("button2")[1];
  rightButton.classList.remove("active-left");

  if (n === 1) {
    leftButton.classList.add("active-right");
  } else if (n === 2) {
    rightButton.classList.add("active-left");
  }
}

function showSlides2(n) {
  var i;
  var slides2 = document.getElementsByClassName("mySlides2");
  if (n > slides2.length) {slideIndex2 = 1}    
  if (n < 1) {slideIndex2 = slides2.length}
  for (i = 0; i < slides2.length; i++) {
      slides2[i].style.display = "none";  
  }
  slides2[slideIndex2-1].style.display = "block";  
}

var leftButton = document.getElementsByClassName("button2")[0];
leftButton.classList.add("active-right");


function showSlides2(n) {
  var i;
  var slides2 = document.getElementsByClassName("mySlides2");
  var dots2 = document.getElementsByClassName("button2");
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  for (i = 0; i < dots2.length; i++) {
    dots2[i].className = dots2[i].className.replace(" active", "");
  }
  slides2[slideIndex2 - 1].style.display = "block";
  dots2[slideIndex2 - 1].className += " active";
}