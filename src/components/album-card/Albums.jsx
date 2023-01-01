import React, { useState } from "react";
import "./albums.css";
import playButton from "../../images/play_song.png";

function AlbumCard(props) {
  function changeNavColor() {
    const navBar = document.querySelector(".navbar");
    const R = Math.trunc(Math.random() * 80);
    const G = Math.trunc(Math.random() * 80);
    const B = Math.trunc(Math.random() * 80);
    console.log(R, G, B);
    navBar.style.background = `linear-gradient(to bottom,rgba(${R},${G},${B},1.0),rgba(${G},${R},${B},1.0))`;
  }
  function defaultNavColor() {
    const navBar = document.querySelector(".navbar");
    navBar.style.background = "#222222";
  }
  return (
    <div
      className="album-item"
      onMouseEnter={() => changeNavColor()}
      onMouseLeave={() => defaultNavColor()}
    >
      <img
        src={props.album.snippet.thumbnails.high.url}
        alt={props.album.snippet.thumbnails.default.url}
        loading="lazy"
      />
      <div className="overlay-info">
        <img src={playButton} />
        <div className="album-name">{props.album.snippet.title}</div>
      </div>
    </div>
  );
}

function AlbumController({ albumCount, setAlbumCount, albumData }) {
  return (
    <div className="header-holder">
      <div className="title">Trending in India</div>
      <div className="navigation">
        <button
          className="back-button"
          onClick={() => setAlbumCount((n) => Math.max(n - 9, 0))}
        >{`Previous Page`}</button>
        <button
          className="forward-button"
          onClick={() =>
            setAlbumCount((n) => Math.min(n + 9, albumData.length - 9))
          }
        >{`Next Page`}</button>
      </div>
    </div>
  );
}
function AlbumCards(props) {
  const [albumCount, setAlbumCount] = useState(0);
  const currentAlbumData = props.albumData.slice(albumCount, albumCount + 9);
  const cards = currentAlbumData.map((card) => {
    return <AlbumCard album={card} key={card.id} />;
  });
  return (
    <div className="album-controller">
      <AlbumController
        albumCount={albumCount}
        setAlbumCount={setAlbumCount}
        albumData={props.albumData}
      />
      <div className="album-container">{cards}</div>;
    </div>
  );
}

export default function Albums(props) {
  return <AlbumCards albumData={props.albumData} />;
}
