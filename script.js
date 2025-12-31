// HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("show");

  hamburger.classList.toggle("active", isOpen);
  document.body.classList.toggle("menu-open", isOpen);
  document.documentElement.classList.toggle("menu-open", isOpen);
});


// CLOSE MENU ON NAV LINK CLICK
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    hamburger.classList.remove("active");

    document.body.classList.remove("menu-open");
    document.documentElement.classList.remove("menu-open"); // ✅ html
  });
});


// TYPING EFFECT
const text = ["Creative Developer",  "CSE Student"];
let i = 0, j = 0;
const typing = document.getElementById("typing");

function type() {
  if (j < text[i].length) {
    typing.textContent += text[i][j++];
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1200);
  }
}

function erase() {
  if (j > 0) {
    typing.textContent = text[i].substring(0, --j);
    setTimeout(erase, 60);
  } else {
    i = (i + 1) % text.length;
    setTimeout(type, 400);
  }
}
type();

// FADE ON SCROLL
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => e.isIntersecting && e.target.classList.add("show"));
});
document.querySelectorAll(".fade").forEach(el => observer.observe(el));

// YEAR
document.getElementById("year").textContent = new Date().getFullYear();