import React from "react";
import birdpng from '../images/bird.png'
import nfd from '../images/nfd2.png'
import nfdlogo from '../images/nfdlogo.png'
import "../App.css";
const FirstPage = () => {
  return (
    <div className="firstpage">
      <nav className="navbar ">
        <div className="nfd"> <img src={nfd} alt="" /> </div>
        <div className="navitems">
          <ul>
            <li>About</li>
            <li>Aggregator</li>
            <li>Features</li>
            <li>Roadmap</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="navbar-icon">
          <img src={birdpng} alt="" />
        </div>
      </nav>
      <section className="first-section">
        <div className="nfdplatform">
          <div className="logo-div">
            <img src={nfdlogo} alt="" />
          </div>
          <div className="nfdplatform-heading">
            <span>
              NFD platform
            </span>
            <br />
            <span id="nfdspecial">“NFD.gg”</span>
          </div>
          <div className="firstpagepara">
            <p> <p>An Alpha community 2.0 with its own platform for participating, searching, and tracking any crypto related information.</p></p>
          </div>
          <div className="nfd-first-section-button">
            <div>Info in one place</div>
            <div>Private tools</div>
            <div>Wide functionality</div>
          </div>
          <div className="nfd-try-button">
            <button onClick={ ()=> window.open('https://app.nfd.gg/login')}>Try platform</button>
            <span>How it works?</span>
          </div>




        </div>
        <div className="nfdsoftware">
          <div className="clapdiv">
            <span id="clapemoji">👏</span> <span>software by NFD</span>
          </div>
          <div className="nfdsoftware-heading">
            <span>
              NFD software
            </span>
            <br />
            <span id="nfdspecial">
              “Combine”</span>
          </div>
          <div className="firstpagepara">
            <p>Handle your crypto-wallets, farm activities and retrodrops on a single app.</p>
          </div>
          <div className="software-third-section">
          <div className="nfd-first-section-button">
            <div>MacOs</div>
            <div>Windows</div>
           
          </div>
          <div className="nfd-try-button">
            <button>Download</button>
            <span>How it works?</span>
          </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default FirstPage;
