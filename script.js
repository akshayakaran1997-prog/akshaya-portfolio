
// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// PROJECT FILTERING

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    // Remove active class from all buttons
    filterButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    // Activate selected button
    button.classList.add("active");

    const selectedFilter = button.dataset.filter;

    // Display matching projects
    projectCards.forEach(card => {

      const category = card.dataset.category;

      if (
        selectedFilter === "all" ||
        category === selectedFilter
      ) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }

    });

  });

});
