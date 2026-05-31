import type { Release } from "../../types";
import styles from "./TrackThumbnailItem.module.css";

interface Props {
  index: number;
  isActive: boolean;
  onSelectRelease: (index: number) => void;
  release: Release;
}

export const TrackThumbnailItem = ({
  release,
  index,
  isActive,
  onSelectRelease,
}: Props) => {
  return (
    <div
      className={`${styles.item} ${isActive ? styles.active : ""}`}
      onClick={() => onSelectRelease(index)}
    >
      <div className={styles.thumbnail}>
        {release.cover ? (
          <img
            src={release.cover}
            alt={release.title}
            className={styles.cover}
          />
        ) : (
          <div className={styles.placeholder} />
        )}
      </div>
      <div className={styles.info}>
        <p className={styles.title}>{release.title}</p>
        <p className={styles.meta}>{release.artist}</p>
      </div>
    </div>
  );
};
