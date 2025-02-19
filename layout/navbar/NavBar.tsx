import { HamburgerSvg } from "@/components/Svg";
import { scrollToElement } from "@/helpers/scrollToElement";
import { PRODUCTS_FRAGMENT_ID } from "@/pages/_home/ProductsFragment";
import { useState } from "react";
import { Logo } from "../Logo";
import styles from "./navbar.module.scss";

export const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className={styles.navigation}>
      <Logo />

      <div className={styles.navigation__menu} onClick={handleShowNavbar}>
        <HamburgerSvg />
      </div>

      <div
        className={`${styles.navigation__list} ${
          showNavbar && styles.navigation__list__active
        }`}
      >
        <ul>
          <li className={styles.navigation__item}>
            <button
              onClick={() => scrollToElement(PRODUCTS_FRAGMENT_ID)}
              className={styles.navigation__link}
            >
              Oferta
            </button>
          </li>
          <li className="navigation__item">
            <a href="#" className={styles.navigation__link}>
              Do pobrania
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className={styles.navigation__link}>
              Realizacje
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className={styles.navigation__link}>
              Kontakt
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
