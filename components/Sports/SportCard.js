import Image from "next/image";

export default function SportCard({ sport, onClick, isPriority }) {
  return (
    <div
      onClick={onClick}
      className="group bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-2xl cursor-pointer transform hover:-translate-y-2 transition-all duration-500 w-full sm:w-[calc(50%-1rem)] md:w-[calc(25%-1.5rem)] min-w-[280px]"
    >
      <div className="relative h-72 w-full overflow-hidden">
        <Image
          src={sport.img}
          alt={sport.name}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
          style={{
            objectPosition: sport.name === "Karate" ? "center 35%" : "center"
          }}
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={isPriority}
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-2xl font-bold text-white">{sport.name}</h3>
        <p className="text-yellow-400 font-bold mt-2 text-sm uppercase tracking-widest">Read More →</p>
      </div>
    </div>
  );
}
