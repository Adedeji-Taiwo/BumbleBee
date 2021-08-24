const toggle = document.querySelector("#toggle");
const menus = document.querySelector("#menus");
const menus1 = document.querySelector("#menus1");
const menus2 = document.querySelector("#menus2");


//toggle hamburger menu
const toggleButton = (keyPress) => {
  const main = document.getElementById("main");

    if (keyPress == 1) {
        toggle.setAttribute("onclick", "toggleButton(0)") ;
        menus.classList = "";
        menus1.classList = "";
        menus2.classList = "";
        document.querySelector(".svg2").style.display = "block";
        document.querySelector(".svg1").style.display = "none";

       
        main.setAttribute("class", "push-down");


      }
    else {
        toggle.setAttribute("onclick", "toggleButton(1)") ;
        menus.classList = "hidden";
        menus1.classList = "hidden";
        menus2.classList = "hidden";
        document.querySelector(".svg1").style.display = "block";
        document.querySelector(".svg2").style.display = "none";


        main.setAttribute("class", "");
    }
}


//hide menu while navigating within page
hideMenu = () => {
  menus.classList = "hidden";
  menus1.classList = "hidden";
  menus2.classList = "hidden";
  document.querySelector(".svg1").style.display = "block";
  document.querySelector(".svg2").style.display = "none";

}



//Mediaquery for sticky header
const showMenu = (x) => {


    if (x.matches) {
        menus.classList = "hidden";
        menus1.classList = "hidden";
        menus2.classList = "hidden";

        
        
    }
    else {
        menus.classList = "";
        menus1.classList = "";
        menus2.classList = "";

       
    }
}

let x = window.matchMedia("(max-width: 768px)");
showMenu(x)
x.addListener(showMenu);



window.onscroll = function() {
    myFunction();
}

var navbar = document.getElementById("header");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    }
    else {
        navbar.classList.remove("sticky");
    }
}





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



let today = new Date();
let year = today.getFullYear();
document.querySelector(".year").innerHTML = year;



//Animated Arrows
proceed = () => {
  const arrow = document.querySelectorAll("#arrow");

  let id = null;
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 30);
  function frame() {
    if (pos == 20) {
      clearInterval(id);
    } else {
      pos++;
      arrow.forEach(function(arrow) {
        arrow.style.left = `${pos}px`;
      })
    }
  }
}




 
/* Optional Javascript to close the radio button version by clicking it again */
//help page accordion
var myRadios = document.getElementsByName('tabs2');
  var setCheck;
  var y = 0;
  for(y = 0; y < myRadios.length; y++){
      myRadios[y].onclick = function(){
          if(setCheck != this){
               setCheck = this;
          }else{
              this.checked = false;
              setCheck = null;
      }
      };
  }







  //horizonatl scroll
  // When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}



 

/*
//stat in viewport
var observer = new IntersectionObserver(function(entries) {
	// isIntersecting is true when element and viewport are overlapping
	// isIntersecting is false when element and viewport don't overlap
	if(entries[0].isIntersecting === true)
		console.log('Element has just become visible in screen');
}, { threshold: [0.5] });

observer.observe(document.querySelector("#stat"));*/




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
