import { FaPause, FaPlay, FaShareAlt } from "react-icons/fa";
import { ImNext2, ImPrevious2 } from "react-icons/im";
import type { Release, Track } from "../../types";
import { formatTime } from "../../utils/FormatTime";
import styles from "./NowPlaying.module.css";
import { TrackThumbnailList } from "./TrackThumbnailList";

interface Props {
  currentTrack: Track;
  isPlaying: boolean;
  currentTime: number;
  tracks: Track[];
  releases: Release[];
  currentTrackIndex: number;
  onPlay: () => void;
  onPause: () => void;
  onSelect: (index: number) => void;
  nextTrack: () => void;
  prevTrack: () => void;
}

export const NowPlaying = ({
  currentTrack,
  isPlaying,
  currentTime,
  releases,
  currentTrackIndex,
  nextTrack,
  prevTrack,
  onPause,
  onPlay,
  onSelect,
}: Props) => {
  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: currentTrack.title,
        text: currentTrack.quote,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.nowPlaying}>Now Playing</div>
      <div className={styles.trackTitle}>{currentTrack.title}</div>
      <div className={styles.timer}>
        <div className={styles.duration}>
          {formatTime(currentTime)} / {formatTime(currentTrack.duration)}
        </div>
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${(currentTime / currentTrack.duration) * 100}%` }}
          />
        </div>
      </div>
      <div className={styles.quote}>{currentTrack.quote}</div>
      <div className={styles.controls}>
        <button
          className={styles.playPause}
          onClick={isPlaying ? onPause : onPlay}
        >
          {isPlaying ? (
            <>
              <FaPause /> Pause
            </>
          ) : (
            <>
              <FaPlay /> Play
            </>
          )}
        </button>
        <button className={styles.prev} onClick={prevTrack}>
          <ImPrevious2 />
        </button>
        <button className={styles.next} onClick={nextTrack}>
          <ImNext2 />
        </button>
        <button className={styles.share} onClick={handleShare}>
          <FaShareAlt />
        </button>
      </div>
      <div className={styles.albumList}>
        <TrackThumbnailList
          releases={releases}
          onSelectRelease={onSelect}
          currentTrackIndex={currentTrackIndex}
        />
      </div>
    </div>
  );
};
