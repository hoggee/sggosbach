const preload = document.querySelector(".preload");
const navbarNav = document.querySelector(".navbar-nav");
const navItems = document.querySelectorAll(".nav-item");
const navNews = navItems[0];
const navAbout = navItems[1];
const navHistory = navItems[2];
const navGallery = navItems[3];
const navContact = navItems[4];
const navLegal = navItems[5];
const navbarToggler = document.querySelector(".navbar-toggler");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const sections = document.querySelectorAll("section");

const hidePreload = () => {
  preload.setAttribute("aria-hidden", true);
};

const navbarExpanded = () => {
  return navbarNav.getAttribute("aria-expanded");
};

const expandNavbar = () => {
  navbarNav.setAttribute("aria-expanded", true);
  navbarToggler.setAttribute("aria-selected", true);
};

const truncateNavbar = () => {
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

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      console.log(entry);

      if (entry.isIntersecting === true) {
        switch (entry.target.id) {
          case "news":
            setNavItem(navNews);
            break;
          case "about":
            setNavItem(navAbout);
            break;
          case "history":
            setNavItem(navHistory);
            break;
          case "gallery":
            setNavItem(navGallery);
            break;
          case "contact":
            setNavItem(navContact);
            break;
          case "legal":
            setNavItem(navLegal);
            break;
          default:
            resetNavItems();
            break;
        }
      }
    });
  },
  {
    threshold: 0.85,
  }
);

// preload
document.addEventListener("DOMContentLoaded", (event) => {
  hidePreload();
});

// observe intersections
sections.forEach((section) => {
  observer.observe(section);
});

// handle click events
document.addEventListener("click", (event) => {
  console.log(event.target);

  const isNavbarNav = event.target.isEqualNode(navbarNav);
  const isMenuIcon = event.target.isEqualNode(menuIcon);
  const isCloseIcon = event.target.isEqualNode(closeIcon);

  // expand navbar
  if (isMenuIcon === true) {
    expandNavbar();
  }

  // truncate navbar
  if (
    isCloseIcon === true ||
    (navbarExpanded() === "true" &&
      isMenuIcon === false &&
      isNavbarNav === false)
  ) {
    truncateNavbar();
  }
});
