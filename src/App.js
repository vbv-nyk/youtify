//test
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
import { countries } from "./components/countryList/countryCodes";
import Homepage from "./components/homepage/Hompage";
import Premium from "./components/premium/Premium";

//Free api key
const api_key = "AIzaSyAucuL1DeRayKzpee6-zAcyb12BAVVh6ZI";
let songsAlbumData = [];
async function fetchData(location, songSearch) {
  console.log("key called");
  let countryCode = "";
  if (location !== "") countryCode = countries[location];
  songsAlbumData = [];
  let fetched = 0;
  let maxResults = 50;
  let nextPageToken = "";
  let youtubeData;
  while (fetched < maxResults) {
    if (songSearch === "")
      youtubeData = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=${countryCode}&videoCategoryId=10&key=${api_key}&maxResults=50&pageToken=${nextPageToken}`
      );
    else {
      youtubeData = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${songSearch}&type=video&key=${api_key}&videoCategoryId=10`
      );
    }
    let youtubeDataJSON = await youtubeData.json();
    maxResults = Math.min(youtubeDataJSON.pageInfo.totalResults, maxResults);
    for (let item of youtubeDataJSON.items) {
      songsAlbumData.push(item);
    }
    fetched += 50;
    nextPageToken = youtubeDataJSON.nextPageToken;
  }
}

function App() {
  const [albumContainerName, setAlbumContainerName] =
    useState("Trending Worldwide");
  const [searchEnabled, setSearchEnabled] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [albumData, setAlbumData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [location, setLocation] = useState("");
  const [maxPage, setMaxPage] = useState(0);
  const [premiumOpen, setPremiumOpen] = useState(false);
  const [songSearch, setSongSearch] = useState("");
  const [videoData, setVideoData] = useState({
    title: "",
    thumbnailURL: "",
    artistName: "",
  });
  function loadData() {
    fetchData(location, songSearch).then(() => {
      setAlbumData(songsAlbumData);
      setLoaded(true);
    });
  }
  useEffect(() => {
    loadData();
  }, [location, songSearch]);

  return (
    <Router>
      <div className="App">
        <Sidebar
          setSongSearch={setSongSearch}
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
          premiumOpen={premiumOpen}
          setPremiumOpen={setPremiumOpen}
          setSongSearch={setSongSearch}
          setAlbumContainerName={setAlbumContainerName}
        />
        <Routes>
          <Route
            path="/youtify/"
            exact
            element={
              <Player>
                {loaded && (
                  <Albums
                    setSearchEnabled={setSearchEnabled}
                    albumData={albumData}
                    playing={playing}
                    setPlaying={setPlaying}
                    setVideoData={setVideoData}
                    location={location}
                    setCurrentPage={setCurrentPage}
                    setLocation={setLocation}
                    setSongSearch={setSongSearch}
                    setAlbumContainerName={setAlbumContainerName}
                    albumContainerName={albumContainerName}
                  />
                )}
              </Player>
            }
          />
          <Route
            path="/"
            exact
            element={
              <Player>
                {loaded && (
                  <Albums
                    setSearchEnabled={setSearchEnabled}
                    albumData={albumData}
                    playing={playing}
                    setPlaying={setPlaying}
                    setVideoData={setVideoData}
                    location={location}
                    setCurrentPage={setCurrentPage}
                    setLocation={setLocation}
                    setSongSearch={setSongSearch}
                    setAlbumContainerName={setAlbumContainerName}
                    albumContainerName={albumContainerName}
                  />
                )}
              </Player>
            }
          />
          <Route
            path="/nowPlaying"
            element={
              <Player setCurrentPage={setCurrentPage}>
                <YoutubePlayer
                  setCurrentPage={setCurrentPage}
                  setSearchEnabled={setSearchEnabled}
                />
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
                  setSearchEnabled={setSearchEnabled}
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
