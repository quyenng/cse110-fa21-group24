/**
 * Creates a navbar custom element and adds it to the document
 * @function
 */
function createNavbar() {
  "use strict";
  const navbar = document.createElement("custom-navbar");
  document.querySelector("body").append(navbar);
}

/**
 * Creates a wave custom element and adds it to the document
 * @function
 */
function createFooterImg() {
  "use strict";
  const footerImg = document.createElement("footer-img");
  document.querySelector("body").append(footerImg);
}

/**
 * Runs initial setup functions when the page first loads
 * @function
 */
async function init() {
  "use strict";
  createNavbar();
  createFooterImg();
}

window.addEventListener("DOMContentLoaded", init);
