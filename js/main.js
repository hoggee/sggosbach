// preload
const preload = document.querySelector(".preload");
const videoHome = document.getElementsByTagName("video")[0];

// navbar
const navbar = document.querySelector(".navbar");
const navbarNav = document.querySelector(".navbar-nav");
const navItems = document.querySelectorAll(".nav-item");
const navbarToggler = document.querySelector(".navbar-toggler");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");

// sections
const sections = document.querySelectorAll("section");


// preload
// const checkVideoHome = () => {
//   var checkReadyState = setInterval(() => {
//     if (videoHome.readyState >= 3) {
//       preload.setAttribute("aria-hidden", true);
//       clearInterval(checkReadyState);
//     }
//   }, 500);
//   /* videoHome.addEventListener("loadeddata", () => {
//     preload.setAttribute("aria-hidden", true);
//   }); */
// };

// navbar
const navbarNavExpanded = () => {
  return navbarNav.getAttribute("aria-expanded");
};

const expandNavbarNav = () => {
  navbarNav.setAttribute("aria-expanded", true);
  navbarToggler.setAttribute("aria-selected", true);
};

const truncateNavbarNav = () => {
  navbarNav.setAttribute("aria-expanded", false);
  navbarToggler.setAttribute("aria-selected", false);
};

const resetNavItems = () => {
  navItems.forEach((navItem) => {
    navItem.setAttribute("aria-selected", false);
  });
};

const setNavItem = (navItem) => {
  resetNavItems();
  navItem.setAttribute("aria-selected", true);
};


//
//  MAIN
//

// preload
checkVideoHome();

// handle click events
document.addEventListener("click", (event) => {
  console.log(event.target);

  // navbar
  const isNavbarNav = event.target.isEqualNode(navbarNav);
  const isMenuIcon = event.target.isEqualNode(menuIcon);
  const isCloseIcon = event.target.isEqualNode(closeIcon);

  if (isMenuIcon === true) {
    expandNavbarNav();
  }

  if (isCloseIcon === true || (navbarNavExpanded() === "true" && isMenuIcon === false && isNavbarNav === false)) {
    truncateNavbarNav();
  }
});
