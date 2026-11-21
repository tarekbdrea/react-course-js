import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__inner container">
        <a className="header__logo" href="/">
          <span className="header__logo-mark">▶</span>
          CinemaClub
        </a>
        <nav className="header__nav">
          <a className="header__link header__link--active" href="/">סרטים</a>
          <a className="header__link" href="/">הרשימה שלי</a>
          <a className="header__link" href="/">אודות</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
