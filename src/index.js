import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import theme from './theme/theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <Router>
        <Routes>
          <Route exact path="/" element={ <Home/> }/>
          <Route exact path="/about-me" element={ <AboutMe/> }/>
          <Route exact path="/contact" element={ <Contact/> }/>
          <Route exact path="/Projects" element={ <Projects/> }/>
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

