import { Route, Routes } from "react-router-dom";
import logo from "../images/Vector.svg";
import { NavLink } from "react-router-dom";

function Header({ userEmail, deleteToken }) {
  return (
    <header className="header">
      <div className="header__box">
        <img className="header__logo" alt="Logo" src={logo} />
        <div className="header__info-container">
          <p className="header__text">{userEmail}</p>
          <Routes>
            <Route
              path="/"
              element={
                <NavLink
                  className="header__text header__link-text"
                  to="/sign-in"
                  onClick={deleteToken}
                >
                  Logout
                </NavLink>
              }
            />
            <Route
              path="/sign-up"
              element={
                <NavLink
                  className="header__text header__link-text"
                  to="/sign-in"
                >
                  Sign in
                </NavLink>
              }
            />
            <Route
              path="/sign-in"
              element={
                <NavLink
                  className="header__text header__link-text"
                  to="/sign-up"
                >
                  Registration
                </NavLink>
              }
            />
          </Routes>
        </div>
      </div>
    </header>
  );
}

export default Header;
