import React from "react";
import "./navbar.css";
export default function Navbar(props) {
  function searchSongs() {
    console.log("Searching");
  }
  return (
    <div className="navbar">
      <button
        className="back-button"
        onClick={() => {
          if (props.currentPage > 0) {
            window.history.back();
            props.setCurrentPage(0);
          }
        }}
      >{`<`}</button>
      <button
        className="forward-button"
        onClick={() => {
          window.history.forward();
        }}
      >
        {`>`}
      </button>
      {props.searchEnabled && (
        <input
          className="song-input"
          type="text"
          placeholder="What do you want to listen to?"
          onInput={() => searchSongs()}
        />
      )}

      <a className="premium" href="google.com">
        Premium
      </a>
      <a className="support" href="google.com">
        Support
      </a>
      <a className="signup" href="google.com">
        Sign up
      </a>
      <button className="login" href="google.com">
        Log in
      </button>
    </div>
  );
}
