const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navigation")
const bodyEl = document.getElementsByTagName("body")

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})


