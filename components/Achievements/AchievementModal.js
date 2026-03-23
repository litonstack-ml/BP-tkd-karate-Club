import Image from "next/image";

const getMedalColor = (type) => {
  switch(type) {
    case 'Gold': return 'bg-yellow-400 text-white';
    case 'Silver': return 'bg-gray-300 text-gray-800';
    case 'Bronze': return 'bg-orange-600 text-white';
    default: return 'bg-blue-600 text-white';
  }
};

export default function AchievementModal({ selectedSport, onClose }) {
  if (!selectedSport) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4" onClick={onClose}>
      <div className="relative bg-white w-full max-w-6xl h-full md:h-[92%] md:rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-11 right-4 z-[110] bg-red-600 text-white px-6 py-2 rounded-full font-bold shadow-2xl hover:bg-red-700 transition active:scale-95 text-sm md:text-base">✕ CLOSE</button>

        {/* Image Side */}
        <div className="relative w-full lg:w-2/5 h-80 lg:h-full bg-gradient-to-br from-gray-900 to-gray-800 flex-shrink-0 flex items-center justify-center p-8">
          <Image src={selectedSport.mainImg} alt={selectedSport.sport} fill className="object-contain" />
          <div className="absolute bottom-10 left-10 text-left z-10">
            <h2 className="text-white text-4xl md:text-6xl font-black uppercase italic">{selectedSport.sport}</h2>
            <div className="h-2 w-24 bg-yellow-400 mt-4"></div>
          </div>
        </div>

        {/* Content Side */}
        <div className="w-full lg:w-3/5 flex flex-col bg-gray-50 overflow-y-auto p-6 md:p-8 lg:p-12">
          {selectedSport.events.map((event, index) => (
            <div key={index} className="mb-16 border-l-4 border-blue-600 pl-6 md:pl-8 relative">
              <div className="absolute -left-[11px] top-0 w-5 h-5 bg-blue-600 rounded-full border-4 border-white"></div>
              <span className="text-blue-600 font-black tracking-widest text-xs">{event.date}</span>
              <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mt-2 mb-4">{event.title}</h3>
              <p className="text-gray-600 mb-8">{event.description}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {event.medals.map((medal, mIdx) => (
                  <div key={mIdx} className="bg-white p-4 rounded-2xl shadow-sm flex flex-col items-center">
                    <div className="relative w-16 h-16 mb-3">
                      <Image src={medal.img} alt={medal.winner} fill className="rounded-full object-cover shadow-md" />
                    </div>
                    <span className={`text-[10px] font-black px-2 py-1 rounded-full mb-1 ${getMedalColor(medal.type)}`}>
                      {medal.type.toUpperCase()}
                    </span>
                    <p className="text-xs font-bold text-gray-800">{medal.winner}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
