import { useState } from "react";
import { releases } from "../../data/tracks";
import { useAudioPlayer } from "../../hooks/useAudioPlayer";
import { CassettePlayer } from "./CassettePlayer";
import styles from "./HeroSection.module.css";
import { NowPlaying } from "./NowPlaying";
import { TrackList } from "./TrackList";

export const HeroSection = () => {
  const [currentReleaseIndex, setCurrentReleaseIndex] = useState(0);

  const currentRelease = releases[currentReleaseIndex];

  const {
    isPlaying,
    currentTrackIndex,
    playTrack,
    pauseTrack,
    nextTrack,
    currentTime,
    prevTrack,
    selectTrack,
  } = useAudioPlayer(currentRelease.tracks);

  const handleSelectRelease = (index: number) => {
    setCurrentReleaseIndex(index);
    selectTrack(0);
  };

  return (
    <div className={styles.container}>
      <div className={styles.playlistColumn}>
        <TrackList
          tracks={currentRelease.tracks}
          currentTrackIndex={currentTrackIndex}
          onSelect={selectTrack}
        />
      </div>
      <div className={styles.tapeColumn}>
        <div className={styles.blobPurple} />
        <div className={styles.blobTeal} />
        <CassettePlayer
          currentTrack={currentRelease.tracks[currentTrackIndex]}
          isPlaying={isPlaying}
        />
      </div>
      <div className={styles.infoColumn}>
        <NowPlaying
          currentTime={currentTime}
          currentTrack={currentRelease.tracks[currentTrackIndex]}
          currentTrackIndex={currentReleaseIndex}
          isPlaying={isPlaying}
          tracks={currentRelease.tracks}
          onPause={pauseTrack}
          onPlay={playTrack}
          releases={releases}
          onSelect={handleSelectRelease}
          nextTrack={nextTrack}
          prevTrack={prevTrack}
        />
      </div>
    </div>
  );
};
