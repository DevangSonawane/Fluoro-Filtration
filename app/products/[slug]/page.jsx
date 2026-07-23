import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getProductBySlug, products } from "@/lib/products";
import { SpecTable } from "@/components/SpecTable";
import styles from "./product-detail.module.css";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product not found | Fluoro Filtration" };
  }

  return {
    title: `${product.name} | Fluoro Filtration`,
    description: product.description
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <section className="section">
      <div className="page stack-lg">
        <div className={styles.backRow}>
          <Link href="/products" className="btn btn-secondary">
            <ArrowLeft size={16} />
            Back to products
          </Link>
          <Link href={`/contact?product=${encodeURIComponent(product.name)}`} className="btn btn-cta">
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
          <Link href={`/contact?product=${encodeURIComponent(product.name)}`} className="btn btn-primary">
            Request pricing
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
