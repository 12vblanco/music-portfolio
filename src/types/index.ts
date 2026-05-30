

export interface NavLink {
     label: string, 
     path: string,
    }

export interface Track {
    artist: string,
    album: string,
    title: string,
    duration: number,
    src: string,
}

export interface Release {
    artist: string,
    album: string,
    title: string,
    year: number,
    cover: string,
    tracks: Track[],
}