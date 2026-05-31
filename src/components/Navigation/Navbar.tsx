import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink as RouterNavLink } from "react-router-dom";
import type { NavLink } from "../../types/index";
import styles from "./Navbar.module.css";

const navLinks: NavLink[] = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <nav>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <Link to="/" onClick={close}>Gill Adamson</Link>
        </div>
        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.path} className={styles.link}>
              <RouterNavLink to={link.path}>{link.label}</RouterNavLink>
            </li>
          ))}
        </ul>
        <Link to="/bookings" className={styles.specialCta}>
          Bookings
        </Link>
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileLinks}>
            {navLinks.map((link) => (
              <li key={link.path}>
                <RouterNavLink to={link.path} onClick={close}>
                  {link.label}
                </RouterNavLink>
              </li>
            ))}
          </ul>
          <Link to="/bookings" className={styles.mobileCta} onClick={close}>
            Bookings
          </Link>
        </div>
      )}
    </nav>
  );
};
