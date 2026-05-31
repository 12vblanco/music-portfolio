import { Link, NavLink as RouterNavLink } from "react-router-dom";
import type { NavLink } from "../../types/index";
import styles from "./Navbar.module.css";

const navLinks: NavLink[] = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/about",
    label: "About",
  },
  {
    path: "/contact",
    label: "Contact",
  },
];

export const Navbar = () => {
  return (
    <nav>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <Link to="/">Gill Adamson</Link>
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
      </div>
    </nav>
  );
};
