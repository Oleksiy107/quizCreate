import React from "react";

const Header: React.FC = () => {
  return (
    <header className="HeaderWrap">
      <nav className="HeaderWrap__navBox">
        <ul className="HeaderWrap__list">
          <div className="HeaderWrap__innerWrapList">
            <li className="HeaderWrap__listItem">
              <a href="/">Home</a>
            </li>
            <li className="HeaderWrap__listItem">
              <a href="/CreatePage">Create quiz</a>
            </li>
          </div>
          <li className="HeaderWrap__listItem">
            <a href="/FormPage">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
