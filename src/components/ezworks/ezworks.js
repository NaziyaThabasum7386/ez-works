// components/Header.js
import React from 'react';
import './ezworks.css';
import EmailForm from '../../components/EmailForm/EmailForm';
import logo from '../../assets/logo.png';

const EZWorks = () => (
  <div className="header">
    <div className="logo">
      <img src={logo} alt="EZWorks Logo" />
    </div>
    <div className="title">Works</div>
    <div className="Suite">Suite Of Business Support Services</div>
    <div className="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt...Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed
    </div>
    <EmailForm />
  </div>
);

export default EZWorks;
