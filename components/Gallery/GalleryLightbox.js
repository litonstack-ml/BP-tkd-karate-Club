import Image from "next/image";

export default function GalleryLightbox({ image, onClose }) {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-[150] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 transition-all duration-300"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-[160] bg-white/10 hover:bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md transition-all active:scale-90"
      >
        <span className="text-2xl">✕</span>
      </button>

      <div
        className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={image}
          alt="Full view"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
