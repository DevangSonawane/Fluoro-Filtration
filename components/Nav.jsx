import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Nav.module.css";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Technical Data", href: "/technical-data" },
  { name: "Contact", href: "/contact" }
];

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.outer}>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`${styles.navShell} ${scrolled ? styles.scrolled : styles.resting}`}
      >
        <div className={styles.row}>
          <Link to="/" className={styles.brand} aria-label="Fluoro Filtration home">
            <img
              src="/ff-crop.png"
              alt="Fluoro Filtration"
              className={`${styles.logo} ${scrolled ? styles.logoScrolled : styles.logoResting}`}
            />
          </Link>

          <div className={styles.desktopNav}>
            {navigation.map((item) => {
              const active = location.pathname === item.href;

              return (
                <Link key={item.name} to={item.href} className={styles.desktopLink}>
                  <span className={`${styles.desktopLinkInner} ${active ? styles.activeTab : ""}`}>
                    {active && (
                      <motion.span
                        layoutId="activeTab"
                        className={styles.activeBackground}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className={styles.desktopLinkText}>{item.name}</span>
                  </span>
                </Link>
              );
            })}
          </div>

          <div className={styles.mobileMenuButtonWrap}>
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className={styles.mobileMenuButton}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className={styles.menuIcon} aria-hidden="true" /> : <Menu className={styles.menuIcon} aria-hidden="true" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 16 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              className={styles.mobileMenu}
            >
              <div className={styles.mobileMenuInner}>
                {navigation.map((item) => {
                  const active = location.pathname === item.href;

                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`${styles.mobileLink} ${active ? styles.mobileLinkActive : ""}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
