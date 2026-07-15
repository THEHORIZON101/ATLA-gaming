const links = document.querySelectorAll('a[href^="#"]');

links.forEach((link) => {
  link.addEventListener("click", () => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) target.setAttribute("tabindex", "-1");
  });
});

const cards = document.querySelectorAll(".project-card, .project-featured");

if (!("IntersectionObserver" in window)) {
  cards.forEach((card) => card.classList.add("visible"));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  cards.forEach((card) => observer.observe(card));
}
