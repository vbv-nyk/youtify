import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import Player from "./components/player/Player";
import PlayerControl from "./components/controls/PlayerControl";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Navbar />
      <Player />
      <PlayerControl />
    </div>
  );
}

export default App;
