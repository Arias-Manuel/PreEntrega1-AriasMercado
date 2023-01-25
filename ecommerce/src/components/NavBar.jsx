import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBars } from "@fortawesome/free-solid-svg-icons";

import CartWidget from "./CartWidget";

import "./styles/NavBar.css";

const NavBar = ({ background }) => {
  const Logo = "./images/Logo.jpg";
  return (
    <header className={`header background--${background}`}>
      <section className="header-container">
        {/* Boton de menu */}

        <div className="menu-button">
          <FontAwesomeIcon icon={faBars} size="lg" color="black" />
          <small>Menu</small>
        </div>

        {/* Link de navegación */}

        <nav>
          <ul className="nav-container">
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/">Productos</a>
            </li>
            <li>
              <a href="/">
                <span className="arrow"></span>Servicios
              </a>
            </li>
            <li>
              <a href="/">Otros</a>
            </li>
            <li>
              <a href="/">Contactos</a>
            </li>
          </ul>
        </nav>
      </section>

      <section className="logo-container">
        <img src={Logo} alt="Logo" />
      </section>

      {/* CartWidget */}
      <section>
        <CartWidget />
      </section>
    </header>
  );
};

export default NavBar;
