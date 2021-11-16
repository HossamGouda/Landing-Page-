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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
 * 
*/
let ul = document.getElementById("navbar__list");
let mySec=document.querySelectorAll("main section");

/**
 * End Global Variables

 * Begin Main Functions
 * 
*/

// build the nav and adding scrolling effect when clicking the section

function itemsGenerator() {
    for (let i = 0; i < mySec.length;i++){
        let li=document.createElement('li');                 // to creat the li element 
        li.textContent = "section"+[i+1];                     // to put the Name for sections  
        li.addEventListener("click",()=>{
            mySec[i].scrollIntoView({ behavior: "smooth" })   // this line to add the smoth scroll 
        })
        li.setAttribute('style', 'float:left; padding-right:20px; ')    // moving the Nav bar to float in the left of the page 
        li.setAttribute('class','menu__link')                  // to add the same class mentioned in the CSS file
        ul.appendChild(li);                                     // adding the li elements to the ul element 
    }
}

// creating the function to get the hight of our section and compare it with the viewport for the use 

 function clientView() {
     let li = document.getElementsByClassName('menu__link');        // creating li to use it in the loop 
     for(let x=0;x<mySec.length;x++){
         let rect=mySec[x].getBoundingClientRect();                 // loop to measure the sections hight 
         if (rect.top > 0 && rect.top<250) {                        // if to check our section in the user view 
             //start adding class active for Nav and section
             mySec[x].classList.add("your-active-class")
             li[x].classList.add("your-active-class")}      // added a style in css file to apply in case of the nav is active

             //start remove class active for Nav and section
         else{
             mySec[x].classList.remove("your-active-class")
             li[x].classList.remove("your-active-class")
        }
         }   
            
 }

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
itemsGenerator();      // calling the li link generator function 
// Set sections as active
window.addEventListener("scroll", clientView); // adding the eventlistener to the window and excuting the callback function inside


