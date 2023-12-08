export function navMain() {
  const hamIcon = document.getElementById("ham-icon");
  const navMain = document.getElementById("nav-main");
  const closeBtn = document.getElementById("close-btn");

  // Check if navMain exists before attaching event listeners
  if (navMain && closeBtn) {
    // Handle click and touchstart events for hamburger icon
    function toggleNav() {
      // Toggle the "show" class on navMain
      navMain.classList.toggle("show");
    }

    hamIcon.addEventListener("click", toggleNav);
    hamIcon.addEventListener("touchstart", toggleNav);

    // Handle keyboard accessibility for ham-icon
    hamIcon.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        // Trigger the same action as the click event for keyboard users
        toggleNav();
      }
    });

    // Handle click event for close button
    closeBtn.addEventListener("click", function () {
      // Remove the "show" class to hide the navigation
      navMain.classList.remove("show");
    });

    // Handle keyboard accessibility for closeBtn
    closeBtn.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        // Trigger the same action as the click event for keyboard users
        navMain.classList.remove("show");
      }
    });
  }
}
