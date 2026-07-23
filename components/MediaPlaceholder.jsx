import { ImageOff } from "lucide-react";
import styles from "./MediaPlaceholder.module.css";

export function MediaPlaceholder({ title, note, className = "" }) {
  return (
    <div className={[styles.placeholder, className].filter(Boolean).join(" ")} aria-label={title}>
      <div className={styles.iconWrap}>
        <ImageOff size={22} />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.note}>{note}</div>
    </div>
  );
}
