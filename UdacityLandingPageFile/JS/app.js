/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navBarList = document.getElementById('navbar__list');

const sections = document.querySelectorAll("section"); 


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
// This will fetch all the sections and create an array
sections.forEach(section => {
    var li = document.createElement('li');
    li.className ='navbar__menu menu__link';
    li.setAttribute('href', '#' + section.id);
    li.setAttribute('id', section.id);
          //About button text
    var li_aboutText = document.createTextNode(section.id);
         //Appending text to button
    li.appendChild(li_aboutText);
         //Add to HTMl
    navBarList.appendChild(li);
    console.log(navBarList)
})

// Scroll to section on link click
var section = document.querySelectorAll('section');

var optionsSection = {
       
};

function scrollToSection(observerSection, event) {
    observerSection = document.querySelectorAll("section");
    event = new IntersectionObserver(function(entries, observerSection){
        entries.forEach(entry => {
               if(entry.isIntersecting){
                      document.querySelectorAll('section').classList.add('your-active-class')
               } else {
                      documentquerySelectorAll('section').classList.remove('your-active-class')
               };
        });
 }, optionsSection);
 
 observerSection.observe(section);
}
var clickEvent = document.getElementsByTagName('section').addEventListener('click', scrollToSection)