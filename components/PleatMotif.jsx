"use client";

import { motion } from "framer-motion";
import styles from "./PleatMotif.module.css";

export function PleatMotif({ variant = "hero", className }) {
  const hero = variant === "hero";
  const divider = variant === "divider";
  const icon = variant === "icon";

  return (
    <svg
      className={[styles.motif, className, hero ? styles.hero : "", divider ? styles.divider : "", icon ? styles.icon : ""]
        .filter(Boolean)
        .join(" ")}
      viewBox="0 0 720 150"
      fill="none"
      aria-hidden="true"
    >
      <motion.path
        d="M20 120 L110 40 L200 120 L290 40 L380 120 L470 40 L560 120 L650 40 L700 80"
        stroke="var(--clarity)"
        strokeOpacity="0.35"
        strokeWidth={hero ? 2 : 1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: hero ? 0.6 : 0.35, ease: "easeOut" }}
      />
      <motion.path
        d="M20 120 L110 40 L200 120 L290 40 L380 120 L470 40 L560 120 L650 40 L700 80"
        stroke="var(--ink)"
        strokeOpacity="0.06"
        strokeWidth={hero ? 10 : 6}
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: hero ? 0.6 : 0.35, ease: "easeOut" }}
      />
    </svg>
  );
}
