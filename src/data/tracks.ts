import type { Release } from "../types/index";

export const releases: Release[] = [
  {
    artist: "Artist Name",
    album: "Album Name",
    title: "Title Song",
    year: 2025,
    cover: "cover src",
    tracks: [
      {
        artist: "Artist Name",
        album: "Album Name",
        title: "Time Is Now",
        duration: 382,
        src: "src1",
      },
      {
        artist: "Artist Name",
        album: "Album Name",
        title: "Send Me an Angel",
        duration: 265,
        src: "src2",
      },
      {
        artist: "Artist Name",
        album: "Album Name",
        title: "Its a Love Thing",
        duration: 310,
        src: "src3",
      },
      {
        artist: "Artist Name",
        album: "Album Name",
        title: "Go Higher Than Love",
        duration: 298,
        src: "src4",
      },
    ],
  },
];
