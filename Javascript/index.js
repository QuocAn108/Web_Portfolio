function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");
  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}
window.onscroll = function () {
  headerShadow();
};
function headerShadow() {
  const navHeader = document.getElementById("header");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}
var typingEffect = new Typed(".typedText", {
  strings: [".NET Developer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});
sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 50 });
sr.reveal(".featured-text-info", { delay: 100 });
sr.reveal(".featured-text-btn", { delay: 100 });
sr.reveal(".social_icons", { delay: 100 });
sr.reveal(".featured-image", { delay: 150 });

sr.reveal(".project-box", { interval: 100 });
sr.reveal(".top-header", {});

const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srLeft.reveal(".about-info", { delay: 50 });
srLeft.reveal(".contact-info", { delay: 50 });
const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srRight.reveal(".skills-box", { delay: 50 });
srRight.reveal(".form-control", { delay: 50 });

const sections = document.querySelectorAll("section[id]");
function scrollActive() {
  const scrollY = window.scrollY;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
const scrollButton = document.getElementById("scrollButton");
const scrollIcon = scrollButton.querySelector("i");

window.onscroll = function () {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    scrollButton.classList.add("show");
  } else {
    scrollButton.classList.remove("show");
  }

  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
    scrollIcon.className = "uil uil-arrow-up";
  } else {
    scrollIcon.className = "uil uil-arrow-down";
  }
};

scrollButton.addEventListener("click", function () {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }
});
document.querySelector(".blue-btn").addEventListener("click", function () {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});
window.addEventListener("scroll", scrollActive);
let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("theme-switch");

const enableDarkmode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
};

const disableDarkmode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", null);
};

if (darkmode === "active") enableDarkmode();

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});
