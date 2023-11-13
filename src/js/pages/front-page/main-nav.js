export function mainNav() {
  // Get nav items
  const mainNavItems = document.querySelectorAll(".front-page-nav li a");
  //handle open
  mainNavItems.forEach(function (item) {
    item.addEventListener("click", openSection);
  });
}

function openSection(e) {
  const clickedItemId = e.currentTarget.id;

  const pageSections = document.querySelectorAll(
    "body.front-page .home-section"
  );
  if (clickedItemId === "portfolio" || clickedItemId === "about") {
    e.preventDefault();
    pageSections.forEach(function (section) {
      if (section.id === clickedItemId) {
        section.classList.toggle("show");
        //handle close
        closeSection(section);
      } else {
        section.classList.remove("show");
      }
    });
  }
}

function closeSection(section) {
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
  });
}
