"use client";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero/index";
import Sports from "../components/Sports/index";
import Achievements from "../components/Achievements/index";
import Gallery from "../components/Gallery/index";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);

    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Main content in main tab */}
      <main className="flex-grow">
        <Hero />
        <Sports />
        <Achievements />
        <Gallery />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
