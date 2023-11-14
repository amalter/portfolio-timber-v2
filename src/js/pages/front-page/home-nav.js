export function homeNav() {
  // Get nav items
  const mainNavItems = document.querySelectorAll(".front-page-nav li a");

  // get sections
  const pageSections = document.querySelectorAll(
    "body.front-page .home-section"
  );

  // handle open
  mainNavItems.forEach(function (item) {
    item.addEventListener("click", function (e) {
      openSection(pageSections, e);
    });
  });

  pageSections.forEach(function (section) {
    if (section.id === "portfolio" || section.id === "about") {
      //add class show if hash is detected in browser URL
      if (checkHash() === section.id) {
        section.classList.toggle("show");
      } else {
        section.classList.remove("show");
      }
      // add close section button
      closeSection(section);
    }
  });
}

function openSection(pageSections, e) {
  const clickedItemId = e.currentTarget.id;
  if (clickedItemId === "portfolio-link" || clickedItemId === "about-link") {
    e.preventDefault();
    const cleanItemId = clickedItemId.replace("-link", ""); // Remove "-link"
    pageSections.forEach(function (section) {
      if (section.id === cleanItemId) {
        section.classList.toggle("show");
        closeSection(section);
      } else {
        section.classList.remove("show");
      }
    });
  }
}

function closeSection(section) {
  // Check if the section has the "show" class
  if (section.classList.contains("show")) {
    // Check if backButton already exists
    const existingBackButton = section.querySelector(".back-btn");
    if (!existingBackButton) {
      const backButton = document.createElement("a");
      const circle = document.createElement("div");
      const arrowIcon = document.createElement("img");

      backButton.classList.add("back-btn");
      circle.classList.add("circle");

      arrowIcon.src =
        "wp-content/themes/portfolio-timber-v2/assets/icons/arrow-right-solid.svg";
      arrowIcon.alt = "back to main";
      arrowIcon.classList.add("back-icon");

      circle.appendChild(arrowIcon);
      backButton.appendChild(circle);
      section.appendChild(backButton);

      // Add event listener to handle the back action
      backButton.addEventListener("click", function (e) {
        e.preventDefault();
        section.classList.remove("show");
        // Remove backButton when the "show" class is removed
        section.removeChild(backButton);
      });
    }
  }
}

function checkHash() {
  // Get the current URL
  var currentURL = window.location.href;

  // Check if the URL contains "#portfolio" or "#about"
  if (currentURL.includes("#portfolio")) {
    return "portfolio";
  } else if (currentURL.includes("#about")) {
    return "about";
  }
}
