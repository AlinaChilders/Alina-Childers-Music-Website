const sections = document.querySelectorAll(".panel");
const navLinks = document.querySelectorAll("nav a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const link = document.querySelector(`nav a[href="#${id}"]`);

      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        navLinks.forEach((a) => a.classList.remove("active"));
        link.classList.add("active");
      }
    });
  },
  { threshold: 0.5 }
);

sections.forEach((section) => observer.observe(section));
