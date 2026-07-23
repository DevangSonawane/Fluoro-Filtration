import { Link } from "react-router-dom";
import styles from "../../app/about/about.module.css";

const processSteps = ["Spec discussion", "Sample evaluation", "Trial order", "Ongoing supply"];

export function AboutPage() {
  return (
    <section className="section">
      <div className="page stack-lg">
        <div>
          <span className="eyebrow">About</span>
          <h1 className="display page-title">A dedicated distributor built to remove the guesswork.</h1>
          <p className="lead">
            We&apos;re a dedicated distributor of industrial liquid filtration products, built to serve manufacturers,
            processors, and facilities that need dependable filtration without the guesswork. Rather than pushing a
            single product line, we focus on matching the right filter media, cartridge, or housing to your specific
            application.
          </p>
        </div>

        <div className="grid-2">
          <article className="card card-pad">
            <h2 className="display" style={{ marginTop: 0 }}>
              What we do
            </h2>
            <p className="muted">
              We consider micron rating, chemical compatibility, flow rate, and operating conditions before we
              recommend anything.
            </p>
          </article>
          <article className="card card-pad">
            <h2 className="display" style={{ marginTop: 0 }}>
              How we work
            </h2>
            <p className="muted">
              Need help selecting between a pleated cartridge and a string-wound filter for a high-viscosity fluid?
              Not sure what housing material will hold up against your process chemistry? That&apos;s exactly where we
              come in.
            </p>
          </article>
        </div>

        <div className={styles.cta}>
          <div>
            <span className="eyebrow">Get in touch</span>
            <h2 className="display section-title">Send us your specs and we’ll help narrow the options.</h2>
          </div>
          <Link to="/contact" className="btn btn-cta">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
