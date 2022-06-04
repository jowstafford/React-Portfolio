import "./Menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div class={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="/hero">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="/portfolio">Portfolio</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="/references">References</a>
        </li>
      </ul>
    </div>
  );
}
