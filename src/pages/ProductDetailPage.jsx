import { useMemo } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getProductBySlug } from "../../lib/products";
import { SpecTable } from "../../components/SpecTable";
import styles from "../../app/products/[slug]/product-detail.module.css";

export function ProductDetailPage() {
  const { slug } = useParams();
  const product = useMemo(() => getProductBySlug(slug), [slug]);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  return (
    <section className="section">
      <div className="page stack-lg">
        <div className={styles.backRow}>
          <Link to="/products" className="btn btn-secondary">
            <ArrowLeft size={16} />
            Back to products
          </Link>
          <Link to={`/contact?product=${encodeURIComponent(product.name)}`} className="btn btn-cta">
            Request pricing for this product
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className={styles.head}>
          <div>
            <span className="eyebrow">{product.category}</span>
            <h1 className="display page-title">{product.name}</h1>
            <p className="lead">{product.description}</p>
          </div>
          <div className={`card card-pad ${styles.sideCard}`}>
            <div className={styles.sideLabel}>Series</div>
            <div className={styles.sideValue}>{product.series}</div>
            <div className={styles.sideLabel}>Media</div>
            <div className={styles.sideValue}>{product.media}</div>
          </div>
        </div>

        <SpecTable product={product} />

        <div className={styles.note}>
          <p>
            Pricing is confirmed on request so it can track live supplier terms and your actual process conditions.
          </p>
          <Link to={`/contact?product=${encodeURIComponent(product.name)}`} className="btn btn-primary">
            Request pricing
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
