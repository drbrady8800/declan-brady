// Packages
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';

// Styles
import './index.css';
import theme from './theme/theme';
import "./theme/customBootstrap.css";

// Pages
import App from './App';
import AddictionSolitaire from './pages/Games/AddictionSolitaire/AddictionSolitaire';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Pool from './pages/Pool/Pool';

// Types
import { RoutesEnum } from './types';
import ClassCountdown from './pages/ClassCountdown/ClassCountdown';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <Router>
        <Routes>
          <Route path={RoutesEnum.HOME} element={ <Home/> }/>
          <Route path={RoutesEnum.ABOUT_ME} element={ <AboutMe/> }/>
          <Route path={RoutesEnum.CONTACT} element={ <Contact/> }/>
          <Route path={RoutesEnum.PROJECTS} element={ <Projects/> }/>
          <Route path={RoutesEnum.SOLITAIRE} element={ <AddictionSolitaire/> }/>
          <Route path={RoutesEnum.COUNTDOWN} element={ <ClassCountdown/> }/>
          <Route path={RoutesEnum.POOL} element={ <Pool/> }/>
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

