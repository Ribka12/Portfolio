document.addEventListener("DOMContentLoaded", () => {
  const skillsRow = document.querySelector(
    ".skills-content .col-lg-6:last-child",
  );
  if (!skillsRow) return;

  const extraSkills = [
    { name: "Node.js", value: 70 },
    { name: "Express.js", value: 65 },
    { name: "MongoDB", value: 70 },
    { name: "JWT Auth", value: 75 },
    { name: "Firebase", value: 70 },
    { name: "Stripe API", value: 65 },
    { name: "REST APIs", value: 80 },
    { name: "Three.js", value: 55 },
  ];

  extraSkills.forEach((skill) => {
    skillsRow.insertAdjacentHTML(
      "beforeend",
      `
      <div class="progress">
        <span class="skill">
          <span>${skill.name}</span>
          <i class="val">${skill.value}%</i>
        </span>
        <div class="progress-bar-wrap">
          <div class="progress-bar" role="progressbar"
            aria-valuenow="${skill.value}" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
    `,
    );
  });
});
