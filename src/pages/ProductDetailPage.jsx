import { useMemo } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getProductBySlug } from "../../lib/products";
import { SpecTable } from "../../components/SpecTable";
import { productMediaBySlug } from "../../lib/product-media";
import { ProductGallery } from "../../components/ProductGallery";
import styles from "../../app/products/[slug]/product-detail.module.css";

export function ProductDetailPage() {
  const { slug } = useParams();
  const product = useMemo(() => getProductBySlug(slug), [slug]);
  const media = productMediaBySlug[product?.slug] || [];

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
        </div>

        <div className={styles.head}>
          <div>
            <span className="eyebrow">{product.category}</span>
            <h1 className="display page-title">{product.name}</h1>
            <p className="lead">{product.description}</p>
          </div>
        </div>

        <div className={styles.galleryBlock}>
          <ProductGallery images={media} priority layout="strip" />
        </div>

        <SpecTable product={product} />

        <div className={styles.note}>
          <p>
            Pricing is confirmed on request so it can track live supplier terms and your actual process conditions.
          </p>
        </div>
      </div>
    </section>
  );
}
