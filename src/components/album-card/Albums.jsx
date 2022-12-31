import React from "react";
import { Children } from "react";
import "./albums.css";

function AlbumCard(props) {
  console.log(props.album.snippet);
  return (
    <div className="album-item" id="props.album.id">
      <img
        src={props.album.snippet.thumbnails.medium.url}
        alt={props.album.snippet.thumbnails.default.url}
        loading="lazy"
      />
      <div className="album-name">{props.album.snippet.title}</div>
      <div className="album-description">{props.album.snippet.description}</div>
    </div>
  );
}

function AlbumCards(props) {
  const cards = props.albumData.map((card) => {
    return <AlbumCard album={card} />;
  });
  return <div>{cards}</div>;
}

export default function Albums(props) {
  return <AlbumCards albumData={props.albumData} />;
}
