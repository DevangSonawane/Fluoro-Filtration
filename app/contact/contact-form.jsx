"use client";

import { useMemo, useState } from "react";
import styles from "./contact.module.css";

const industries = ["Pharmaceutical Manufacturing", "Chemical Processing", "Process Water Treatment", "Other"];

export function ContactForm({ product }) {
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

    const mailto = new URL(`mailto:info@fluorofiltration.in`);
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
        Open email draft
      </button>
    </form>
  );
}
