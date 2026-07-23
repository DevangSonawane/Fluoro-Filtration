import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Mail, Phone, MessageCircle } from "lucide-react";
import styles from "../../app/contact/contact.module.css";

const industries = ["Pharmaceutical Manufacturing", "Chemical Processing", "Process Water Treatment", "Other"];

export function ContactPage() {
  const [searchParams] = useSearchParams();
  const product = searchParams.get("product");
  const contactEmail = "devang@fluorofiltration.com";
  const contactPhone = "+91 91373 08280";
  const whatsAppPhone = "919137308280";

  return (
    <section className="section">
      <div className="page stack-lg">
        <div>
          <span className="eyebrow">Contact</span>
          <h1 className="display page-title">Need help selecting the right filter for your application?</h1>
          <p className="lead">
            Send us your specs - flow rate, micron requirement, fluid type, operating temperature and pressure - and
            we&apos;ll recommend the right solution and get you a quote fast.
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
              <span>{contactEmail}</span>
            </div>
            <div className={styles.contactRow}>
              <Phone size={18} />
              <span>{contactPhone}</span>
            </div>
            <div className={styles.contactRow}>
              <MessageCircle size={18} />
              <a href={`https://wa.me/${whatsAppPhone}`} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>

            <div className={styles.addressBlock}>
              <div className={styles.addressLabel}>Address</div>
              <div className={styles.addressText}>
                FLUORO TECH ENGINEERING WORKS
                <br />
                1st Floor, Survey No. 66. Plot No. 89,
                <br />
                Valiv Phata, Sativali Road
                <br />
                Opp. Jay Equipment Pvt. Ltd.
                <br />
                Vasai - E, Thane - 401 208
              </div>
            </div>

            <Link to="/products" className="btn btn-secondary">
              Browse products
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}

function ContactForm({ product }) {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    industry: industries[0],
    message: product ? `I am interested in ${product}.` : ""
  });

  const subject = useMemo(() => {
    return product ? `Quote request for ${product}` : "Quote request from Fluoro Filtration site";
  }, [product]);

  function handleSubmit(event) {
    event.preventDefault();

    const body = [
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Industry: ${form.industry}`,
      "",
      form.message
    ].join("\n");

    const mailto = new URL(`mailto:${contactEmail}`);
    mailto.searchParams.set("subject", subject);
    mailto.searchParams.set("body", body);
    window.location.href = mailto.toString();
  }

  return (
    <form className={`card card-pad ${styles.form}`} onSubmit={handleSubmit}>
      <div className={styles.grid}>
        <label>
          <span>Name</span>
          <input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} required />
        </label>
        <label>
          <span>Company</span>
          <input
            value={form.company}
            onChange={(event) => setForm({ ...form, company: event.target.value })}
            required
          />
        </label>
      </div>
      <div className={styles.grid}>
        <label>
          <span>Email</span>
          <input
            type="email"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            required
          />
        </label>
        <label>
          <span>Phone</span>
          <input value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} />
        </label>
      </div>
      <label>
        <span>Industry</span>
        <select value={form.industry} onChange={(event) => setForm({ ...form, industry: event.target.value })}>
          {industries.map((industry) => (
            <option key={industry} value={industry}>
              {industry}
            </option>
          ))}
        </select>
      </label>
      <label>
        <span>Message</span>
        <textarea
          rows={7}
          value={form.message}
          onChange={(event) => setForm({ ...form, message: event.target.value })}
          placeholder="Tell us the process, micron range, temperature, and any solvent or sterilization constraints."
        />
      </label>
      <label className={styles.upload}>
        <span>Attach a spec sheet</span>
        <input type="file" />
        <small>For v1, the mail draft will open in your email app. Attach the file there if needed.</small>
      </label>
      <button type="submit" className="btn btn-cta">
        Request a Quote
      </button>
    </form>
  );
}
