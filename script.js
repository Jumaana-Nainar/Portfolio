//Data for featured projects cards on home page
const projects = [

  {
    title: "LEGO Goose Piece",
    image: "images/finalGooseSolo.jpg",
    imagePosition: "top",
    description: "Custom-designed and 3D-printed LEGO-style piece in the shape of a Canadian Goose",
    link: "LEGO-goose.html",
    category: ["Mechanical", "Individual"]
  },

  {
    title: "Formula Snail",
    image: "images/Formula Snail.JPG",
    imagePosition: "top",
    description: "Rollercoaster-style toy with a torsion-spring-propelled snail figurine",
    link: "formula-snail.html",
    category: ["Mechanical", "Team"]
  },
  {
    title: "Age of Adventure",
    image: "images/AoAcard.png",
    imagePosition: "bottom",
    description: "Choose-your-own-adventure web-based video game utilizing object-oriented programming",
    link: "age-of-adventure.html",
    category: ["Web-dev", "Team"]
  },
];

//Generating cards
const display = document.getElementById("highlighted-projects-container");
if (display) {
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

        <div class="category-tag-container">
          ${project.category
        .map(category => `<span class="${category}-tag">${category}</span>`)
        .join("")}
      </div>
    
  `;

    display.appendChild(card);
  });
}