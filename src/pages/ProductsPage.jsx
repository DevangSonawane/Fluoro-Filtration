import { Link } from "react-router-dom";
import { productCategories, productsByCategory } from "../../lib/products";
import { ProductCard } from "../../components/ProductCard";
import styles from "../../app/products/products.module.css";

const catalogOverview = [
  {
    title: "Filter Media",
    text: "Needle-punched polyester, needle-punched polypropylene, and monofilament mesh media in bulk roll form for custom fabrication."
  },
  {
    title: "Liquid Filter Bags",
    text: "Monofilament nylon/polyester mesh bags and polypropylene, polyester, aramid, or PTFE felt bags."
  },
  {
    title: "Filter Cartridges",
    text: "Melt blown PP, string wound, oil-field pleated, membrane pleated, and carbon cartridges."
  },
  {
    title: "High Flow Cartridges",
    text: "Big-diameter cartridges for high-volume applications with fewer change-outs and lower labor cost."
  },
  {
    title: "Pleated Membrane Cartridges",
    text: "PP, PES, PTFE, Nylon 6, and PVDF membrane cartridge families for critical processes."
  },
  {
    title: "Melt Blown Cartridges",
    text: "Thermally bonded PP depth cartridges for water, food and beverage, plating, chemicals, and more."
  },
  {
    title: "Oil & Carbon Cartridges",
    text: "Oil absorption cartridges, activated carbon, and carbon block formats for polishing and treatment."
  },
  {
    title: "String Wound - Extended Line",
    text: "Standard and extra-long string wound cartridges for high dirt-holding capacity and extended service life."
  },
  {
    title: "Filter Housings",
    text: "Single bag, duplex, multi-bag, cartridge, self-cleaning, and RO membrane housings."
  }
];

const categoryCopy = {
  "Pharmaceutical Process Filtration":
    "Pleated PP, PES, PTFE, and Nylon 6 choices for process liquids and tighter membrane work.",
  "Chemical & Solvent Filtration":
    "Options for aggressive media, solvent service, and controlled process conditions.",
  "High-Flow Industrial Filtration":
    "High-area cartridges for larger volume service where fewer changeouts matter."
};

export function ProductsPage() {
  return (
    <section className="section">
      <div className="page stack-lg">
        <div>
          <span className="eyebrow">Products</span>
          <h1 className="display page-title">One source for filter media, bags, cartridges, housings, and systems.</h1>
          <p className="lead">
            Needle-punched and monofilament media, liquid filter bags, cartridges, high flow units, membrane
            cartridges, melt blown cartridges, oil and carbon cartridges, string wound cartridges, and housings.
          </p>
          <p className="lead">
            Custom length and width are available on request, and quotes are straightforward with no hidden costs.
          </p>
        </div>

        <div className="grid-3">
          {catalogOverview.map((item) => (
            <article key={item.title} className="card card-pad">
              <h2 className="display" style={{ marginTop: 0 }}>
                {item.title}
              </h2>
              <p className="muted">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="card card-pad">
          <h2 className="display" style={{ marginTop: 0 }}>
            Need help choosing a product family?
          </h2>
          <p className="muted">
            We help you choose the right micron rating, media, and housing for your application before you request a
            quote.
          </p>
          <div className={styles.cardActions}>
            <Link to="/contact" className="btn btn-primary">
              Request a Quote
            </Link>
            <Link to="/technical-data" className="btn btn-secondary">
              View Technical Data
            </Link>
          </div>
        </div>

        <div className={styles.familySection}>
          <div className={styles.familyHeader}>
            <div>
              <span className="eyebrow">Technical families</span>
              <h2 className="display section-title">Detailed product families for filtering projects.</h2>
            </div>
          </div>
          <div className={styles.categoryList}>
            {productCategories.map((category) => (
            <article key={category} className="card card-pad">
              <h2 className="display" style={{ marginTop: 0 }}>
                {category}
              </h2>
              <p className="muted">{categoryCopy[category]}</p>
              <div className={styles.cardActions}>
                <a href={`#${categoryToAnchor(category)}`} className="btn btn-secondary">
                  Jump to family grid
                </a>
                <Link to={`/products/${productsByCategory(category)[0]?.slug}`} className="btn btn-primary">
                  View a family
                </Link>
              </div>
            </article>
            ))}
          </div>
        </div>

        {productCategories.map((category) => (
          <section key={category} id={categoryToAnchor(category)} className={styles.familySection}>
            <div className={styles.familyHeader}>
              <div>
                <span className="eyebrow">{category}</span>
                <h2 className="display section-title">{productsByCategory(category).length} product families</h2>
              </div>
              <Link to="/contact" className="btn btn-secondary">
                Send a spec sheet
              </Link>
            </div>
            <div className="grid-3">
              {productsByCategory(category).map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

function categoryToAnchor(category) {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}
