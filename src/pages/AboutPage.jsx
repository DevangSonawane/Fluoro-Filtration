import { Link } from "react-router-dom";
import styles from "../../app/about/about.module.css";

const processSteps = ["Spec discussion", "Sample evaluation", "Trial order", "Ongoing supply"];

export function AboutPage() {
  return (
    <section className="section">
      <div className="page stack-lg">
        <div>
          <span className="eyebrow">About</span>
          <h1 className="display page-title">A sourcing partner with technical discipline.</h1>
          <p className="lead">
            Fluoro Filtration helps pharmaceutical and chemical manufacturers choose cartridge and membrane options
            that fit their process conditions. We work through the actual operating question first, then translate
            that into a clear product recommendation and a quote request.
          </p>
        </div>

        <div className="grid-2">
          <article className="card card-pad">
            <h2 className="display" style={{ marginTop: 0 }}>
              What we do
            </h2>
            <p className="muted">
              We source filtration products through our manufacturing partner network and support buyers with product
              selection, documentation review, and batch-to-batch ordering continuity.
            </p>
          </article>
          <article className="card card-pad">
            <h2 className="display" style={{ marginTop: 0 }}>
              How we work
            </h2>
            <div className={styles.steps}>
              {processSteps.map((step, index) => (
                <div key={step} className={styles.step}>
                  <span className={styles.index}>{index + 1}</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className={styles.cta}>
          <div>
            <span className="eyebrow">Get in touch</span>
            <h2 className="display section-title">Send the spec sheet and we’ll help you narrow the options.</h2>
          </div>
          <Link to="/contact" className="btn btn-cta">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
