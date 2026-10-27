import { useEffect, useRef, useState } from "react";
import { Music2, VolumeX } from "lucide-react";
import { MUSIC_URL } from "../content";
import React from "react";

export default function AudioToggle() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = 0.35;
  }, []);

  async function toggle() {
    if (!MUSIC_URL) {
      alert("Add your song: put an MP3 at public/music/our-song.mp3, then set MUSIC_URL in src/content.js to /music/our-song.mp3.");
      return;
    }
    if (!audioRef.current) return;
    try {
      if (playing) audioRef.current.pause();
      else await audioRef.current.play();
      setPlaying(!playing);
    } catch {
      setPlaying(false);
    }
  }

  return (
    <>
      {MUSIC_URL && <audio ref={audioRef} src={MUSIC_URL} loop preload="none" />}
      <button className="audio-toggle" onClick={toggle} aria-label={playing ? "Pause music" : "Play music"}>
        {playing ? <VolumeX size={17} /> : <Music2 size={17} />}
        <span>{playing ? "Pause song" : "Our song"}</span>
      </button>
    </>
  );
}
