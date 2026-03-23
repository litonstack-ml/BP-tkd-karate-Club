"use client";
import { useState, useEffect } from "react";
import { sportsAchievements } from "./achievementData";
import AchievementCard from "./AchievementCard";
import AchievementModal from "./AchievementModal";
import { useModalBack } from "../../hooks/useModalBack";

export default function Achievements() {
  const { selectedItem: selectedSport, openModal, closeModal } = useModalBack();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => { setIsMounted(true); }, []);

  useEffect(() => {
    document.body.style.overflow = selectedSport ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [selectedSport]);

  if (!isMounted) return null;

  return (
    <section id="achievements" className="py-24 bg-gradient-to-b from-green-900 to-emerald-800 text-center min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-black text-yellow-400 mb-4 uppercase italic">Our Achievements</h2>
        <p className="text-blue-100 mb-16 text-lg">Click on a sport to view all our winning milestones</p>

        <div className="flex flex-wrap justify-center gap-8">
          {sportsAchievements.map((item) => (
            <AchievementCard
              key={item.id}
              item={item}
              onClick={() => openModal(item)}
            />
          ))}
        </div>
      </div>

      <AchievementModal
        selectedSport={selectedSport}
        onClose={closeModal}
      />
    </section>
  );
}
