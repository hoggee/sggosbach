const navbarBrand = document.querySelector(".navbar-brand");
const navbarNav = document.querySelector(".navbar-nav");
const navItems = document.querySelectorAll(".nav-item");
const navbarToggler = document.querySelector(".navbar-toggler");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const sections = document.querySelectorAll("section");

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

const scrollToSection = (section) => {
  section.scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
};

/*
  click events
*/
document.addEventListener("click", (event) => {
    // menu icon
    if (event.target.isEqualNode(menuIcon)) {
        expandNavbarNav();
    }

    // close icon
    if (event.target.isEqualNode(closeIcon) || (
            navbarNavExpanded() === "true" && 
            event.target.isEqualNode(menuIcon) === false && 
            event.target.isEqualNode(navbarNav) === false
        )) {
        truncateNavbarNav();
    }

    // navbarBrand
    if (event.target.isEqualNode(navbarBrand)) {
        if (document.URL.includes("legal-notice") || document.URL.includes("data-protection")) {
            location.href = "../index.html";
        } else {
            scrollToSection(sections[0]);
        }
    }

    // nav-items
    if (event.target.classList.contains("nav-item")) {
        const sectionString = "#" + event.target.id.toString().slice(4);
        const section = document.querySelector(sectionString);

        if (document.URL.includes("legal-notice") || document.URL.includes("data-protection")) {
            location.href = "../index.html";
        } else {
            scrollToSection(section); 
        }       
    }
});