
function NavBar({ page, setPage }) {
  return (
    <ul className="navbar">
      <li><a className={page === "home" ? "active" : ""} href="#home" onClick={() => setPage("home")}>Home</a></li>
      <li><a className={page === "contact" ? "active" : ""} href="#contact" onClick={() => setPage("contact")}>Contact</a></li>
      <li><a className={page === "about" ? "active" : ""} href="#about" onClick={() => setPage("about")}>About</a></li>
    </ul>
  )
}

export default NavBar
