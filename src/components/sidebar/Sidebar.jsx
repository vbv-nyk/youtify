import React from "react";
import "./sidebar.css";
import logo from "../../images/icons8-youtube-music.svg";
import home from "../../images/home_black_24dp.svg";
import layers from "../../images/layers_black_24dp.svg";
import search from "../../images/search_white_24dp.svg";
import download from "../../images/download_black_24dp.svg";
import youtube from "../../images/icons8-youtube.svg";
import github from "../../images/icons8-github.svg";
import { Link } from "react-router-dom";

export default function Sidebar(props) {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src={logo} alt="" />
        <div className="logo">Youtify</div>
      </div>
      <div className="home-container">
        <img src={home} alt="" />
        <Link
          to="/youtify/"
          exact
          className="home"
          onClick={() => {
            props.setSearchEnabled(false);
            props.setCurrentPage((n) => n + 1);
          }}
        >
          Home
        </Link>
      </div>
      <div className="search-bar-container">
        <img src={search} alt="" />
        <Link
          className="search-bar"
          to="/youtify/"
          onClick={() => {
            props.setSearchEnabled(true);
          }}
        >
          Search
        </Link>
      </div>
      <div className="playlist-button-container">
        <img src={layers} alt="" />
        <div className="playlist-button">Playlists</div>
      </div>
      <div className="downloads-container">
        <img src={download} alt="" />
        <div className="downloads">Downloads</div>
      </div>
      <div className="github-link-container">
        <img src={github} alt="" />
        <a
          className="github-link"
          style={{ cursor: "pointer" }}
          href="https://github.com/vbv-nyk/youtify"
        >
          View Source
        </a>
      </div>
    </div>
  );
}
