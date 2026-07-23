import { Link } from "react-router-dom";

const categories = [
  {
    label: "Pharmaceutical manufacturers",
    text: "Process liquids, membrane filtration, and prefilter stages."
  },
  {
    label: "Chemical processors",
    text: "Solvent-facing and chemically resistant cartridge applications."
  },
  {
    label: "Utility and process water",
    text: "Higher-volume filtration and prefiltration support."
  }
];

export function ClientsPage() {
  return (
    <section className="section">
      <div className="page stack-lg">
        <div>
          <span className="eyebrow">Clients</span>
          <h1 className="display page-title">Industries we support.</h1>
          <p className="lead">
            We keep the focus on the work we can support well: filtration selection, sourcing, and technical follow-up
            for industrial buyers.
          </p>
        </div>

        <div className="grid-3">
          {categories.map((category) => (
            <article key={category.label} className="card card-pad">
              <h2 className="display" style={{ marginTop: 0 }}>
                {category.label}
              </h2>
              <p className="muted">{category.text}</p>
            </article>
          ))}
        </div>

        <div className="card card-pad">
          <h2 className="display" style={{ marginTop: 0 }}>
            Want to talk through a requirement?
          </h2>
          <p className="muted">
            Send the process conditions and we’ll narrow the product family before you request pricing.
          </p>
          <Link to="/contact" className="btn btn-secondary">
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
