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
})

// Scroll to section on link click
var observerSections = document.querySelectorAll('section');
const options = {};

const observer = new IntersectionObserver(function(entries, observer){
       entries.forEach(entry => {
             if(entry.isIntersecting){
              entry.target.classList.add('your-active-class')};
              console.log(entry.target);
             })

}, options);

observerSections.forEach(observerSection => {
       observer.observe(observerSection);
});


/*  Intersection Observer

--Selecting the area for the function to watch--
       -Watching one section
const sectionOne = document.querySelector('.section1');
       -Watching all the sections
const section = document.querySelectorAll('section');

--Setting object for options.
const options = {};
       --There are three optins:
       root: (default is null and the VP, optional to set)
       threshold: 0-1 scale (Default is 0)
       rootMargin: (Works just like regular margin in CSS, has to have px or % value)

--Creating the observer--
const observer = new Intersectionobserver(callback, options);

--Callback is going to be a function.
--The funstion is going to call two things(function(entries, observer))

const observer = new Intersectionobserver(function(entries, observer){
       --function goes here--
}, options);

--For each entrie we want to do something.

const observer = new Intersectionobserver(function(entries, observer){
       entries.forEach(entry => {
              console.log(entry);
       })
}, options);

--After creating the observer we have to use it

const observer = new Intersectionobserver(function(entries, observer){
       entries.forEach(entry => {
              console.log(entry); //Adding .target will just give info about the target.
       })
}, options);

--Tell the observer to observe sectionOne
observer.observe(sectionOne);

--Is intersecting will fire when the element being observerd goes on or off the page.

--Editing to watch all the sections

const observer = new Intersectionobserver(function(entries, observer){
       entries.forEach(entry => { 
              if (!entry.isIntersecting){ //If the section is not intersecting ignore code
                     return;
              }
              console.log(entry.target); //Adding .target will just give info about the target.
              entry.target.classList.toggle('className');
              observer.unobserve(entry.target); //To stop observer the target
       })
}, options);

observer.observe(section);
--Will produce error, Sections is a Node list. Can't have one observer on the whole list.

--Creating a forEach loop to combat the issue

sections.forEach(section => {
       observer.observe(section);
});

--For each section inside of the sectons, observer that section.
*/