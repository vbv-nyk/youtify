import React, { Children } from "react";
import "./player.css";

export default function Player({ children }) {
  return <div className="player">{children}</div>;
}
