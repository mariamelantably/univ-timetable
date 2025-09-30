var i;
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".topnav a")
const navHeight = document.querySelector(".topnav").offsetHeight
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

window.addEventListener("scroll", () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - navHeight) {
      current = section.getAttribute("id"); } 
  });
  
  if (current == ""){
    const link = document.querySelector(".topnav a")
    link.classList.add("active")
  }
  else{
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") == "#" + current) {
        link.classList.add("active");
      }
    });
  };
});

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);