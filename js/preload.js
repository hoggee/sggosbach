const videoHome = document.querySelector("video");
const preload = document.querySelector(".preload");
const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

const preloadVideoHome = () => {
  var checkReadyState = setInterval(() => {
    if (videoHome.readyState >= 3) {  // videoHome is loaded at least two frames
      preload.setAttribute("aria-hidden", true);
      header.setAttribute("aria-hidden", false);
      main.setAttribute("aria-hidden", false);
      footer.setAttribute("aria-hidden", false);
      
      clearInterval(checkReadyState);
    }
  }, 500);
};

preloadVideoHome();