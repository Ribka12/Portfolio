document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    {
      title: "Netflix Clone",
      desc: "React app with real movie APIs, trailers, and modern UI.",
      img: "./assets/img/portfolio/netflix.jpeg",
      github: "https://github.com/Ribka12/NetflixClone-2025.git",
      live: "https://ribka12.github.io/NetflixClone-2025/",
      filter: "filter-product",
    },
    {
      title: "Amazon Clone",
      desc: "Full-stack e-commerce with auth, cart, and Stripe payments.",
      img: "./assets/img/portfolio/amazon.jpeg",
      github: "https://github.com/Ribka12/AmazonClone-2025.git",
      live: "https://amazonclone-2026.netlify.app/",
      filter: "filter-product",
    },
    {
      title: "Evangadi Forum",
      desc: "Full-stack Q&A platform with JWT authentication and MySQL.",
      img: "./assets/img/portfolio/evangadi.jpeg",
      github: "https://github.com/Ribka12/EvangadiForum-Individual.git",
      live: "https://evangadiforum.ribkamengiste.com/",
      filter: "filter-app",
    },
    {
      title: "Apple Clone",
      desc: "Pixel-perfect Apple homepage replica using React + Vite.",
      img: "./assets/img/portfolio/apple.jpg",
      github: "https://github.com/Ribka12/Applepage-Replica.git",
      live: "https://ribka12.github.io/Applepage-Replica/",
      filter: "filter-product",
    },
    {
      title: "Calculator",
      desc: "Responsive calculator with clean JS logic.",
      img: "./assets/img/portfolio/calc (1) (1).png",
      github: "https://github.com/Ribka12/CodeAlpha_Calculator.git",
      live: "https://ribka12.github.io/CodeAlpha_Calculator/",
      filter: "filter-app",
    },
    {
      title: "Portfolio Profile",
      desc: "Early portfolio showing growth and structure.",
      img: "./assets/img/portfolio/pp.png",
      github: "https://github.com/Ribka12/Portfolio_Profile.git",
      live: "https://ribka12.github.io/Portfolio_Profile/",
      filter: "filter-product",
    },
  ];

  const items = document.querySelectorAll(".portfolio-item");

  projects.forEach((project, i) => {
    if (!items[i]) return;
    const item = items[i];

    item.className = `col-lg-4 col-md-6 portfolio-item isotope-item ${project.filter}`;
    item.querySelector("img").src = project.img;
    item.querySelector("h4").textContent = project.title;
    item.querySelector("p").textContent = project.desc;

    const link = item.querySelector(".details-link");
    link.href = project.live;
    link.title = "Live Demo";

    const git = document.createElement("a");
    git.href = project.github;
    git.target = "_blank";
    git.innerHTML = `<i class="bi bi-github"></i>`;
    git.style.marginLeft = "10px";
    item.querySelector(".portfolio-info").appendChild(git);
  });
});
