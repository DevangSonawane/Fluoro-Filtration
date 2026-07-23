import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FiltrationFinder } from "../../components/FiltrationFinder";
import { PleatMotif } from "../../components/PleatMotif";
import styles from "../../app/page.module.css";

const pillars = [
  {
    title: "Fast, Reliable Delivery",
    text: "Stocked inventory means shorter lead times when your process can't wait."
  },
  {
    title: "Technical Selection Support",
    text: "We help you choose the right micron rating, media, and housing - not just sell you a part number."
  },
  {
    title: "Wide Product Range",
    text: "One source for filter media, bags, cartridges, housings, and complete filtration systems."
  },
  {
    title: "Responsive Service",
    text: "Fast quote turnaround and real answers to technical questions, not automated replies."
  }
];

const industries = [
  {
    title: "Water & Wastewater Treatment",
    text: "Bag housings, melt blown cartridges, self-cleaning filters."
  },
  {
    title: "Food & Beverage",
    text: "Sanitary housings, PP pleated cartridges, carbon cartridges."
  },
  {
    title: "Pharmaceuticals",
    text: "PES/PTFE/Nylon 6 membrane cartridges."
  },
  {
    title: "Chemical Processing",
    text: "String wound, PVDF cartridges, PP housings."
  },
  {
    title: "Oil & Gas",
    text: "Oil-field pleated cartridges, oil absorption bags."
  },
  {
    title: "Electronics & Semiconductor",
    text: "Jumbo pleated cartridges, PES/PTFE membranes."
  },
  {
    title: "RO / Desalination",
    text: "High flow cartridges, RO membrane housings."
  },
  {
    title: "Power Plant",
    text: "Backwashable PP pleated cartridges for condensate treatment."
  },
  {
    title: "Paints & Coatings",
    text: "Fine-micron cartridges for finish quality."
  }
];

export function HomePage() {
  return (
    <>
      <section className={`section ${styles.hero}`}>
        <div className={`page ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <span className="eyebrow">Fluoro Filtration</span>
            <h1 className={`display ${styles.heroTitle}`}>Industrial Filtration Solutions, Delivered Fast</h1>
            <p className={styles.heroText}>
              Your trusted source for filter bags, cartridges, housings, and complete filtration systems - backed by
              technical expertise and reliable stock availability.
            </p>
            <p className={styles.heroText}>
              We supply high-performance liquid filtration products to industries that can't afford downtime. From fine
              particulate removal to high-flow industrial filtration, we help you find the right filter for your
              process - with the technical support to back it up.
            </p>
            <div className={styles.actions}>
              <a href="#finder" className="btn btn-primary">
                Find the right filter
                <ArrowRight size={16} />
              </a>
              <Link to="/contact" className="btn btn-secondary">
                Request a Quote
              </Link>
              <Link to="/products" className="btn btn-secondary">
                Download Product Catalog
              </Link>
            </div>
          </div>
          <div className={styles.heroPanel}>
            <div className={styles.heroCard}>
              <div className={styles.heroCardTop}>
                <span className="chip">Industrial liquid filtration</span>
                <CheckCircle2 size={18} />
              </div>
              <p className={styles.heroCardText}>
                A straightforward way to narrow the choice before you request pricing or a trial.
              </p>
              <div className={styles.heroNote}>
                Start with your flow rate, micron requirement, fluid type, operating temperature, and pressure.
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
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="display section-title">Fast support, broad range, and straight answers.</h2>
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
            <span className="eyebrow">Applications We Serve</span>
            <h2 className="display section-title">One source across industrial liquid filtration applications.</h2>
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
              <span className="eyebrow">Contact / CTA</span>
              <h2 className={`display ${styles.ctaTitle}`}>
                Need help selecting the right filter for your application? Send us your specs and we’ll recommend the
                right solution and get you a quote fast.
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
