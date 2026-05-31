import type { Release } from "../types/index";

export const releases: Release[] = [
  {
    artist: "Gill Adamson",
    album: "First Album",
    title: "Title Song",
    year: 2025,
    cover: "src/assets/thumb1.png",
    tracks: [
      {
        artist: "Gill Adamson",
        album: "First Album",
        title: "Time Is Now",
        duration: 382,
        src: "/audio/Time-Now.mp3",
        quote:
          "An expansive journey through        high-fidelity soundscapes and dreamy vocals.",
      },
      {
        artist: "Gill Adamson",
        album: "First Album",
        title: "Send Me an Angel",
        duration: 265,
        src: "/audio/Send-Angel.mp3",
        quote:
          "An expansive journey through        high-fidelity soundscapes and dreamy vocals.",
      },
      {
        artist: "Gill Adamson",
        album: "First Album",
        title: "It's a Love Thing",
        duration: 310,
        src: "/audio/Love-Thing.mp3",
        quote:
          "An expansive journey through        high-fidelity soundscapes and dreamy vocals.",
      },
      {
        artist: "Gill Adamson",
        album: "First Album",
        title: "Go Higher Than Love",
        duration: 298,
        src: "/audio/Go-Higher.mp3",
        quote:
          "An expansive journey through        high-fidelity soundscapes and dreamy vocals.",
      },
    ],
  },
  {
    artist: "Gill Adamson",
    album: "Second album",
    title: "Echoes of Tomorrow",
    year: 2023,
    cover: "src/assets/thumb2.png",
    tracks: [
      {
        artist: "Gill Adamson",
        album: "Echoes of Tomorrow",
        title: "Echoes of Tomorrow",
        duration: 245,
        src: "/audio/placeholder.mp3",
        quote: "A ethereal drift through time and space.",
      },
      {
        artist: "Gill Adamson",
        album: "Echoes of Tomorrow",
        title: "Midnight Signal",
        duration: 312,
        src: "/audio/placeholder.mp3",
        quote: "Dark waves of sound colliding with light.",
      },
    ],
  },
  {
    artist: "Gill Adamson",
    album: "Third album",
    title: "Neon Noir",
    year: 2022,
    cover: "src/assets/thumb3.png",
    tracks: [
      {
        artist: "Gill Adamson",
        album: "Neon Noir",
        title: "Neon Noir",
        duration: 198,
        src: "/audio/placeholder.mp3",
        quote: "Cinematic tension wrapped in synth.",
      },
    ],
  },
];
