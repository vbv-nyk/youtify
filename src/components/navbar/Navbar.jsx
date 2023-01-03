import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
export default function Navbar(props) {
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
          autoFocus
          placeholder="What do you want to listen to?"
          onKeyDown={(e) => {
            const currentInput = document.querySelector(".song-input");
            if (e.key === "Enter" && e.target.value != props.songSearch) {
              props.setSongSearch(e.target.value);
              currentInput.blur();
            }
          }}
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
