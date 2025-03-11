export default function Header() {
  const currentPath = window.location.pathname;
  const header = document.createElement("nav");
  header.innerHTML = `
    <ul>
        <li><a href="/" class="nav-link ${currentPath === "/" ? "active" : ""}">Home</a></li>
        <li><a href="/about" class="nav-link ${currentPath === "/about" ? "active" : ""}">About</a></li>
        <li><a href="/contact" class="nav-link ${currentPath === "/contact" ? "active" : ""}">Contact</a></li>
    </ul>
    `;
  return header;
}
