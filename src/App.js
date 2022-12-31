import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import Player from "./components/player/Player";
import PlayerControl from "./components/controls/PlayerControl";
import Albums from "./components/album-card/Albums";
import { useEffect, useState } from "react";

const api_key = "AIzaSyCALUbMM1nnBb7wP31KnRHog9hb7Bgkx00";
const channel_id = "UC-9-kyTW8ZkZNDHQJ6FgpwQ";
const albumData = [];
async function fetchData() {
  let fetched = 0;
  let maxResults = 100;
  let nextPageToken = "";
  let tempAlbumData = [];
  while (fetched < maxResults) {
    const youtubeData = await fetch(
      `https://www.googleapis.com/youtube/v3/playlists?channelId=${channel_id}&part=snippet&key=${api_key}&maxResults=50&pageToken=${nextPageToken}`
    );
    const youtubeDataJSON = await youtubeData.json();
    maxResults = youtubeDataJSON.pageInfo.totalResults;
    for (let item of youtubeDataJSON.items) {
      tempAlbumData.push(item);
    }
    fetched += 50;
    nextPageToken = youtubeDataJSON.nextPageToken;
  }
  let unique = [];
  tempAlbumData.forEach((element) => {
    if (!unique.includes(element.snippet.title)) {
      unique.push(element.snippet.title);
      albumData.push(element);
    }
  });
  console.log(albumData);
}

function App() {
  const [searchEnabled, setSearchEnabled] = useState(false);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    fetchData().then(() => {
      setLoaded(true);
      console.log(loaded);
    }, []);
  });
  return (
    <div className="App">
      <Sidebar
        searchEnabled={searchEnabled}
        setSearchEnabled={setSearchEnabled}
      />
      <Navbar searchEnabled={searchEnabled} />
      <Player>{loaded && <Albums albumData={albumData} />}</Player>
      <PlayerControl />
    </div>
  );
}

export default App;
