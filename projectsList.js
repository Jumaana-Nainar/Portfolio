//Data for all projects cards on projects page
const projectsDetails = [
  {
    title: "Formula Snail",
    image: "../images/Formula Snail.JPG",
    imagePosition: "top",
    description: "Rollercoaster-style toy with a torsion-spring-propelled snail figurine",
    link: "../projects/formula-snail",
    category: ["Mechanical", "Team"]
  },
  {
    title: "Age of Adventure",
    image: "../images/AoAcard.png",
    imagePosition: "bottom",
    description: "Choose-your-own-adventure web-based video game utilizing object-oriented programming",
    link: "../projects/age-of-adventure",
    category: ["Web-dev", "Team"]
  },
  {
    title: "Portfolio Website",
    image: "../images/websiteCard.png",
    imagePosition: "top",
    description: "Custom-designed and developed website outlining who I am and my work",
    link: "../projects/portfolio-website",
    category: ["Web-dev", "Individual"]
  },
  {
    title: "Holiday Market Sales Venture",
    image: "../images/sale.jpg",
    imagePosition: "top",
    description: "Pop-up shop to sell handmade jewelery at a local holiday market",
    link: "../projects/holiday-market-venture",
    category: ["Entrepreneurship", "Individual"]
  }
];

//Generating cards
const displayDetails = document.getElementById("projects-container");

projectsDetails.forEach(project => {
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

  displayDetails.appendChild(card);
});