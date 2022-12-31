import React from "react";
import { Children } from "react";
import "./albums.css";

function AlbumCard(props) {
  return (
    <div className="album-item" id="props.album.id">
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
  const cards = props.albumData.map((card) => {
    return <AlbumCard album={card} />;
  });
  return <div class="album-container">{cards}</div>;
}

export default function Albums(props) {
  return <AlbumCards albumData={props.albumData} />;
}
