// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Add click event listener to all links with class "page-link"
  const pageLinks = document.querySelectorAll(".page-link");
  pageLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      navigateToPage(this.href);
    });
  });
});

function navigateToPage(url) {
  const currentPage = document.querySelector(".page");
  currentPage.style.opacity = 0;

  // Simulate delay before navigating to the new page
  setTimeout(function () {
    window.location.href = url;
  }, 500); // Delay matches the transition duration in CSS
}
