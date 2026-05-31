import type { Release } from "../../types";
import { TrackThumbnailItem } from "./TrackThumbnailItem";
import styles from "./TrackThumbnailList.module.css";

interface Props {
  releases: Release[];
  onSelectRelease: (index: number) => void;
  currentTrackIndex: number;
}

export const TrackThumbnailList = ({
  releases,
  currentTrackIndex,
  onSelectRelease,
}: Props) => {
  return (
    <div className={styles.list}>
      {releases.map((release, index) => (
        <TrackThumbnailItem
          key={release.title}
          release={release}
          index={index}
          isActive={index === currentTrackIndex}
          onSelectRelease={onSelectRelease}
        />
      ))}
    </div>
  );
};
