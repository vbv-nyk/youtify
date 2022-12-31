import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import Player from "./components/player/Player";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Navbar />
      <Player />
    </div>
  );
}

export default App;
