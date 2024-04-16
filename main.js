const navMenu = document.getElementById("navmenu");
const hamBurger = document.getElementById("hamburger");
const closeIcon = document.getElementById("closeicon");
const navLinks = document.querySelectorAll(".nav__link");

navLinks.forEach((link) => {
    link.addEventListener("click",()=>{
navMenu.classList.add("hidden");
    })  
});
closeIcon.addEventListener("click",()=>{
    navMenu.classList.add("hidden"); 
});
hamBurger.addEventListener("click", () => {
    navMenu.classList.remove("hidden");
});




    
        
        



