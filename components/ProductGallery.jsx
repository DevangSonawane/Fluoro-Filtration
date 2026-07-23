import { ResponsivePicture } from "./ResponsivePicture";
import { MediaPlaceholder } from "./MediaPlaceholder";
import styles from "./ProductGallery.module.css";

export function ProductGallery({
  images = [],
  placeholderTitle,
  placeholderNote,
  priority = false,
  compact = false,
  layout = "stack"
}) {
  if (!images.length) {
    return (
      <MediaPlaceholder
        title={placeholderTitle || "Product photography coming soon"}
        note={placeholderNote || "TODO: add a matching product photo for this card."}
      />
    );
  }

  const className = [styles.gallery, compact ? styles.compact : "", styles[layout] || ""].filter(Boolean).join(" ");

  if (layout === "strip") {
    const stripImages = images.length > 1 ? [...images, ...images] : images;

    return (
      <div className={className}>
        <div className={styles.stripViewport}>
          <div className={styles.stripTrack}>
            {stripImages.map((image, index) => (
              <div key={`${image.basePath}-${index}`} className={styles.stripFrame}>
                <ResponsivePicture
                  basePath={image.basePath}
                  alt={image.alt}
                  priority={priority && index === 0}
                  loading={priority && index === 0 ? "eager" : "lazy"}
                  sizes="(max-width: 640px) 72vw, (max-width: 1024px) 240px, 260px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const [hero, ...thumbs] = images;

  return (
    <div className={className}>
      <div className={styles.heroFrame}>
        <ResponsivePicture
          basePath={hero.basePath}
          alt={hero.alt}
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      {thumbs.length > 0 ? (
        <div className={styles.thumbRow}>
          {thumbs.slice(0, 3).map((image) => (
            <div key={image.basePath} className={styles.thumbFrame}>
              <ResponsivePicture basePath={image.basePath} alt={image.alt} sizes="120px" />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
