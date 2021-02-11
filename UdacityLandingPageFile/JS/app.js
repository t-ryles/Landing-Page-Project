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



// function liClicked() {
//        console.log('clicked');
// };
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
sections.forEach(section => {
       var li = document.createElement('li');
       li.className ='navbar__menu menu__link';
       li.setAttribute('href', '#' + section.id);
       li.setAttribute('id', 'menu_' + section.id);
             //About button text
       var li_aboutText = document.createTextNode(section.id);
            //Appending text to button
       li.appendChild(li_aboutText);
            //Add to HTMl
       navBarList.appendChild(li);
   })

// Add class 'active' to section when near top of viewport
var observerSections = document.querySelectorAll('section');
const options = {};

const observer = new IntersectionObserver(function(entries, observer){
       entries.forEach(entry => {
              entry.target.classList.add('your-active-class');
              if (!entry.isIntersecting){
                     entry.target.classList.remove('your-active-class');
              }
             })

}, options);

observerSections.forEach(observerSection => {
       observer.observe(observerSection);
});

//Scroll to anchor ID using scrollTO event
sections.forEach(section => {
       section.setAttribute('href', '#' + section.id);
})


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
const listItem = document.querySelectorAll('li');


listItem.forEach(function(items){
       items.addEventListener('click', onClick);
       // var itemId = items.id;
       // function onClick() {
       //        document.getElementsByTagName(itemId).classList.add('active-section');
       //   }
       console.log(items);
});

function onClick() {
     console.log();
};


// Scroll to section on link click