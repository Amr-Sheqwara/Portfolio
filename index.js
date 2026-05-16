// ===== Terminal Typing effect =====

const sysLabel = document.querySelector(".sys-label");
const sysText = "SYS::PORTFOLIO_INIT // ONLINE";
let i = 0;

function typeWriter() {
  if (i < sysText.length) {
    sysLabel.innerHTML += sysText.charAt(i);
    i++;
    setTimeout(typeWriter, 50); // Speed of typing in ms
  }
}

// ===== LOGO DECRYPTION EFFECT =====

const logoText = document.getElementById("logo");
const finalWord = "AMS";
const digits = "0$@#&!?1";

function decryptEffect() {
  let iteration = 0;

  const interval = setInterval(() => {
    logoText.innerHTML = finalWord
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return finalWord[index];
        }

        return digits[Math.floor(Math.random() * 10)];
      })
      .join("");

    if (iteration >= finalWord.length) {
      clearInterval(interval);
    }

    iteration += 1 / 12;
  }, 60);
}

window.onload = () => {
  typeWriter();
  decryptEffect();
};

// ===== Scroll Reveal Animations =====

const sections = document.querySelectorAll(".section, .contact-block");

sections.forEach((sec) => sec.classList.add("hidden-scroll"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-scroll");
      }
    });
  },
  { threshold: 0.5 },
);

sections.forEach((sec) => observer.observe(sec));

const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const sideDrawer = document.getElementById("side-drawer");

const views = {
  generator: document.getElementById("view-generator"),
  reviewer: document.getElementById("view-reviewer"),
  about: document.getElementById("view-about"),
};

menuBtn.onclick = () => sideDrawer.classList.add("open");
closeBtn.onclick = () => sideDrawer.classList.remove("open");

function switchView(target) {
  Object.values(views).forEach((v) => (v.style.display = "none"));
  views[target].style.display = "block";
  sideDrawer.classList.remove("open");
}
