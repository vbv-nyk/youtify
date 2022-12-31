import React from 'react'
import './sidebar.css'
import logo from '../../images/youtube_spotify.png'
export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="logo-container">
        <img src={logo} alt="" />
        <a className="logo" href="www.youtube.com">Youtify</a>
      </div>
      <a className="home" href="www.youtube.com">Home</a>
      <a className="playlist-button" href='google.com'>Playlists</a>
      <a className="downloads" href='google.com'>Downloads</a>
      <a className="browse-youtube" href="google.com">Youtube</a>
      <a className="github-link" href="google.com">View Source Code</a>
    </div>    
  )
}
