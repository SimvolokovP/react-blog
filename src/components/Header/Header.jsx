import Navigation from "../Navigation/Navigation";
import ThemeBtn from "../ThemeBtn/ThemeBtn";

export default function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <a className="header__logo" href="#">
            <span>Your Logo</span>
        </a>
        <div className="header__actions">
            <Navigation />
            <ThemeBtn />
        </div>
      </div>
    </header>
  );
}
