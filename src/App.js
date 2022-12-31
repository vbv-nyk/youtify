import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import Player from "./components/player/Player";
import PlayerControl from "./components/controls/PlayerControl";
import Albums from "./components/album-card/Albums";
import { useState } from "react";

// const api_key = "AIzaSyCALUbMM1nnBb7wP31KnRHog9hb7Bgkx00";
// const channel_id = "UC-9-kyTW8ZkZNDHQJ6FgpwQ";
// async function fetchData() {
//   let fetched = 0;
//   let maxResults = 100;
//   let nextPageToken = "";
//   while (fetched < maxResults) {
//     const youtubeData = await fetch(
//       `https://www.googleapis.com/youtube/v3/playlists?channelId=${channel_id}&part=snippet&key=${api_key}&maxResults=50&pageToken=${nextPageToken}`
//     );
//     const youtubeDataJSON = await youtubeData.json();
//     maxResults = youtubeDataJSON.pageInfo.totalResults;
//     for (let item of youtubeDataJSON.items) {
//       if (
//         item.snippet.title.charAt(0) == "R" &&
//         item.snippet.title.charAt(1) == "D"
//       ) {
//         console.log("True");
//       } else {
//         console.log(item.snippet.title);
//       }
//     }
//     fetched += 50;
//     nextPageToken = youtubeDataJSON.nextPageToken;
//   }
// }

// fetchData().then((result) => {});

function App() {
  const [searchEnabled, setSearchEnabled] = useState(false);
  return (
    <div className="App">
      <Sidebar
        searchEnabled={searchEnabled}
        setSearchEnabled={setSearchEnabled}
      />
      <Navbar searchEnabled={searchEnabled} />
      <Player>
        <Albums></Albums>
      </Player>
      <PlayerControl />
    </div>
  );
}

export default App;
