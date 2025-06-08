const preload = document.querySelector(".preload");
const videoHome = document.getElementsByTagName("video")[0];
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

const checkVideoHome = () => {
  var checkReadyState = setInterval(() => {
    if (videoHome.readyState >= 3) {
      preload.setAttribute("aria-hidden", true);
      clearInterval(checkReadyState);
    }
  }, 500);
  /* videoHome.addEventListener("loadeddata", () => {
    preload.setAttribute("aria-hidden", true);
  }); */
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
          case "home":
            resetNavItems();
            sections[0].scrollTo({ top: 0, behavior: "smooth" });
            break;
          case "news":
            setNavItem(navNews);
            sections[1].scrollTo({ top: 0, behavior: "smooth" });
            break;
          case "about":
            setNavItem(navAbout);
            sections[2].scrollTo({ top: 0, behavior: "smooth" });
            break;
          case "history":
            setNavItem(navHistory);
            sections[3].scrollTo({ top: 0, behavior: "smooth" });
            break;
          case "gallery":
            setNavItem(navGallery);
            sections[4].scrollTo({ top: 0, behavior: "smooth" });
            break;
          case "contact":
            setNavItem(navContact);
            sections[5].scrollTo({ top: 0, behavior: "smooth" });
            break;
          case "legal":
            setNavItem(navLegal);
            sections[6].scrollTo({ top: 0, behavior: "smooth" });
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

// preload / check videoHome
checkVideoHome();

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
