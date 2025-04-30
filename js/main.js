// Initialize AOS Library and other features
document.addEventListener("DOMContentLoaded", function () {
  // AOS Initialization
  AOS.init({
    duration: 1000,
    once: true,
  });

  // Back to Top Button Logic
  const backToTopButton = document.getElementById("backToTopBtn");

  if (backToTopButton) {
    window.addEventListener("scroll", function () {
      backToTopButton.style.display =
        (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300)
          ? "block"
          : "none";
    });

    backToTopButton.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // Dark Mode Toggle Logic
  const darkModeToggle = document.getElementById("darkModeToggle");
  const body = document.body;

  // Check saved dark mode preference
  const savedMode = localStorage.getItem("darkMode");
  if (savedMode === "enabled") {
    body.classList.add("dark-mode");
    darkModeToggle.checked = true;
  }

  darkModeToggle.addEventListener("change", function () {
    if (darkModeToggle.checked) {
      body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "enabled");
    } else {
      body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "disabled");
    }
  });
})
