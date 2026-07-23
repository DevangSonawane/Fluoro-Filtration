"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { initialFinderState } from "@/lib/finder-logic";
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
  const conditionCount = [state.highTemp, state.solvent, state.autoclavable].filter(Boolean).length;
  const progressStep = conditionCount > 0 ? 3 : state.micron ? 2 : 1;

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
          Interactive guide
        </div>
      </div>

      <div className={styles.progress}>
        {["Process stream", "Micron range", "Special conditions"].map((label, index) => {
          const active = index + 1 <= progressStep;

          return (
            <div key={label} className={`${styles.progressStep} ${active ? styles.progressStepActive : ""}`}>
              <span>{index + 1}</span>
              <strong>{label}</strong>
            </div>
          );
        })}
      </div>

      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles.stepLabel}>Step 1 of 3</div>
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
          <div className={styles.stepLabel}>Step 2 of 3</div>
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
          <div className={styles.stepLabel}>Step 3 of 3</div>
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
    </section>
  );
}
