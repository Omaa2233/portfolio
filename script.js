function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
  let prevScrollpos = window.pageYOffset;
    let navBar = document.getElementById("desktop-nav");

    window.onscroll = function() {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            // Scrolling up, reveal the navbar
            navBar.style.top = "0";
        } else {
            // Scrolling down, hide the navbar
            navBar.style.top = "-17vh";
        }
        prevScrollpos = currentScrollPos;
    }
