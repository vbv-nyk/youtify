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
import CountryMenu from "./components/countryList/CountryMenu";
import { countries } from "./components/countryList/countryCodes";

const api_key = "AIzaSyAZ1nXtCqJi04wnKMLFVPeN_b2mwIf1sMg";
let songsAlbumData = [];
async function fetchData(location) {
  let countryCode = "";
  if (location !== "") countryCode = countries[location];
  songsAlbumData = [];
  console.log("Key called");
  let fetched = 0;
  let maxResults = 100;
  let nextPageToken = "";
  while (fetched < maxResults) {
    songsAlbumData = [];
    const youtubeData = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=${countryCode}&videoCategoryId=10&key=${api_key}&maxResults=50&pageToken=${nextPageToken}`
    );
    const youtubeDataJSON = await youtubeData.json();
    maxResults = youtubeDataJSON.pageInfo.totalResults;
    for (let item of youtubeDataJSON.items) {
      songsAlbumData.push(item);
    }
    fetched += 50;
    nextPageToken = youtubeDataJSON.nextPageToken;
  }
}

function App() {
  const [searchEnabled, setSearchEnabled] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [albumData, setAlbumData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [location, setLocation] = useState("");
  const [maxPage, setMaxPage] = useState(0);
  const [videoData, setVideoData] = useState({
    title: "",
    thumbnailURL: "",
    artistName: "",
  });
  function loadData() {
    fetchData(location).then(() => {
      setAlbumData(songsAlbumData);
      setLoaded(true);
    });
  }
  useEffect(() => {
    loadData();
  }, [location]);
  return (
    <Router>
      <div className="App">
        <Sidebar
          searchEnabled={searchEnabled}
          setSearchEnabled={setSearchEnabled}
          setPlaying={setPlaying}
          setCurrentPage={setCurrentPage}
        />
        <Navbar
          searchEnabled={searchEnabled}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          setMaxPage={setMaxPage}
          maxPage={maxPage}
        />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Player>
                {loaded && (
                  <Albums
                    albumData={albumData}
                    playing={playing}
                    setPlaying={setPlaying}
                    setVideoData={setVideoData}
                    location={location}
                    setCurrentPage={setCurrentPage}
                    setLocation={setLocation}
                  />
                )}
              </Player>
            }
          />
          <Route
            path="/nowPlaying"
            element={
              <Player setCurrentPage={setCurrentPage}>
                <YoutubePlayer setCurrentPage={setCurrentPage} />
              </Player>
            }
          />
          <Route
            path="/player/:id"
            element={
              <Player setCurrentPage={setCurrentPage}>
                <YoutubePlayer
                  playing={playing}
                  setPlaying={setPlaying}
                  setCurrentPage={setCurrentPage}
                />
              </Player>
            }
          />
        </Routes>
        {playing && <MusicPlayer videoData={videoData} />}
        <PageFooter />
      </div>
    </Router>
  );
}

export default App;
