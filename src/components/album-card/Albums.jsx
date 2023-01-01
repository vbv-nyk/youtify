import React, { useState } from "react";
import "./albums.css";

function AlbumCard(props) {
  return (
    <div className="album-item">
      <img
        src={props.album.snippet.thumbnails.high.url}
        alt={props.album.snippet.thumbnails.default.url}
        loading="lazy"
      />
      {/* <div className="album-name">{props.album.snippet.title}</div> */}
    </div>
  );
}

function AlbumController({ albumCount, setAlbumCount, albumData }) {
  return (
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
