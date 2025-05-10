function includeHTML(selector, file) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => {
      document.querySelector(selector).innerHTML = data;

      // ✅ If navbar loaded, apply active class
      if (selector === "#navbar") {
        const links = document.querySelectorAll(".navbar a");
        const currentPage = window.location.pathname.split("/").pop();

        links.forEach((link) => {
          const href = link.getAttribute("href");
          if (
            href === currentPage ||
            (href === "index.html" && currentPage === "")
          ) {
            link.classList.add("active");
          }
        });
      }
    })
    .catch((error) => console.error(`Error loading ${file}:`, error));
}
