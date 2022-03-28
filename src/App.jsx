import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import TeamMember from "./TeamMember";
import WhatWeDo from "./WhatWeDo";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./ScrollToTop";

AOS.init({
  duration: 700,
});

function App() {
  return (
    <div className="font-sans overflow-x-hidden">
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="/team/:name" element={<TeamMember />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;
