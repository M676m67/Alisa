function reveal() {
  const elements = document.querySelectorAll(".fade");
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if (position < screenHeight - 100) el.classList.add("show");
  });
}

window.addEventListener("load", reveal);
window.addEventListener("scroll", reveal);

function toggleMenu() {
  const nav = document.getElementById("nav-links");
  const icon = document.getElementById("menu-icon");
  
  nav.classList.toggle("active");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");
}

document.querySelectorAll("#nav-links a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetID = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetID);
    targetSection.scrollIntoView({ behavior: "smooth" });
    
    const nav = document.getElementById("nav-links");
    const icon = document.getElementById("menu-icon");
    
    nav.classList.remove("active");
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-xmark");
  });
});
