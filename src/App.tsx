import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import './App.css';
import Header from './header/Header';
import Hero from './hero/Hero';
import Contact from './contact/Contact';
import Footer from './footer/Footer';

// import ProjectsPage from './projects/ProjectsPage';
const ProjectsPage = React.lazy(() => import('./projects/ProjectsPage'));

// import ProjectPage from './projects/ProjectPage';
const ProjectPage = React.lazy(() => import('./projects/ProjectPage'));

function App() {
  return (
    <Router>
      <Header isHome={false} />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route
          path="/projects"
          element={
            <React.Suspense fallback={<>...</>}>
              <ProjectsPage />
            </React.Suspense>
          }
        />
        <Route
          path="/projects/:id"
          element={
            <React.Suspense fallback={<>...</>}>
              <ProjectPage />
            </React.Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Contact/>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;