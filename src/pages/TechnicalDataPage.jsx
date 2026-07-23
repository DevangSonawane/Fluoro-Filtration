import { Link } from "react-router-dom";

const items = [
  {
    label: "Chemical resistance",
    text: "Reference data for common process chemicals and general compatibility notes."
  },
  {
    label: "Operating guidance",
    text: "Use the product family spec pages for temperature, pressure, and media selection."
  },
  {
    label: "Documentation",
    text: "We can supply product documents and batch-level paperwork with pricing requests."
  }
];

export function TechnicalDataPage() {
  return (
    <section className="section">
      <div className="page stack-lg">
        <div>
          <span className="eyebrow">Technical Data</span>
          <h1 className="display page-title">Chemical resistance data for early-stage screening.</h1>
          <p className="lead">
            Search our comprehensive database to check compatibility with over 400 chemicals, then send the process
            details or spec sheet through the contact form for a final recommendation.
          </p>
        </div>

        <div className="grid-3">
          {items.map((item) => (
            <article key={item.label} className="card card-pad">
              <h2 className="display" style={{ marginTop: 0 }}>
                {item.label}
              </h2>
              <p className="muted">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="card card-pad">
          <h2 className="display" style={{ marginTop: 0 }}>
            Need a confirmation?
          </h2>
          <p className="muted">
            We help you choose the right micron rating, media, and housing - not just sell you a part number.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
