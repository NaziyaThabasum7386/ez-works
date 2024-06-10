// components/Services.js
import React from 'react';
import './Services.css';
import presentation from '../../assets/presentation.png';
import video from '../../assets/logo-video.png';
import graphics from '../../assets/computer-graphic.png';
import search from '../../assets/search.png';
import Translation from '../../assets/Translation.png';
import Data from '../../assets/Data.png';

const Services = () => (
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
);

export default Services;
