const sections = document.querySelectorAll("section");
  const showOnScroll = () => {
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        sec.classList.add("show");
      }
    });
  };
  window.addEventListener("scroll", showOnScroll);
  showOnScroll();
  document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "smooth"
      });
    });
  });