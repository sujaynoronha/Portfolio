import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectPage } from './pages/ProjectPage';
import { KoloCaseStudy } from './pages/KoloCaseStudy';
import { LoadingScreen } from './components/LoadingScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

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

