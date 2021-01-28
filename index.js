var burger = document.querySelector(".burger");
var sidenav = document.querySelector(".nav_link");

burger.addEventListener("click", (e) => {
    burger.classList.toggle("open")
    sidenav.classList.toggle("appear")
})