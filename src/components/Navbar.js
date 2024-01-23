import React, { useState } from "react";
import music from "../images/music.png";
import search from "../images/search.png";
import drop from "../images/drop.png";
import up from "../images/up.png";

import "../CSS/Navbar.css";
import { Link } from "react-router-dom";
import Home from "./Home";

const Navbar = () => {
  const [down, setDown] = useState(false);
  return (
    <div>
      <nav className="navbar">
        <ul>
          <img src={music} alt="logo" width={50} style={{ padding: "10px" }} />
          <li className="logo">VAISHNAO</li>
          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            className="link"
            to="/"
          >
            <li className="header">Music</li>
          </Link>
          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            className="link"
            to="/podcast"
          >
            <li className="header">Podcasts</li>
          </Link>

          <input type="text" placeholder="Search" />

          <p className="language">
            Music Languages<h6>{"language"}</h6>{" "}
          </p>
          {down ? (
            <img className="invert" src={drop} alt="" width={30} />
          ) : (
            <img className="invert" src={up} alt="" width={30} />
          )}

          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            className="link"
            to="/signin"
          >
            <li className="header">Login</li>
          </Link>
          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            className="link" 
            to="/signup" 
          >
            <li className="header">SignUp</li>
          </Link>
        </ul>
      </nav>

      <aside>
        <div
          style={{
            width: "15%",
            height: "100%",
            backgroundColor: "#333367",
            overflowY: "scroll",
            position: "absolute",
            left: "0",
            right: "0",
            float: "left",
          }}
        >
          <h4
            style={{ fontWeight: "bold", color: "gray", padding: "25px 50px" }}
          >
            BROWSE
          </h4>
          <ul className="section">
            <li className="section">Top Trending</li>
            <li className="section">Episode</li>
            <li className="section">Genres</li>
            <li className="section">Playlists</li>
            <li className="section">Tracks</li>
            <li className="section">Top Results</li>
          </ul>
          <h4
            style={{ fontWeight: "bold", color: "gray", padding: "25px 50px" }}
          >
            LIBRARY
          </h4>

          <ul className="section">
            <li className="section">History</li>
            <li className="section">Liked Songs</li>
            <li className="section">Albums</li>
            <li className="section">Artists</li>
            <li className="section">Podcasts</li>
            <h2
              style={{
                fontSize: "20px",
                width: "80%",
                height: "30px",
                border: "1px solid red",
                padding: "7px 12px",
                margin: "30px auto",
                borderRadius: "30px",
                color: "white",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              + New Playlist
            </h2>
          </ul>
        </div>
      </aside>

      <footer
        style={{
          position: "fixed",
          left: 0,
          bottom: 0,
          width: "100%",
          height: "70px",
          backgroundColor: "#3c5d7b",
          color: "white",
          textAlign: "center",
        }}
      >
       <input type="range" name="range" id="myProgressBar" min="0" value="0" max="100"/>
        <div class="icons">
            {/* <!-- font awesome icons  --> */}
            <i class="fa-solid fa-3x fa-backward-step" id="previous"></i>
            <i class="fa-regular fa-3x fa-circle-play" id="masterPlay"></i>
            <i class="fa-solid fa-3x fa-forward-step" id="next"></i>
        </div>
        <div class="songInfo">
            {/* <img src="gif.webp" width="43px" alt="" id="gif"> <span id="masterSongName"/>  Salam-e-Ishq</span> */}
        </div>
      </footer>
    </div>
  );
};

export default Navbar;
