"use client";
import { useState, useEffect } from "react";
import HeroBackground from "./HeroBackground";
import HeroBadge from "./HeroBadge";
import HeroTitle from "./HeroTitle";
import CtaButtons from "./CtaButtons";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  const scrollToNext = () => {
    document.getElementById("achievements")?.scrollIntoView({ behavior: "smooth" });
  };

return (
    <section
      id="hero"
      className="relative h-[90vh] flex items-center justify-center text-center text-white overflow-hidden pt-20 md:pt-24"
    >
      <HeroBackground />
      <div className={`relative z-10 px-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <HeroBadge />
        <HeroTitle />
        <CtaButtons onScroll={scrollToNext} />
      </div>
    </section>
  );
}
