//variables assignation
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


//fixed positioning for header 
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

 


//Animated Arrows on hover
proceed = () => {
  const arrows = document.querySelectorAll("span#arrow");
  arrows.forEach(function(arrow) {
    arrow.classList.add("arrows");
  })
}


retreat = () => {
  const arrows = document.querySelectorAll("span#arrow");
   arrows.forEach(function(arrow) {
     arrow.classList.remove("arrows");
})

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
//hide chatbox at footer (back to top button)
var observer = new IntersectionObserver(function(entries) {
	// isIntersecting is true when element and viewport are overlapping
	// isIntersecting is false when element and viewport don't overlap
	if(entries[0].isIntersecting === true)
		document.querySelector("#chatBox").style.opacity = "0";
}, { threshold: [0.2] });

observer.observe(document.querySelector("#top"));
*/



