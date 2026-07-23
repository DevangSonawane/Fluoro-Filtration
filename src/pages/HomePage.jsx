import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FiltrationFinder } from "../../components/FiltrationFinder";
import { PleatMotif } from "../../components/PleatMotif";
import styles from "../../app/page.module.css";

const pillars = [
  {
    title: "Technical fit, not just a catalog.",
    text: "We help you match the right media and micron rating to the process conditions you actually run."
  },
  {
    title: "Documentation you can hand to QA.",
    text: "Batch paperwork and material data are part of the conversation, not an afterthought."
  },
  {
    title: "A partner who answers the phone.",
    text: "You get direct technical support from someone who understands filtration decisions."
  }
];

const industries = [
  {
    title: "Pharmaceutical Manufacturing",
    text: "Process liquids, final filtration, and tighter membrane grades."
  },
  {
    title: "Chemical Processing",
    text: "Solvent-compatible and chemically resistant cartridge choices."
  },
  {
    title: "Process Water Treatment",
    text: "Prefiltration for larger-volume water and utility streams."
  }
];

export function HomePage() {
  return (
    <>
      <section className={`section ${styles.hero}`}>
        <div className={`page ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <span className="eyebrow">Fluoro Filtration</span>
            <h1 className={`display ${styles.heroTitle}`}>Filtration that holds up to inspection.</h1>
            <p className={styles.heroText}>
              We source and support pleated cartridge filters, filter bags, and membrane media for pharmaceutical and
              chemical manufacturers across India, with the technical documentation to back every batch.
            </p>
            <div className={styles.actions}>
              <a href="#finder" className="btn btn-primary">
                Find the right filter
                <ArrowRight size={16} />
              </a>
              <Link to="/contact" className="btn btn-secondary">
                Request a Quote
              </Link>
            </div>
          </div>
          <div className={styles.heroPanel}>
            <div className={styles.heroCard}>
              <div className={styles.heroCardTop}>
                <span className="chip">Filtering by process condition</span>
                <CheckCircle2 size={18} />
              </div>
              <p className={styles.heroCardText}>
                A clear way to narrow the choice before you request pricing or a trial.
              </p>
              <div className={styles.heroNote}>
                Start with your process, micron range, and any heat, solvent, or autoclave constraints.
              </div>
            </div>
            <PleatMotif variant="hero" className={styles.heroMotif} />
          </div>
        </div>
      </section>

      <div className={`page ${styles.dividerWrap}`}>
        <PleatMotif variant="divider" className={styles.sectionDivider} />
      </div>

      <section className={`section ${styles.finderSection}`}>
        <div className="page">
          <FiltrationFinder />
        </div>
      </section>

      <section className="section">
        <div className="page stack-lg">
          <div>
            <span className="eyebrow">Why Fluoro Filtration</span>
            <h2 className="display section-title">Small enough to stay precise. Structured enough to stay useful.</h2>
          </div>
          <div className="grid-3">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="card card-pad reveal">
                <h3 className="display" style={{ marginTop: 0 }}>
                  {pillar.title}
                </h3>
                <p className="muted">{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="page stack-lg">
          <div>
            <span className="eyebrow">Industries served</span>
            <h2 className="display section-title">Focused on the work we can support well.</h2>
          </div>
          <div className="grid-3">
            {industries.map((industry) => (
              <article key={industry.title} className="card card-pad">
                <h3 className="display" style={{ marginTop: 0 }}>
                  {industry.title}
                </h3>
                <p className="muted">{industry.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="page">
          <div className={`card card-pad ${styles.ctaBand}`}>
            <div>
              <span className="eyebrow">Need pricing</span>
              <h2 className={`display ${styles.ctaTitle}`}>
                Have a spec sheet already? Send it over and we’ll confirm compatibility and pricing within 48 hours.
              </h2>
            </div>
            <Link to="/contact" className="btn btn-cta">
              Request a Quote
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
