import { useEffect, useRef, useState } from "react";
import type { Track } from "../types";

export const useAudioPlayer = (tracks: Track[]) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const newTrack = new Audio(tracks[currentTrackIndex].src);
    audioRef.current = newTrack;
    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, [currentTrackIndex]);

  const playTrack = () => {
    audioRef.current?.play();
    setIsPlaying(true);
  };
  const pauseTrack = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
  };
  const nextTrack = () => {
    audioRef.current?.pause();
    setCurrentTrackIndex((prev) => (prev + 1 >= tracks.length ? 0 : prev + 1));
  };
  const prevTrack = () => {
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

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [currentTrackIndex]);

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
