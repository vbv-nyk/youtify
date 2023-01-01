import React from "react";
import "./musicPlayer.css";
import play from "../../images/play.svg";
import pause from "../../images/pause.svg";
import nextSong from "../../images/next.svg";
import previousSong from "../../images/previous.svg";
import shuffle from "../../images/shuffle.svg";
import repeat from "../../images/repeat.svg";

export default function MusicPlayer() {
  return (
    <div className="music-info">
      <div className="music-player">
        <img src={repeat} alt="" className="repeat-song" />
        <img src={previousSong} alt="" className="previous-song" />
        <img src={pause} alt="" className="play-pause-song" />
        <img src={nextSong} alt="" className="next-song" />
        <img src={shuffle} alt="" className="shuffle-song" />
      </div>
      <div className="seek-bar-container">
        <div className="current-duration">0:00</div>
        <div className="seek-bar"></div>
        <div className="max-duration">0:00</div>
      </div>
    </div>
  );
}
