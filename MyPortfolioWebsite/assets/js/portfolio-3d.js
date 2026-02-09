document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".portfolio-content").forEach((card) => {
    let bounds;

    card.addEventListener("mouseenter", () => {
      bounds = card.getBoundingClientRect();
    });

    card.addEventListener("mousemove", (e) => {
      const x = e.clientX - bounds.left;
      const y = e.clientY - bounds.top;
      card.style.transform = `
        perspective(900px)
        rotateX(${(y / bounds.height - 0.5) * 12}deg)
        rotateY(${(x / bounds.width - 0.5) * -12}deg)
        scale(1.05)
      `;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "none";
    });
  });
});
