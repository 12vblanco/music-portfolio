import { releases } from "../../data/tracks";
import { useAudioPlayer } from "../../hooks/useAudioPlayer";
import { CassettePlayer } from "./CassettePlayer";
import styles from "./HeroSection.module.css";
import { TrackList } from "./TrackList";

export const HeroSection = () => {
  const {
    isPlaying,
    currentTrackIndex,
    playTrack,
    pauseTrack,
    nextTrack,
    prevTrack,
    selectTrack,
  } = useAudioPlayer(releases[0].tracks);
  return (
    <div className={styles.container}>
      <div className={styles.playlistColumn}>
        <TrackList
          tracks={releases[0].tracks}
          currentTrackIndex={currentTrackIndex}
          onSelect={selectTrack}
        />
      </div>
      <div className={styles.tapeColumn}>
        <CassettePlayer
          currentTrack={releases[0].tracks[currentTrackIndex]}
          isPlaying={isPlaying}
        />
      </div>
      <div className={styles.infoColumn}>3</div>
    </div>
  );
};
