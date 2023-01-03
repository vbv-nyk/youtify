import "./youtubePlayer.css";
import React, { useEffect } from "react";
import YouTube from "react-youtube";
import { useParams } from "react-router";
export default function YoutubePlayer(props) {
  const { id } = useParams();
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  if (id) {
    props.setSearchEnabled(false);

    return (
      <div className="youtube-player-container">
        <YouTube
          videoId={id}
          className="youtube-player"
          host="https://www.youtube.com"
          iframeClassName="yotube-player-iframe"
          opts={opts}
          setCurrentPage={props.setCurrentPage}
          onReady={() => props.setCurrentPage(1)}
        />
      </div>
    );
  }
  return <h1>You don't have any video playing</h1>;
}
