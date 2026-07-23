import styles from "./ResponsivePicture.module.css";

export function ResponsivePicture({
  basePath,
  alt,
  className = "",
  loading = "lazy",
  sizes = "(max-width: 768px) 100vw, 33vw",
  priority = false
}) {
  const imageLoading = priority ? "eager" : loading;

  return (
    <picture className={[styles.picture, className].filter(Boolean).join(" ")}>
      <source
        type="image/webp"
        srcSet={`${basePath}-400.webp 400w, ${basePath}-1200.webp 1200w`}
        sizes={sizes}
      />
      <img
        className={styles.image}
        src={`${basePath}-1200.jpg`}
        srcSet={`${basePath}-400.jpg 400w, ${basePath}-1200.jpg 1200w`}
        sizes={sizes}
        alt={alt}
        loading={imageLoading}
        decoding="async"
      />
    </picture>
  );
}
