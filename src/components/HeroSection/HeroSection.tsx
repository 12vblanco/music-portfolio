import styles from "./HeroSection.module.css";

export const HeroSection = () => {
  //   const {
  //     isPlaying,
  //     currentTrackIndex,
  //     playTrack,
  //     pauseTrack,
  //     nextTrack,
  //     prevTrack,
  //     selectTrack,
  //   } = useAudioPlayer(releases[0].tracks);
  return (
    <div className={styles.container}>
      <div className={styles.playlistColumn}>1</div>
      <div className={styles.tapeColumn}>2</div>
      <div className={styles.infoColumn}>3</div>
    </div>
  );
};
