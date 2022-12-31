import React from "react";
import { Children } from "react";

function AlbumCard({ props }) {
  return (
    <div className="album-item">
      <img src={props.src} alt="" srcset="" />
      <div className={props.title}></div>
      <div className={props.desc}></div>
    </div>
  );
}

function AlbumCards({ data }) {
  return <></>;
}

export default function Albums() {
  return <AlbumCards />;
}
