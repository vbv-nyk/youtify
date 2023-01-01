import React from "react";
import "./navbar.css";
export default function Navbar(props) {
  return (
    <div className="navbar">
      <button className="back-button">{`<`}</button>
      <button className="forward-button">{`>`}</button>
      {props.searchEnabled && (
        <input
          className="song-input"
          type="text"
          placeholder="What do you want to listen to?"
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
