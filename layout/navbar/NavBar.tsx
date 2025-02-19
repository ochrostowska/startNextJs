import { HamburgerSvg } from "@/components/Svg";
import Image from "next/image";
import { useState } from "react";
import styles from "./navbar.module.scss";

export const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className={styles.navigation}>
      <div className={styles.navigation__logoBox}>
        <Image
          className={styles.navigation__logo}
          src={"/logo.png"}
          alt="Logo"
          width={243}
          height={100}
        />
      </div>

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
            <a href="#" className={styles.navigation__link}>
              Oferta
            </a>
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
