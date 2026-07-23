import { Link } from "react-router-dom";

const items = [
  {
    label: "Chemical resistance",
    text: "Reference data for common process chemicals and general media compatibility, covering aqueous solutions, solvents, alkalis, acids, and oils across our polypropylene, polyester, and nylon media lines."
  },
  {
    label: "Operating guidance",
    text: "Use the product family spec pages for detailed temperature, pressure, and media selection guidance specific to each cartridge or bag type."
  },
  {
    label: "Documentation",
    text: "We can supply material compliance statements, batch-level testing paperwork, integrity test data, and dimensional and performance spec sheets with pricing requests."
  }
];

const chemicalRows = [
  ["Polypropylene (PP)", "90-110°C", "OK", "OK", "OK", "X", "OK", "OK", "OK"],
  ["Polyester (PET)", "130-150°C", "OK", "OK", "OK", "X", "OK", "OK", "OK"],
  ["Nylon Monofilament", "140-160°C", "OK", "OK", "OK", "OK", "X", "X", "Fair"]
];

const operatingGuidance = [
  "Melt blown / string wound cartridges: up to 120°C depending on core material, up to 2.0 bar max DP",
  "Pleated PP/glass fiber cartridges: up to 80°C, up to 3 bar max DP",
  "Membrane cartridges (PES/PTFE/PVDF/Nylon 6): up to 100°C depending on media, up to 4.8 bar max DP",
  "Filter bags: filtration pressure 1.03-1.72 kg/sq.cm, 130-160°C depending on media"
];

export function TechnicalDataPage() {
  return (
    <section className="section">
      <div className="page stack-lg">
        <div>
          <span className="eyebrow">Technical Data</span>
          <h1 className="display page-title">Chemical Resistance Data for Early-Stage Screening</h1>
          <p className="lead">
            Check compatibility, review operating limits, and get documentation to support your selection before you
            commit to a quote.
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
            Chemical Resistance
          </h2>
          <p className="muted">
            Reference data for common process chemicals and general media compatibility, covering aqueous solutions,
            solvents, alkalis, acids, and oils across our polypropylene, polyester, and nylon media lines.
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 760 }}>
              <thead>
                <tr>
                  {["Media", "Max Temp", "Aqueous", "Solvents", "Alkaline", "Strong Alkali", "Acid", "Strong Acid", "Oils"].map(
                    (heading) => (
                      <th
                        key={heading}
                        style={{
                          textAlign: "left",
                          padding: "12px 10px",
                          borderBottom: "1px solid var(--hairline)",
                          color: "var(--ink)"
                        }}
                      >
                        {heading}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {chemicalRows.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, index) => (
                      <td
                        key={`${row[0]}-${index}`}
                        style={{
                          padding: "12px 10px",
                          borderBottom: "1px solid var(--hairline)",
                          color: index === 0 ? "var(--ink)" : "var(--slate)",
                          fontWeight: index === 0 ? 600 : 400
                        }}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="muted">
            For chemicals or process fluids not listed here, send us the details through the contact form and we&apos;ll
            confirm compatibility before you order.
          </p>
        </div>

        <div className="card card-pad">
          <h2 className="display" style={{ marginTop: 0 }}>
            Operating Guidance
          </h2>
          <p className="muted">
            Use the product family spec pages for detailed temperature, pressure, and media selection guidance specific
            to each cartridge or bag type.
          </p>
          <div className="grid-2">
            {operatingGuidance.map((item) => (
              <article key={item} className="surface" style={{ padding: 16 }}>
                <p className="muted" style={{ margin: 0 }}>
                  {item}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="card card-pad">
          <h2 className="display" style={{ marginTop: 0 }}>
            Documentation
          </h2>
          <p className="muted">
            We can supply material compliance statements, batch-level testing paperwork, integrity test data for
            membrane cartridges, and dimensional and performance spec sheets per product family alongside a pricing
            request.
          </p>
        </div>

      </div>
    </section>
  );
}
