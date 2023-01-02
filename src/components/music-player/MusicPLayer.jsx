import React from "react";
import "./musicPlayer.css";
import play from "../../images/play.svg";
import pause from "../../images/pause.svg";
import nextSong from "../../images/next.svg";
import previousSong from "../../images/previous.svg";
import shuffle from "../../images/shuffle.svg";
import lyrics from "../../images/lyrics.svg";
import speaker from "../../images/speaker.svg";
import repeat from "../../images/repeat.svg";

export default function MusicPlayer(props) {
  return (
    <div className="player-info">
      <div className="thumnail-music-artist">
        <img src={props.videoData.thumbnailURL} className="music-thumbnail" />
        <div className="currently-playing">
          <div className="current-song-details">
            <div className="music-name">{props.videoData.title}</div>
            <div className="artists">{props.videoData.artistName}</div>
          </div>
        </div>
      </div>
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
          <input type="range" className="seek-bar"></input>
          <div className="max-duration">0:00</div>
        </div>
      </div>
      <div className="extra-controls">
        <img src={lyrics} className="lyrics-view" />
        <img src={speaker} className="volume-control" />
        <input type="range" />
      </div>
    </div>
  );
}
