import type { Track } from "../../types";
import styles from "./TrackListItem.module.css";

interface Props {
  track: Track;
  index: number;
  isActive: boolean;
  onSelect: (index: number) => void;
}

export const TrackListItem = ({ track, index, isActive, onSelect }: Props) => {
  return (
    <li
      onClick={() => onSelect(index)}
      className={`${styles.item} ${isActive ? styles.active : ""}`}
    >
      <span className={isActive ? styles.activeNumber : styles.number}>
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className={styles.title}>{track.title}</span>
    </li>
  );
};
