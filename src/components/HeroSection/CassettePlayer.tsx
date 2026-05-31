import type { Track } from "../../types";
import styles from "./CassettePlayer.module.css";

interface Props {
  currentTrack: Track;
  isPlaying: boolean;
}

export const CassettePlayer = ({ currentTrack, isPlaying }: Props) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={`${styles.screw} ${styles.screwTL}`} />
        <div className={`${styles.screw} ${styles.screwTR}`} />
        <div className={`${styles.screw} ${styles.screwBL}`} />
        <div className={`${styles.screw} ${styles.screwBR}`} />
        <div className={styles.inner}>
          <div className={styles.reelArea}>
            <div
              className={`${styles.reel} ${isPlaying ? styles.reelSpinning : ""}`}
            >
              <div className={styles.reelInner}></div>
            </div>
            <div className={styles.tapeWindow} />
            <div
              className={`${styles.reel} ${isPlaying ? styles.reelSpinning : ""}`}
            >
              <div className={styles.reelInner}></div>
            </div>
          </div>
        </div>
        <div className={styles.label}>
          <span className={styles.tapeTitle}>{currentTrack.title}</span>
          <div className={styles.sideLabel}>
            {" "}
            <span className={styles.sideA}>Side A</span>
            <span className={styles.recorded}>Recorded in Stereo</span>
          </div>
        </div>
      </div>
    </>
  );
};
