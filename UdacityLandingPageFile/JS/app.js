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
const pageHeader = document.getElementsByClassName('page__header');
const navBarMenu = document.getElementsByClassName('navbar__menu');
const navBarList = document.getElementById('navbar__list');
const mainHeader = document.getElementsByClassName('main__hero');
const sectionOne = document.getElementById('section1');
const sectionTwo = document.getElementById('section2');
const sectionThree = document.getElementById('section3');
const sectionFour = document.getElementById('section4');

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
    //Creating About li
var navBar__about = document.createElement('li');
navBar__about.className ='navbar__menu menu__link debug';
navBar__about.setAttribute('href', '#about');
    //About button text
var navBar__aboutText = document.createTextNode('About');
    //Appending text to button
navBar__about.appendChild(navBar__aboutText);
    //Add to HTMl
navBarList.appendChild(navBar__about);

 //Creating Section 1 li
var section_1 = document.createElement('li');
section_1.className ='navbar__menu menu__link debug';
section_1.setAttribute('href', '#section1');
     //About button text
var section_1__aboutText = document.createTextNode('Section 1');
     //Appending text to button
section_1.appendChild(section_1__aboutText);
     //Add to HTMl
navBarList.appendChild(section_1);

 //Creating Secton 2 li
var section_2 = document.createElement('li');
section_2.className ='navbar__menu menu__link debug';
section_2.setAttribute('href', '#section2');
      //About button text
var section_2__aboutText = document.createTextNode('Section 2');
      //Appending text to button
section_2.appendChild(section_2__aboutText);
      //Add to HTMl
navBarList.appendChild(section_2);

 //Creating Secton 3 li
var section_3 = document.createElement('li');
section_3.className ='navbar__menu menu__link debug';
section_3.setAttribute('href', '#section3');
       //About button text
var section_3__aboutText = document.createTextNode('Section 3');
       //Appending text to button
section_3.appendChild(section_3__aboutText);
       //Add to HTMl
navBarList.appendChild(section_3);

 //Creating Secton 4 li
var section_4 = document.createElement('li');
section_4.className ='navbar__menu menu__link debug';
section_4.setAttribute('href', '#section4');
       //About button text
var section_4__aboutText = document.createTextNode('Section 4');
       //Appending text to button
section_4.appendChild(section_4__aboutText);
       //Add to HTMl
navBarList.appendChild(section_4);

// Add class 'active' to section when near top of viewport

//Section 1 active class
var mainSectionOne = document.querySelector('#section1');

var optionsSection1 = {
       threshold: .6,
       rootMargin: '-90px',
};

var observerSection1 = new IntersectionObserver(function(entries, observerSection1){
       entries.forEach(entry => {
              if(entry.isIntersecting){
                     document.getElementById('menu_section1').classList.add('your-class')
              } else {
                     document.getElementById('menu_section1').classList.remove('your-class')
              };
       });
}, optionsSection1);

observerSection1.observe(mainSectionOne);

//Section 2 active class
var mainSectionTwo = document.querySelector('#section2');

var optionsSection2 = {
       rootMargin: '-355px',
};

var observerSection2 = new IntersectionObserver(function(entries, observerSection2){
       entries.forEach(entry => {
              if(entry.isIntersecting){
                     document.getElementById('menu_section2').classList.add('your-class')
              } else {
                     document.getElementById('menu_section2').classList.remove('your-class')
              };
       });
}, optionsSection2);

observerSection2.observe(mainSectionTwo);

//Section 3 active class
var mainSectionThree = document.querySelector('#section3');

var optionsSection3 = {
       rootMargin: '-355px',
};

var observerSection3 = new IntersectionObserver(function(entries, observerSection3){
       entries.forEach(entry => {
              if(entry.isIntersecting){
                     document.getElementById('menu_section3').classList.add('your-class')
              } else {
                     document.getElementById('menu_section3').classList.remove('your-class')
              };
       });
}, optionsSection3);

observerSection3.observe(mainSectionThree);

//Section 4 active class
var mainSectionFour = document.querySelector('#section4');

var optionsSection4 = {
       rootMargin: '-355px',
};

var observerSection4 = new IntersectionObserver(function(entries, observerSection4){
       entries.forEach(entry => {
              if(entry.isIntersecting){
                     document.getElementById('menu_section4').classList.add('your-clas')
              } else {
                     document.getElementById('menu_section4').classList.remove('your-clas')
              };
       });
}, optionsSection4);

observerSection4.observe(mainSectionFour);

// Scroll to anchor ID using scrollTO event
//Adding ID to Secton 1 li element
document.getElementsByTagName("li")[1].setAttribute("id", "menu_section1");
// Scroll to section one event
const clickSection1 = document.getElementById('menu_section1').addEventListener('click', scrollToSectionOne);

function scrollToSectionOne(){
       sectionOne.scrollIntoView(true);
};

//Add ID to Section 2 li element
document.getElementsByTagName("li")[2].setAttribute("id", "menu_section2");
// Scroll to section two event
const clickSection2 = document.getElementById("menu_section2").addEventListener('click', scrollToSectionTwo);

function scrollToSectionTwo(){
       sectionTwo.scrollIntoView(true);
};

//Adding ID to Secton 3 li element
document.getElementsByTagName("li")[3].setAttribute("id", "menu_section3");
// Scroll to section three event
const clickSection3 = document.getElementById('menu_section3').addEventListener('click', scrollToSectionThree);

function scrollToSectionThree(){
       sectionThree.scrollIntoView(true);
};

//Add ID to Section 4 li element
document.getElementsByTagName("li")[4].setAttribute("id", "menu_section4");
// Scroll to section two event
const clickSection4 = document.getElementById("menu_section4").addEventListener('click', scrollToSectionFour);

function scrollToSectionFour(){
       sectionFour.scrollIntoView(true);
};



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Set sections as active