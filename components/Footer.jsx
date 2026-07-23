import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`page ${styles.inner}`}>
        <div>
          <img src="/ff.png" alt="Fluoro Filtration" className={styles.brandImage} />
          <p className={styles.text}>
            One source for filter media, bags, cartridges, housings, and complete filtration systems.
          </p>
        </div>
        <div className={styles.links}>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
