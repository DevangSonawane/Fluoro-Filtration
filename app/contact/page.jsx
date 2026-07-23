import Link from "next/link";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { ContactForm } from "./contact-form";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact | Fluoro Filtration",
  description: "Request a quote or send a spec sheet to Fluoro Filtration."
};

export default function ContactPage({
  searchParams
}) {
  const product = searchParams?.product;

  return (
    <section className="section">
      <div className="page stack-lg">
        <div>
          <span className="eyebrow">Contact</span>
          <h1 className="display page-title">Request a quote or send a spec sheet.</h1>
          <p className="lead">
            We reply directly. If you already know the product family, include it in the form so we can move faster.
          </p>
        </div>

        <div className="grid-2">
          <ContactForm product={product} />

          <aside className={`card card-pad ${styles.side}`}>
            <h2 className="display" style={{ marginTop: 0 }}>
              Direct contact
            </h2>
            <div className={styles.contactRow}>
              <Mail size={18} />
              <a href="mailto:info@fluorofiltration.in">info@fluorofiltration.in</a>
            </div>
            <div className={styles.contactRow}>
              <Phone size={18} />
              <a href="tel:+910000000000">+91 00000 00000</a>
            </div>
            <div className={styles.contactRow}>
              <MessageCircle size={18} />
              <a href="https://wa.me/910000000000" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>

            <div className={styles.note}>
              Prefer a shorter path? Email the spec sheet and mention the process, micron range, and any heat or
              solvent constraints.
            </div>

            <Link href="/products" className="btn btn-secondary">
              Browse products
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
