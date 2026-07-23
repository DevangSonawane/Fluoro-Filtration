import styles from "../../app/about/about.module.css";

const performanceFactors = [
  {
    title: "Micron rating",
    text: "What needs to be removed, and how fine the retention needs to be."
  },
  {
    title: "Chemical compatibility",
    text: "What the media needs to withstand over its service life."
  },
  {
    title: "Flow rate",
    text: "Sizing the housing and cartridge count to your throughput."
  },
  {
    title: "Operating conditions",
    text: "Temperature, pressure, and differential pressure limits."
  }
];

const distributorBenefits = [
  {
    title: "One point of contact",
    text: "Work across multiple product families without managing separate manufacturer relationships."
  },
  {
    title: "Stocked inventory",
    text: "Faster turnaround than direct-from-factory lead times when you need supply now."
  },
  {
    title: "Application-first recommendations",
    text: "We focus on what fits the process instead of pushing a single media type."
  },
  {
    title: "Ongoing support",
    text: "Reordering, sizing changes, and troubleshooting service life issues after the sale."
  }
];

export function AboutPage() {
  return (
    <section className="section">
      <div className="page stack-lg">
        <div>
          <span className="eyebrow">About</span>
          <h1 className="display page-title">A Dedicated Distributor Built to Remove the Guesswork</h1>
          <p className="lead">
            We help engineering and procurement teams find the right filtration solution fast, without the back-and-forth.
          </p>
        </div>

        <div className="grid-2">
          <article className="card card-pad">
            <h2 className="display" style={{ marginTop: 0 }}>
              Who We Are
            </h2>
            <p className="muted">
              We&apos;re a dedicated distributor of industrial liquid filtration products, serving manufacturers,
              processors, and facilities that need dependable filtration without the guesswork. Rather than pushing a
              single product line, we match the right filter media, cartridge, or housing to your specific
              application every time.
            </p>
            <p className="muted">
              We work across filter media, liquid filter bags, cartridges, high-flow units, and housings, covering
              water treatment, food &amp; beverage, pharmaceuticals, chemical processing, oil &amp; gas,
              electronics, and power generation.
            </p>
          </article>
          <article className="card card-pad">
            <h2 className="display" style={{ marginTop: 0 }}>
              What We Do
            </h2>
            <p className="muted">
              Before we recommend a product, we look at the details that actually determine performance.
            </p>
            <div className={styles.steps}>
              {performanceFactors.map((item, index) => (
                <div key={item.title} className={styles.step}>
                  <span className={styles.index}>{index + 1}</span>
                  <div>
                    <strong>{item.title}</strong>
                    <div className="muted">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="card card-pad">
          <h2 className="display" style={{ marginTop: 0 }}>
            How We Work
          </h2>
          <p className="muted">
            Not sure whether a pleated cartridge or a string-wound filter is the better fit for a high-viscosity
            fluid? Unsure what housing material will hold up against your process chemistry? That&apos;s exactly where
            we come in.
          </p>
          <p className="muted">
            Send us your process details, fluid type, flow rate, particulate load, temperature, and pressure, and
            we&apos;ll narrow the options to what will actually work before you commit to a quote.
          </p>
        </div>

        <div className="grid-2">
          {distributorBenefits.map((item) => (
            <article key={item.title} className="card card-pad">
              <h2 className="display" style={{ marginTop: 0 }}>
                {item.title}
              </h2>
              <p className="muted">{item.text}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
