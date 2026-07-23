import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Atom,
  Box,
  Cpu,
  Droplets,
  FlaskConical,
  Flame,
  Filter,
  Gauge,
  Layers3,
  Pill,
  ShoppingBag,
  UtensilsCrossed,
  Waves,
  Wind
} from "lucide-react";
import { MediaPlaceholder } from "../../components/MediaPlaceholder";
import { ResponsivePicture } from "../../components/ResponsivePicture";
import { homepageCategoryMedia } from "../../lib/product-media";
import styles from "../../app/page.module.css";

const trustMetrics = [
  {
    value: 24,
    suffix: "h",
    label: "quote turnaround target"
  },
  {
    value: 6,
    label: "technical product families"
  },
  {
    value: 9,
    label: "industries served"
  },
  {
    value: 1,
    label: "source for filtration supply"
  }
];

const categoryCards = [
  {
    title: "Liquid Filter Bags",
    icon: ShoppingBag,
    text: "Mesh and felt bags in polypropylene, polyester, aramid, and PTFE formats.",
    media: homepageCategoryMedia["Liquid Filter Bags"]
  },
  {
    title: "Filter Cartridges",
    icon: Filter,
    text: "Melt blown, string wound, pleated, membrane, and carbon cartridge options.",
    media: homepageCategoryMedia["Filter Cartridges"]
  },
  {
    title: "High Flow Cartridges",
    icon: Gauge,
    text: "Big-diameter cartridges for high-volume systems that need fewer change-outs.",
    media: homepageCategoryMedia["High Flow Cartridges"]
  },
  {
    title: "Pleated Membrane Cartridges",
    icon: Atom,
    text: "PP, PES, PTFE, Nylon 6, and PVDF membrane cartridge families.",
    media: homepageCategoryMedia["Pleated Membrane Cartridges"]
  },
  {
    title: "Melt Blown Cartridges",
    icon: Wind,
    text: "Thermally bonded PP depth cartridges for broad industrial service.",
    media: homepageCategoryMedia["Melt Blown Cartridges"]
  },
  {
    title: "Oil & Carbon Cartridges",
    icon: Flame,
    text: "Oil absorption cartridges, activated carbon, and carbon block formats.",
    media: homepageCategoryMedia["Oil & Carbon Cartridges"]
  },
  {
    title: "String Wound - Extended Line",
    icon: Waves,
    text: "Standard and extra-long string wound cartridges for higher dirt-holding capacity.",
    media: homepageCategoryMedia["String Wound - Extended Line"]
  },
  {
    title: "Filter Housings",
    icon: Box,
    text: "Single bag, duplex, multi-bag, cartridge, self-cleaning, and RO membrane housings.",
    media: homepageCategoryMedia["Filter Housings"]
  }
];

const industries = [
  {
    title: "Water & Wastewater Treatment",
    icon: Droplets,
    text: "Bag housings, melt blown cartridges, and self-cleaning filters."
  },
  {
    title: "Food & Beverage",
    icon: UtensilsCrossed,
    text: "Sanitary housings, PP pleated cartridges, and carbon cartridges."
  },
  {
    title: "Pharmaceuticals",
    icon: Pill,
    text: "PES, PTFE, and Nylon 6 membrane cartridges."
  },
  {
    title: "Chemical Processing",
    icon: FlaskConical,
    text: "String wound, PVDF cartridges, and polypropylene housings."
  },
  {
    title: "Oil & Gas",
    icon: Flame,
    text: "Oil-field pleated cartridges and oil absorption bags."
  },
  {
    title: "Electronics & Semiconductor",
    icon: Cpu,
    text: "Jumbo pleated cartridges and PES/PTFE membranes."
  },
  {
    title: "RO / Desalination",
    icon: Waves,
    text: "High flow cartridges and RO membrane housings."
  },
  {
    title: "Power Plant",
    icon: Gauge,
    text: "Backwashable PP pleated cartridges for condensate treatment."
  },
  {
    title: "Paints & Coatings",
    icon: Filter,
    text: "Fine-micron cartridges for finish quality."
  }
];

export function HomePage() {
  return (
    <>
      <section className={`section ${styles.hero}`}>
        <div className={`page ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <span className="eyebrow">Fluoro Filtration</span>
            <h1 className={`display ${styles.heroTitle}`}>Industrial Filtration Solutions, Delivered Fast</h1>
            <p className={styles.heroText}>
              Your trusted source for filter bags, cartridges, housings, and complete filtration systems, backed by
              technical expertise and stock availability.
            </p>
            <p className={styles.heroText}>
              We supply high-performance liquid filtration products to industries that cannot afford downtime. From
              fine particulate removal to high-flow industrial filtration, we help you narrow the right solution with
              fast, technical support.
            </p>
            <div className={styles.actions}>
              <a href="#finder" className="btn btn-primary">
                Find the right filter
                <ArrowRight size={16} />
              </a>
              <Link to="/contact" className="btn btn-secondary">
                Request a Quote
              </Link>
              <Link to="/products" className="btn btn-secondary">
                Download Product Catalog
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.metricsSection}`}>
        <div className={`page ${styles.metricsViewport}`}>
          <div className={styles.metricsTrack}>
            {trustMetrics.map((metric) => (
              <MetricCard key={metric.label} metric={metric} />
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.productsSection}`}>
        <div className="page stack-lg">
          <div className={styles.sectionHeader}>
            <div>
              <span className="eyebrow">Product families</span>
              <h2 className={`display ${styles.sectionTitle}`}>Eight clear product families with room for product photos.</h2>
            </div>
            <p className={styles.sectionText}>
              Each card is built with a dedicated image slot, so real photography can drop into the layout later
              without changing the structure.
            </p>
          </div>
          <div className={styles.categoryGrid}>
            {categoryCards.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className={`card ${styles.categoryCard}`}>
                  {item.media ? (
                    <div className={styles.categoryMedia}>
                      <ResponsivePicture
                        basePath={item.media.basePath}
                        alt={item.media.alt}
                        className={styles.categoryImage}
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <span className={styles.mediaLabel}>{item.media.caption}</span>
                    </div>
                  ) : (
                    <>
                      {/* TODO: add dedicated filter media roll photography for this category. */}
                      <MediaPlaceholder
                        className={styles.categoryPlaceholder}
                        title="Filter Media roll photography coming soon"
                        note="TODO: add dedicated media-roll photography for this category."
                      />
                    </>
                  )}
                  <div className={styles.categoryTopline}>
                    <Icon size={18} />
                    <span className="chip">{item.title}</span>
                  </div>
                  <h3 className={`display ${styles.cardTitle}`}>{item.title}</h3>
                  <p className={styles.cardText}>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`section ${styles.industrySection}`}>
        <div className="page stack-lg">
          <div className={styles.sectionHeader}>
            <div>
              <span className="eyebrow">Industries served</span>
              <h2 className={`display ${styles.sectionTitle}`}>A visual strip of the sectors we support.</h2>
            </div>
            <p className={styles.sectionText}>
              The same applications list, now presented as a compact horizontal strip so it reads more like a set of
              credibility badges.
            </p>
          </div>
          <div className={styles.industryStrip}>
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <article key={industry.title} className={styles.industryCard}>
                  <div className={styles.industryIcon}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className={styles.industryTitle}>{industry.title}</div>
                    <p className={styles.industryText}>{industry.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

    </>
  );
}

function MetricCard({ metric }) {
  const value = useCountUp(metric.value, 1200);

  return (
    <article className={`card ${styles.metricCard}`}>
      <div className={styles.metricValue}>
        {value}
        {metric.suffix ?? ""}
      </div>
      <div className={styles.metricLabel}>{metric.label}</div>
    </article>
  );
}

function useCountUp(target, duration = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frame = 0;
    let start = 0;

    function tick(timestamp) {
      if (!start) {
        start = timestamp;
      }

      const progress = Math.min((timestamp - start) / duration, 1);
      setValue(Math.round(target * progress));

      if (progress < 1) {
        frame = window.requestAnimationFrame(tick);
      }
    }

    frame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [target, duration]);

  return value;
}
