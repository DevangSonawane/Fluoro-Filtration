import { Link } from "react-router-dom";
import { productCategories, productsByCategory } from "../../lib/products";
import { ProductCard } from "../../components/ProductCard";
import styles from "../../app/products/products.module.css";

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
          <h1 className="display page-title">Organized by application first, product type second.</h1>
          <p className="lead">
            Use the category tiles to find the family that matches your process conditions. Each family page ends with
            a quote request instead of a stale price list.
          </p>
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
