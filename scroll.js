/* ===== Scroll Reveal ===== */
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach((section) => observer.observe(section));

/* ===== Hero Micro Parallax ===== */
const heroContent = document.querySelector(".hero-content");

window.addEventListener("scroll", () => {
  if (!heroContent) return;
  const offset = window.scrollY * 0.15;
  heroContent.style.transform = `translateY(${offset}px)`;
});
