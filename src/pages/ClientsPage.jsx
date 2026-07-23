import { Link } from "react-router-dom";

const categories = [
  {
    label: "Water & Wastewater Treatment",
    text: "Bag housings, melt blown cartridges, self-cleaning filters."
  },
  {
    label: "Food & Beverage",
    text: "Sanitary housings, PP pleated cartridges, carbon cartridges."
  },
  {
    label: "Pharmaceuticals",
    text: "PES/PTFE/Nylon 6 membrane cartridges."
  },
  {
    label: "Chemical Processing",
    text: "String wound, PVDF cartridges, PP housings."
  },
  {
    label: "Oil & Gas",
    text: "Oil-field pleated cartridges, oil absorption bags."
  },
  {
    label: "Electronics & Semiconductor",
    text: "Jumbo pleated cartridges, PES/PTFE membranes."
  },
  {
    label: "RO / Desalination",
    text: "High flow cartridges, RO membrane housings."
  },
  {
    label: "Power Plant",
    text: "Backwashable PP pleated cartridges for condensate treatment."
  },
  {
    label: "Paints & Coatings",
    text: "Fine-micron cartridges for finish quality."
  }
];

export function ClientsPage() {
  return (
    <section className="section">
      <div className="page stack-lg">
        <div>
          <span className="eyebrow">Applications We Serve</span>
          <h1 className="display page-title">Industrial filtration support across multiple sectors.</h1>
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
            Send the process conditions and we&apos;ll narrow the product family before you request pricing.
          </p>
          <Link to="/contact" className="btn btn-secondary">
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
