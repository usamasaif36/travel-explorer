const results = document.getElementById("recommendation-results");

function scrollToRecommendations() {
  document.getElementById("recommendations").scrollIntoView({ behavior: "smooth" });
}

function createCard(title, img1, desc) {
  return `
    <div class="col-md-4">
      <div class="card p-3 h-100">
        <img src="${img1}" class="img-fluid rounded mb-3 destination-img" alt="${title}">
        <h5 class="fw-bold">${title}</h5>
        <p>${desc}</p>
      </div>
    </div>
  `;
}

function showBeaches() {
  results.innerHTML = `
    ${createCard("Bali, Indonesia", "images/bali.jpg", "Golden sands, turquoise waters, and spiritual temples in one island paradise.")}
    ${createCard("Maldives", "images/maldives.jpg", "Overwater villas and endless blue horizons—perfect for relaxation.")}
  `;
}

function showTemples() {
  results.innerHTML = `
    ${createCard("Angkor Wat, Cambodia", "images/angkorwat.jpg", "Discover ancient history and incredible sunrise views at the world’s largest temple.")}
    ${createCard("Taj Mahal, India", "images/tajmahal.jpg", "An architectural wonder and symbol of love located in Agra, India.")}
  `;
}

function showByCountry() {
  results.innerHTML = `
    ${createCard("Japan", "images/japan.jpg", "Experience a seamless blend of futuristic cities, tranquil temples, and stunning cherry blossoms.")}
    ${createCard("Italy", "images/itlay.jpg", "Explore romantic canals in Venice, ancient ruins in Rome, and art-filled streets in Florence.")}
  `;
}
