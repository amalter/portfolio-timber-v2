export function navMain() {
  const hamIcon = document.getElementById("ham-icon");
  const navMain = document.getElementById("nav-main");
  const closeBtn = document.getElementById("close-btn");

  // Check if navMain exists before attaching event listeners
  if (navMain && closeBtn) {
    // Handle click and touchstart events for hamburger icon
    function toggleNav() {
      const computedStyle = window.getComputedStyle(navMain);
      const currentRight = computedStyle.getPropertyValue("right");

      if (currentRight === "0px") {
        navMain.style.right = "-100%";
      } else {
        navMain.style.right = "0";
      }
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
      navMain.style.right = "-100%";
    });

    // Handle keyboard accessibility for closeBtn
    closeBtn.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        // Trigger the same action as the click event for keyboard users
        navMain.style.right = "-100%";
      }
    });
  }
}
