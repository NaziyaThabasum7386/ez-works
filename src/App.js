import { React, useState } from "react";
import logo from "./assets/logo.png";
import video from "./assets/logo-video.png";
import presentation from "./assets/presentation.png"
import graphics from "./assets/computer-graphic.png";
import search from "./assets/search.png";
import Translation from "./assets/Translation.png";
import Data from "./assets/Data.png";
import "./App.css";

function App() {

  const [emailid, setEmailid] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handlechange = (e) => {
    const { name, value } = e.target;
    if (name === "emailid") {
      setEmailid(value);
      setError("");
      setMessage("");
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleform = (e) => {
    e.preventDefault();
    if (emailid === "") {
      setError("Please fill the form");
    } else if (!validateEmail(emailid)) {
      setError("Please enter a valid email");
    } else if (emailid.endsWith("@ez.works")) {
      setError("Emails ending with @ez.works are not allowed");
    } else {
      setMessage("Form Submitted");
    }
  };

  return (
    <div className="ez-works-container">
      <div className="header">
        <div className="logo">
          <img src={logo} alt="EZWorks Logo" />
        </div>
        <div className="title">
          Works</div>
        <div className="Suite">Suite Of Business Support Services
        </div>
        <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt...Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed
        </div>
        <div className="email-form">
          <form onSubmit={handleform}>
            <label htmlFor="emailid">
              Email id:
              <input
                type="text"
                id="emailid"
                name="emailid"
                value={emailid}
                onChange={handlechange}
              ></input>
            </label>
            <button type="submit">Contact Me</button>
            {error && <div style={{ color: "red" }}>{error}</div>}
            {message && <div style={{ color: "green" }}>{message}</div>}
          </form>
        </div>
      </div>
      <div className="services">
        <div className="card card1">
          <div className="icon">
            <img src={presentation} alt="Presentation Icon" />
          </div>
          <div className="heading1">Presentation Design</div>
          <div className="content">
            Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
          </div>
        </div>
        <div className="card card2">
          <div className="icon">
            <img src={video} alt="Audio - Visual Production" />
          </div>
          <div className="heading2">Audio - Visual Production</div>
          <div className="content">
            Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
          </div>
        </div>
        <div className="card card3">
          <div className="icon">
            <img src={Translation} alt="Translation" />
          </div>
          <div className="heading3">Translation Services</div>
          <div className="content">
            Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
          </div>
        </div>
        <div className="card card4">
          <div className="icon">
            <img src={graphics} alt="graphics Icon" />
          </div>
          <div className="heading4">Graphic Design</div>
          <div className="content">
            Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
          </div>
        </div>
        <div className="card card5">
          <div className="icon">
            <img src={search} alt="search" />
          </div>
          <div className="heading5">Research & Analytics</div>
          <div className="content">
            Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
          </div>
        </div>
        <div className="card card6">
          <div className="icon">
            <img src={Data} alt="Data" />
          </div>
          <div className="heading6">Data Processing</div>
          <div className="content">
            Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
          </div>
        </div>
      </div>
    </div> 
  );
};

export default App;
