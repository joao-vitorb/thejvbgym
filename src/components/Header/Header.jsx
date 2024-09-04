import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import bars from "../../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header" id="header">
      <img src={logo} alt="" className="logo" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5ppx",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              to="home"
              onClick={() => setMenuOpened(false)}
              activeClass="active"
              span={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="programs"
              onClick={() => setMenuOpened(false)}
              span={true}
              smooth={true}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              to="reasons"
              onClick={() => setMenuOpened(false)}
              span={true}
              smooth={true}
            >
              Why us
            </Link>
          </li>
          <li>
            <Link
              to="plans"
              onClick={() => setMenuOpened(false)}
              span={true}
              smooth={true}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              onClick={() => setMenuOpened(false)}
              span={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
