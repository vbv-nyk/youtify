import React from "react";
import "./sidebar.css";
import logo from "../../images/icons8-youtube-music.svg";
import home from "../../images/home_black_24dp.svg";
import layers from "../../images/layers_black_24dp.svg";
import search from "../../images/search_black_24dp.svg";
import download from "../../images/search_black_24dp.svg";
import youtube from "../../images/icons8-youtube.svg";
import github from "../../images/icons8-github.svg";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src={logo} alt="" />
        <a className="logo" href="www.youtube.com">
          Youtify
        </a>
      </div>
      <div className="home-container">
        <img src={home} alt="" />
        <a className="home" href="www.youtube.com">
          Home
        </a>
      </div>
      <div className="playlist-button-container">
        <img src={layers} alt="" />
        <a className="playlist-button" href="google.com">
          Playlists
        </a>
      </div>
      <div className="downloads-container">
        <img src={download} alt="" />
        <a className="downloads" href="google.com">
          Downloads
        </a>
      </div>
      <div className="browse-youtube-container">
        <img src={youtube} alt="" />
        <a className="browse-youtube" href="google.com">
          Youtube
        </a>
      </div>
      <div className="github-link-container">
        <img src={github} alt="" />
        <a className="github-link" href="google.com">
          View Source
        </a>
      </div>
    </div>
  );
}
