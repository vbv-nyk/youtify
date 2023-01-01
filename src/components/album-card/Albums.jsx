import React, { useState } from "react";
import { Children } from "react";
import "./albums.css";

function AlbumCard(props) {
  return (
    <div className="album-item">
      <img
        src={props.album.snippet.thumbnails.medium.url}
        alt={props.album.snippet.thumbnails.default.url}
        loading="lazy"
      />
      <div className="album-name">{props.album.snippet.title}</div>
    </div>
  );
}

function AlbumCards(props) {
  const [albumCount, setAlbumCount] = useState(0);
  const currentAlbumData = props.albumData.slice(albumCount, albumCount + 6);
  const cards = currentAlbumData.map((card) => {
    return <AlbumCard album={card} key={card.id} />;
  });
  return (
    <div className="album-controller">
      <div className="navigation">
        <button
          className="back-button"
          onClick={() => setAlbumCount((n) => Math.max(n - 6, 0))}
        >{`<`}</button>
        <button
          className="forward-button"
          onClick={() =>
            setAlbumCount((n) => Math.min(n + 6, props.albumData.length - 6))
          }
        >{`>`}</button>
      </div>
      <div className="album-container">{cards}</div>;
    </div>
  );
}

export default function Albums(props) {
  return <AlbumCards albumData={props.albumData} />;
}
