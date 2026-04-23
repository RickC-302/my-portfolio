/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Footer } from './components/Layout';
import Home from './pages/Home';
import Teaching from './pages/Teaching';
import Projects from './pages/Projects';
import SisuCorner from './pages/SisuCorner';
import SideProjects from './pages/SideProjects';
import ArticleDetail from './pages/ArticleDetail';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col selection:bg-tertiary-fixed selection:text-on-tertiary-fixed">
        <ScrollToTop />
        <Navbar />
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teaching" element={<Teaching />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/sisu-corner" element={<SisuCorner />} />
            <Route path="/side-projects" element={<SideProjects />} />
            <Route path="/inspiration/:id" element={<ArticleDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

