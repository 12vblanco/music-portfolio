import type { Track } from "../../types";
import styles from "./TrackList.module.css";
import { TrackListItem } from "./TrackListItem";

interface Props {
  tracks: Track[];
  currentTrackIndex: number;
  onSelect: (index: number) => void;
}

export const TrackList = ({ tracks, currentTrackIndex, onSelect }: Props) => {
  return (
    <section>
      <div className={styles.label}>The Playlist</div>
      <ul className={styles.list}>
        {tracks.map((track, index) => (
          <TrackListItem
            key={track.src}
            track={track}
            index={index}
            isActive={index === currentTrackIndex}
            onSelect={onSelect}
          />
        ))}
      </ul>
    </section>
  );
};
