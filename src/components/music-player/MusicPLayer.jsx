import React from "react";
import "./musicPlayer.css";
import play from "../../images/play.svg";
import pause from "../../images/pause.svg";
import nextSong from "../../images/next.svg";
import previousSong from "../../images/previous.svg";

export default function MusicPlayer() {
  return (
    <div className="music-info">
      <div className="music-player">
        <img src={previousSong} alt="" className="previous-song" />
        <img src={pause} alt="" className="play-pause-song" />
        <img src={nextSong} alt="" className="next-song" />
      </div>
      <div className="seek-bar"></div>
    </div>
  );
}
