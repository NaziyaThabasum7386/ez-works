// App.js
import React from 'react';
import { SnackbarProvider } from 'notistack';
import EZWorks from './components/ezworks/ezworks';
import Services from './components/Services/Services';
import './App.css';

function App() {
  return (
    <div className="ez-works-container">
      <EZWorks />
      
      <Services />
    </div>
  );
}

function Main() {
  return (
    <SnackbarProvider maxSnack={3}>
      <App />
    </SnackbarProvider>
  );
}

export default Main;
