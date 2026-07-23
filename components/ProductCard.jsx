import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { productMediaBySlug } from "../lib/product-media";
import { ProductGallery } from "./ProductGallery";
import styles from "./ProductCard.module.css";

export function ProductCard({ product }) {
  const media = productMediaBySlug[product.slug] || [];

  return (
    <Link to={`/products/${product.slug}`} className={styles.card}>
      <div className={styles.galleryWrap}>
        <ProductGallery images={media} compact />
      </div>
      <div className={styles.topline}>
        <span className="chip">{product.series}</span>
        <ArrowUpRight size={18} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{product.name}</h3>
        <p className={styles.text}>{product.description}</p>
        <div className={styles.meta}>
          <span>{product.media}</span>
          <span>{product.category}</span>
        </div>
      </div>
    </Link>
  );
}
