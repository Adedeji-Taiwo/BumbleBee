//carousels
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {
      slideIndex = 1
    }   
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    } 
  
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}




var slideIndexArrow = 1;
showSlidesArrow(slideIndexArrow);

// Next/previous controls
function plusSlides(n) {
  showSlidesArrow(slideIndexArrow += n);
}

// Thumbnail image controls (carousels)
function currentSlide(n) {
  showSlidesArrow(slideIndexArrow = n);
}

function showSlidesArrow(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {slideIndexArrow = 1}
  if (n < 1) {slideIndexArrow = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
 
  slides[slideIndexArrow-1].style.display = "block";
}









// get the element to animate
var element = document.getElementById('stat');
var elementHeight = element.clientHeight;

// listen for scroll event and call animate function
document.addEventListener('scroll', animate);

// check if element is in view
function inView() {
  // get window height
  var windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  var scrollY = window.scrollY || window.pageYOffset;
  
  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  var scrollPosition = scrollY + windowHeight;
  // get element position (distance from the top of the page to the bottom of the element)
  var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;
  
  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition > elementPosition) {
    return true;
  }
  
  return false;
}

// animate element when it is in view
function animate() {
  // is element in view?
  if (inView()) {
      // element is in view, add class to element
       //stat card counter
const counters = document.querySelectorAll('.count');
const speed = 170;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = parseInt(counter.getAttribute('data-target'));
    const count = parseInt(counter.innerText);
    const increment = Math.trunc(target / speed);

    if (count < target) {
      counter.innerText = `${count + increment}+`;
      setTimeout(updateCount, 1);
    } else {
      (target >= 800) ?
      counter.innerText = `${target}+`:  counter.innerText = `${target}k+`;
    }
  };
  updateCount();
});

  }
}







