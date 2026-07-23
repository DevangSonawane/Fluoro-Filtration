import styles from "./SpecTable.module.css";

export function SpecTable({ product }) {
  return (
    <div className={`surface ${styles.table}`}>
      <div className={styles.row}>
        <div className={styles.label}>Media</div>
        <div className={styles.value}>{product.media}</div>
      </div>
      <div className={styles.row}>
        <div className={styles.label}>Micron ratings available</div>
        <div className={`${styles.value} ${styles.mono}`}>{product.micronRatings.join(" | ")}</div>
      </div>
      <div className={styles.row}>
        <div className={styles.label}>Max operating temperature</div>
        <div className={`${styles.value} ${styles.mono}`}>{product.maxTemperature}</div>
      </div>
      <div className={styles.row}>
        <div className={styles.label}>Max differential pressure</div>
        <div className={`${styles.value} ${styles.mono}`}>{product.maxDifferentialPressure}</div>
      </div>
      <div className={styles.row}>
        <div className={styles.label}>Typical applications</div>
        <div className={styles.pills}>
          {product.applications.map((application) => (
            <span key={application} className="tag">
              {application}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
