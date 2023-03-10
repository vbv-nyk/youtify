import React, { useEffect, useState } from "react";
import "./albums.css";
import playButton from "../../images/play_song.png";
import { Link } from "react-router-dom";
import CountryMenu from "../countryList/CountryMenu";

function AlbumCard(props) {
  function changeNavColor() {
    const navBar = document.querySelector(".navbar");
    const R = Math.trunc(Math.random() * 80);
    const G = Math.trunc(Math.random() * 80);
    const B = Math.trunc(Math.random() * 80);
    navBar.style.background = `linear-gradient(to bottom,rgba(${R},${G},${B},1.0),rgba(${G},${R},${B},1.0))`;
  }
  function defaultNavColor() {
    const navBar = document.querySelector(".navbar");
    navBar.style.background = "#222222";
  }
  function updateMusicController() {
    props.setPlaying(true);
    const currentSongData = {
      title: props.album.snippet.title,
      thumbnailURL: props.album.snippet.thumbnails.high.url,
      artistName: props.album.snippet.channelTitle,
    };
    props.setVideoData(currentSongData);
  }
  return (
    <div
      className="album-item"
      onMouseEnter={() => changeNavColor()}
      onMouseLeave={() => defaultNavColor()}
    >
      <Link
        to={`/player/${props.album.id.videoId ?? props.album.id}`}
        style={{ textDecoration: "none" }}
        className="overlay-info"
        onClick={() => {
          updateMusicController();
        }}
      >
        <div className="img-container">
          <img
            className="album-img"
            src={props.album.snippet.thumbnails.high.url}
            alt={props.album.snippet.thumbnails.default.url}
            loading="lazy"
          />
          <img src={playButton} className="play-button" />
        </div>
        <div className="album-name">{props.album.snippet.title}</div>
      </Link>
    </div>
  );
}

function Navigation(props) {
  return (
    <div className="navigation">
      <button
        className="change-location"
        onClick={() => {
          props.setLocationMenu((n) => !n);
        }}
      >
        {props.selectLocation}
      </button>
      <button
        className="back-button"
        onClick={() => props.setAlbumCount((n) => Math.max(n - 9, 0))}
      >{`Previous Page`}</button>
      <button
        className="forward-button"
        onClick={() =>
          props.setAlbumCount((n) =>
            Math.min(n + 9, props.albumData.length - 9)
          )
        }
      >{`Next Page`}</button>
    </div>
  );
}
function AlbumController({
  albumCount,
  setAlbumCount,
  albumData,
  location,
  setLocation,
  albumContainerName,
  setSongSearch,
  setAlbumContainerName,
}) {
  let selectLocation = "Change Location";
  const [locationMenu, setLocationMenu] = useState(false);

  return (
    <div className="header-holder no-scrollbar">
      <div className="location-info">
        <div className="title">{`${albumContainerName}`}</div>
      </div>

      <Navigation
        setAlbumCount={setAlbumCount}
        albumData={albumData}
        setLocationMenu={setLocationMenu}
        selectLocation={selectLocation}
      />
      {locationMenu && (
        <CountryMenu
          location={location}
          setLocation={setLocation}
          setAlbumContainerName={setAlbumContainerName}
          setLocationMenu={setLocationMenu}
          setSongSearch={setSongSearch}
        />
      )}
    </div>
  );
}
function AlbumCards(props) {
  const [albumCount, setAlbumCount] = useState(0);
  const currentAlbumData = props.albumData.slice(albumCount, albumCount + 9);

  const cards = currentAlbumData.map((card) => {
    return (
      <AlbumCard
        album={card}
        searchEnabled={props.setSearchEnabled}
        key={card.id.videoId ?? card.id}
        playing={props.playing}
        setPlaying={props.setPlaying}
        setVideoData={props.setVideoData}
      />
    );
  });
  return (
    <div className="album-controller">
      <AlbumController
        setSongSearch={props.setSongSearch}
        albumCount={albumCount}
        setAlbumCount={setAlbumCount}
        albumData={props.albumData}
        setLocation={props.setLocation}
        location={props.location}
        albumContainerName={props.albumContainerName}
        setAlbumContainerName={props.setAlbumContainerName}
      />
      <div className="album-container">{cards}</div>;
    </div>
  );
}

export default function Albums(props) {
  return (
    <>
      <AlbumCards
        albumData={props.albumData}
        playing={props.playing}
        setPlaying={props.setPlaying}
        setVideoData={props.setVideoData}
        location={props.location}
        setLocation={props.setLocation}
        setSearchEnabled={props.setSearchEnabled}
        setSongSearch={props.setSongSearch}
        albumContainerName={props.albumContainerName}
        setAlbumContainerName={props.setAlbumContainerName}
      />
    </>
  );
}
