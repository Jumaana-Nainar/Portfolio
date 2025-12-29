//Loading completion check//
console.log("Portfolio loaded successfully");
//Data for featured projects cards on home page
const projects = [
  {
    title: "Formula Snail",
    image: "images/Formula Snail.JPG",
    imagePosition: "top",
    description: "Group torsion-spring rollercoaster-style toy design project",
    skills: ["SolidWorks", "AutoCAD"],
    link: ""
  },
{
    title: "Age of Adventure",
    image: "images/AoAcard.png",
    imagePosition: "bottom",
    description: "Choose-your-own-adventure web-based video game utilizing object-oriented programming",
    skills: ["HTML", "CSS", "JavaScript"],
    link: ""
  },
  {
    title: "This Website!",
    image: "images/websiteCard.png",
    imagePosition: "top",
    description: "Custom-designed and developed website outlining who I am and my work",
    skills: ["HTML", "CSS", "JavaScript"],
    link:""
  }
];


const display = document.getElementById("highlighted-projects-container");

projects.forEach(project => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <a href="${project.link}" class="card-link"></a>
      <img 
        src="${project.image}" 
        class="card-image"
        style="object-position: ${project.imagePosition};"
      >

      <div class="card-text">
        <h4>${project.title}</h4>
        <p class="base-text" style="color: var(--secondary-color);">
          ${project.description}
        </p>

        <div class="skill-tag-container">
          ${project.skills
            .map(skill => `<span class="skill-tag">${skill}</span>`)
            .join("")}
        </div>
      </div>
    
  `;

  display.appendChild(card);
});