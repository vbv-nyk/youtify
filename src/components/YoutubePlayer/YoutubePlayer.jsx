import "./youtubePlayer.css";
import React from "react";
import YouTube from "react-youtube";
import { useParams } from "react-router";
export default function YoutubePlayer({ match }) {
  const { id } = useParams();
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  if (id)
    return (
      <div className="youtube-player-container">
        <YouTube
          videoId={id}
          className="youtube-player"
          iframeClassName="yotube-player-iframe"
          opts={opts}
        />
      </div>
    );
  return <h1>You don't have any video playing</h1>;
}
