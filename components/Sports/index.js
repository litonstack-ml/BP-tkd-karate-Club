"use client";
import { useState, useEffect } from "react";
import { sports } from "./sportsData";
import SportCard from "./SportCard";
import SportModal from "./SportModal";
import { useModalBack } from "../../hooks/useModalBack";

export default function Sports() {
  const { selectedItem: selectedSport, openModal, closeModal } = useModalBack();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => { setIsMounted(true); }, []);

  useEffect(() => {
    document.body.style.overflow = selectedSport ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [selectedSport]);

  if (!isMounted) return null;

  return (
  <section
    id="sports"
    className="py-24 bg-slate-950 text-center min-h-screen relative overflow-hidden"
  >

    <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none"></div>

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <h2 className="text-4xl md:text-6xl font-black text-yellow-400 mb-12 uppercase italic tracking-tighter">
        Our Martial Arts
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {sports.map((sport, index) => (
          <SportCard
            key={sport.name}
            sport={sport}
            onClick={() => openModal(sport)}
            isPriority={index === 0}
          />
        ))}
      </div>
    </div>

    {selectedSport && (
      <SportModal sport={selectedSport} onClose={closeModal} />
    )}
  </section>
);
}
