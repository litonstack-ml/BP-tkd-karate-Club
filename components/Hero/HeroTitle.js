// HeroTitle.js
export default function HeroTitle() {
  return (
    <>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-none">
        <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 bg-clip-text text-transparent">
          BP Taekwondo & Karate CLUB
        </span>
      </h1>
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="flex items-center gap-2 text-yellow-300 text-xl md:text-2xl">
          <span className="text-3xl">🥋</span>
          <span>Taekwondo</span>
        </div>
        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
        <div className="flex items-center gap-2 text-yellow-300 text-xl md:text-2xl">
          <span className="text-3xl">🥋</span>
          <span>Karate</span>
        </div>
      </div>
      <p className="text-lg md:text-xl mb-10 text-gray-200 max-w-2xl mx-auto leading-relaxed">
        Master the art of discipline, strength, and respect. Join with us for better life.
      </p>
    </>
  );
}
