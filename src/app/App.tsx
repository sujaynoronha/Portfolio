import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectPage } from './pages/ProjectPage';
import { KoloCaseStudy } from './pages/KoloCaseStudy';
import { LoadingScreen } from './components/LoadingScreen';
import badgeImg from '../assets/badge.png';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Preload the badge image during the loading screen so it's
  // already decoded and cached when the user navigates to About.
  useEffect(() => {
    const img = new Image();
    img.src = badgeImg;
    // Use decode() for async GPU-side decoding (avoids main-thread jank)
    img.decode?.().catch(() => {});
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects/kolo" element={<KoloCaseStudy />} />
            <Route path="/projects/:slug" element={<ProjectPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

