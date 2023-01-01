import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import Player from "./components/player/Player";
import Albums from "./components/album-card/Albums";
import { useEffect, useState } from "react";
import PageFooter from "./components/footer/PageFooter";
import MusicPlayer from "./components/music-player/MusicPLayer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import YoutubePlayer from "./components/YoutubePlayer/YoutubePlayer";

const api_key = "AIzaSyCALUbMM1nnBb7wP31KnRHog9hb7Bgkx00";
let countryCode = "IN";
let albumData = [];
async function fetchData() {
  let fetched = 0;
  let maxResults = 100;
  let nextPageToken = "";
  while (fetched < maxResults) {
    albumData = [];
    const youtubeData = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=${countryCode}&videoCategoryId=10&key=${api_key}&maxResults=50&pageToken=${nextPageToken}`
    );
    const youtubeDataJSON = await youtubeData.json();
    maxResults = youtubeDataJSON.pageInfo.totalResults;
    for (let item of youtubeDataJSON.items) {
      albumData.push(item);
    }
    fetched += 50;
    nextPageToken = youtubeDataJSON.nextPageToken;
  }
}

function App() {
  const [searchEnabled, setSearchEnabled] = useState(false);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    fetchData().then(() => {
      setLoaded(true);
    }, []);
  });
  return (
    <Router>
      <div className="App">
        <Sidebar
          searchEnabled={searchEnabled}
          setSearchEnabled={setSearchEnabled}
        />
        <Navbar searchEnabled={searchEnabled} />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Player>{loaded && <Albums albumData={albumData} />}</Player>
            }
          />
          <Route
            path="/nowPlaying/"
            exact
            element={<Player>{<YoutubePlayer />}</Player>}
          />
          <Route
            path="/player/:id"
            element={<Player>{<YoutubePlayer />}</Player>}
          />
        </Routes>
        <MusicPlayer />
        <PageFooter />
      </div>
    </Router>
  );
}

export default App;
