import Image from "next/image";

export default function AchievementCard({ item, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer transform hover:-translate-y-2 transition-all duration-300 w-full sm:w-[calc(50%-1rem)] md:w-[calc(25%-1.5rem)] min-w-[280px]"
    >
      <div className="relative h-72 w-full overflow-hidden bg-gray-200">
        <Image
          src={item.mainImg}
          alt={item.sport}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
          style={{ objectPosition: item.sport === "Karate" ? "center 35%" : "center 50%" }}
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-blue-900">{item.sport}</h3>
        <p className="text-gray-500 font-bold mt-1 uppercase tracking-widest text-xs">
          {item.events.length} {item.events.length === 1 ? 'Achievement' : 'Achievements'}
        </p>
        <div className="mt-4 inline-flex items-center text-blue-600 font-bold text-sm">
          View All Wins <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
        </div>
      </div>
    </div>
  );
}
