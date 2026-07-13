// Mobile Menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  if (menu && icon) {
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
}

// Sticky Navbar Hide/Show
let prevScrollPos = window.pageYOffset;
const navBar = document.getElementById("desktop-nav");

window.addEventListener("scroll", () => {
  if (!navBar) return;

  const currentScrollPos = window.pageYOffset;

  if (currentScrollPos < 50 || prevScrollPos > currentScrollPos) {
    navBar.style.top = "0";
  } else {
    navBar.style.top = "-100px";
  }

  prevScrollPos = currentScrollPos;

  // Active nav link
  document.querySelectorAll("section").forEach(section => {
    const top = window.scrollY;
    const offset = section.offsetTop - 120;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      document.querySelectorAll(".nav-links a").forEach(link => {
        link.classList.remove("active");
        const active = document.querySelector('.nav-links a[href="#' + id + '"]');
        if (active) active.classList.add("active");
      });
    }
  });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll("section").forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});

// Typing effect
const typingElement = document.querySelector(".section__text__p2");
const text = "Software Test Engineer | AI/LLM Analyst | Full Stack Developer";
let i = 0;

function typeWriter() {
  if (!typingElement) return;
  if (i < text.length) {
    typingElement.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 60);
  }
}

window.addEventListener("load", () => {
  if (typingElement) {
    typingElement.textContent = "";
    typeWriter();
  }
});

// Back to top button
const topBtn = document.createElement("button");
topBtn.innerHTML = "↑";
topBtn.id = "backToTop";
document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
bottom:25px;
right:25px;
padding:12px 16px;
font-size:20px;
display:none;
cursor:pointer;
border:none;
border-radius:50%;
`;

window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 400 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
