"use client";

import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { Check, ChevronRight } from "lucide-react";
import { getFinderResults, initialFinderState } from "@/lib/finder-logic";
import styles from "./FiltrationFinder.module.css";

const processOptions = [
  { value: "pharmaceutical", label: "Pharmaceutical process liquid", hint: "Aqueous process streams and final filtration" },
  { value: "chemical", label: "Chemical / solvent", hint: "Solvents, acids, alkalis, and mixed streams" },
  { value: "water", label: "Process water", hint: "Higher-volume water and utility filtration" }
];

const micronOptions = [
  { value: "fine", label: "0.1–0.45 µm" },
  { value: "standard", label: "1–10 µm" },
  { value: "coarse", label: "10+ µm" }
];

const conditionOptions = [
  { key: "highTemp", label: "High temperature (>60°C)" },
  { key: "solvent", label: "Aggressive solvent / strong acid-alkali" },
  { key: "autoclavable", label: "Needs to be autoclavable" }
];

export function FiltrationFinder() {
  const [state, setState] = useState(initialFinderState);
  const results = useMemo(() => getFinderResults(state), [state]);

  return (
    <section id="finder" className={`card ${styles.shell}`}>
      <div className={styles.header}>
        <div>
          <span className="eyebrow">Filtration Finder</span>
          <h2 className={`display ${styles.title}`}>A guided selector, not a static table.</h2>
          <p className={styles.text}>
            Answer three short questions and we will narrow the product families to the closest fit for your process.
          </p>
        </div>
        <div className={styles.badge}>
          <Check size={16} />
          Client-side logic for v1
        </div>
      </div>

      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles.stepLabel}>Step 1</div>
          <div className={styles.stepTitle}>What are you filtering?</div>
          <div className={styles.optionGrid}>
            {processOptions.map((option) => {
              const active = state.process === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  className={`${styles.optionCard} ${active ? styles.active : ""}`}
                  onClick={() => setState((prev) => ({ ...prev, process: option.value }))}
                >
                  <strong>{option.label}</strong>
                  <span>{option.hint}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className={styles.step}>
          <div className={styles.stepLabel}>Step 2</div>
          <div className={styles.stepTitle}>What micron range do you need?</div>
          <div className={styles.pills}>
            {micronOptions.map((option) => {
              const active = state.micron === option.value;
              return (
                <button
                  key={option.value}
                  type="button"
                  className={`${styles.pill} ${active ? styles.pillActive : ""}`}
                  onClick={() => setState((prev) => ({ ...prev, micron: option.value }))}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className={styles.step}>
          <div className={styles.stepLabel}>Step 3</div>
          <div className={styles.stepTitle}>Any special conditions?</div>
          <div className={styles.conditions}>
            {conditionOptions.map((option) => {
              const active = state[option.key];
              return (
                <label key={option.key} className={`${styles.checkboxCard} ${active ? styles.active : ""}`}>
                  <input
                    type="checkbox"
                    checked={active}
                    onChange={(event) => setState((prev) => ({ ...prev, [option.key]: event.target.checked }))}
                  />
                  <span>{option.label}</span>
                </label>
              );
            })}
          </div>
        </div>
      </div>

      <div className={styles.results}>
        <div className={styles.resultHead}>
          <div>
            <div className={styles.stepLabel}>Result</div>
            <div className={styles.stepTitle}>Recommended product families</div>
          </div>
          <Link to="/products" className="btn btn-secondary">
            View all products
            <ChevronRight size={16} />
          </Link>
        </div>

        <div className={styles.resultList}>
          {results.map(({ product, reason }) => (
            <Link key={product.slug} to={`/products/${product.slug}`} className={styles.resultCard}>
              <div className={styles.resultName}>{product.name}</div>
              <p className={styles.resultReason}>{reason}</p>
              <div className={styles.resultMeta}>
                <span>{product.series}</span>
                <span>
                  {product.micronRatings[0]} to {product.micronRatings[product.micronRatings.length - 1]}
                </span>
              </div>
            </Link>
          ))}
          {results.length === 0 ? (
            <div className={styles.empty}>
              No direct match yet. We can still review the spec sheet and narrow it manually.
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
