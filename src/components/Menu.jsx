import "./Menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div class={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#Hero">Home</a>
        </li>
      </ul>
    </div>
  );
}
