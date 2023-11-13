export function mainNav() {
  // Get nav items
  const mainNavItems = document.querySelectorAll(".front-page-nav li a");
  //handle click of nav items
  mainNavItems.forEach(function (item) {
    item.addEventListener("click", handleClick);
  });

  console.log(mainNavItems);
}

function handleClick(e) {
  const clickedItemId = e.currentTarget.id;

  const pageSections = document.querySelectorAll(
    "body.front-page .home-section"
  );
  if (clickedItemId === "portfolio" || clickedItemId === "about") {
    e.preventDefault();
    pageSections.forEach(function (section) {
      if (section.id === clickedItemId) {
        section.classList.toggle("show");
      } else {
        section.classList.remove("show");
      }
    });
  }
}
