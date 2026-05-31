import { useEffect, useRef, useState } from "react";
import type { Track } from "../types";

export const useAudioPlayer = (tracks: Track[]) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const shouldAutoPlayRef = useRef(false);

  useEffect(() => {
    const newTrack = new Audio(tracks[currentTrackIndex].src);
    audioRef.current = newTrack;

    if (shouldAutoPlayRef.current) {
      newTrack.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn("Audio playback blocked:", err);
      });
    }

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, [currentTrackIndex]);

  const playTrack = () => {
    audioRef.current
      ?.play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch((err) => {
        console.warn("Audio playback blocked:", err);
      });
  };
  const pauseTrack = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
  };
  const nextTrack = () => {
    shouldAutoPlayRef.current = isPlaying;
    audioRef.current?.pause();
    setCurrentTrackIndex((prev) => (prev + 1 >= tracks.length ? 0 : prev + 1));
  };
  const prevTrack = () => {
    shouldAutoPlayRef.current = isPlaying;
    audioRef.current?.pause();
    setCurrentTrackIndex((prev) =>
      prev - 1 < 0 ? tracks.length - 1 : prev - 1
    );
  };
  const selectTrack = (index: number) => {
    setCurrentTrackIndex(index);
  };
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      const currentTime = audio.currentTime;
      setCurrentTime(currentTime);
    };

    const handleLoadedMetadata = () => {
      const duration = audio.duration;
      setDuration(duration);
    };

    const handleEnded = () => {
      if (currentTrackIndex < tracks.length - 1) {
        shouldAutoPlayRef.current = true;
        setCurrentTrackIndex((prev) => prev + 1);
      } else {
        setIsPlaying(false);
      }
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentTrackIndex, tracks.length]);

  return {
    currentTrackIndex,
    isPlaying,
    currentTime,
    duration,
    playTrack,
    pauseTrack,
    nextTrack,
    prevTrack,
    selectTrack,
  };
};
