export default function CtaButtons({ onScroll }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
      <button onClick={onScroll} className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg hover:scale-105 transition-all">
        Explore Achievements
      </button>
      <a href="#contact" className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition-all">
        Join Now
      </a>
    </div>
  );
}
