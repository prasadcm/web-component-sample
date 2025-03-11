import About from "./about.js";
import Contact from "./contact.js";
import Home from "./home.js";

export default function Router() {
  const detail = document.createElement("div");
  const navLinks = document.querySelectorAll("nav a");
  const routes = [
    { path: "/", element: Home },
    { path: "/about", element: About },
    { path: "/contact", element: Contact },
  ];

  function updateActiveLink(path) {
    navLinks.forEach((link) => {
      if (link.getAttribute("href") === path) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  function updateContent(path) {
    const route = routes.find((route) => route.path === path);
    if (route) {
      const element = route.element();
      detail.innerHTML = "";
      detail.appendChild(element);
      updateActiveLink(path);
    }
  }

  function navigate(event) {
    event.preventDefault();
    const path = event.target.getAttribute("href");
    window.history.pushState({}, path, window.location.origin + path);
    updateContent(path);
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", navigate);
  });

  window.onpopstate = () => {
    updateContent(window.location.pathname);
  };

  updateContent(window.location.pathname);

  return detail;
}
