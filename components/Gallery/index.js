"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { galleryImages } from "./galleryData";
import GalleryLightbox from "./GalleryLightbox";
import { useModalBack } from "../../hooks/useModalBack";

export default function Gallery() {
  const { selectedItem: selectedImg, openModal, closeModal } = useModalBack();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => { setIsMounted(true); }, []);

  useEffect(() => {
    document.body.style.overflow = selectedImg ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [selectedImg]);

  if (!isMounted) return null;

  return (
    <section id="gallery" className="py-24 bg-gray-50 text-center min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-black text-red-600 mb-4 uppercase italic">
          Our Moments
        </h2>
        <p className="text-gray-500 mb-16 text-lg">Click on an image to view it in full screen</p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              onClick={() => openModal(img)}
              className="relative group h-64 w-full overflow-hidden rounded-2xl cursor-pointer shadow-md"
            >
              <Image
                src={img}
                alt={`Gallery ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold border-2 border-white px-4 py-2 rounded-full uppercase text-xs tracking-widest">
                  View Large
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <GalleryLightbox image={selectedImg} onClose={closeModal} />
    </section>
  );
}
