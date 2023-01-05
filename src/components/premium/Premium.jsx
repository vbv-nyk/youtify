import React from "react";
import "./premium.css";

export default function Premium(props) {
  return (
    <div
      className="premium-window-overlay"
      onClick={() => props.setPremiumOpen(false)}
    >
      <div className="premium-window">
        <div className="premium-header">Thank You For Being Here</div>
        <div className="premium-info">
          This website lacks many features and is not on par with platforms like
          YouTube or Spotify. I was just testing my front-end skills and had a
          lot of fun doing so. I plan to learn backend development and improve
          this platform. Thank you for trying it out!
        </div>
      </div>
    </div>
  );
}
