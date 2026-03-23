"use client";
import Image from "next/image";
import { FaPhone, FaFacebook } from "react-icons/fa";

export default function SportModal({ sport, onClose }) {
  if (!sport) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4" onClick={onClose}>
      <div className="relative bg-white w-full max-w-6xl h-full md:h-[90vh] md:rounded-3xl shadow-2xl flex flex-col lg:flex-row overflow-hidden" onClick={(e) => e.stopPropagation()}>

        {/* Close Button */}
        <button onClick={onClose} className="absolute top-11 right-3 lg:top-8 lg:right-8 z-[110] bg-red-600 text-white px-5 py-2 rounded-full font-bold shadow-lg hover:bg-red-700 transition active:scale-95 text-sm">
          ✕ CLOSE
        </button>

        {/* Left side: Image */}
        <div className="relative w-full lg:w-1/3 h-64 lg:h-full bg-gray-800 flex-shrink-0 overflow-hidden">
          <Image src={sport.img} alt={sport.name} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-10 left-10 text-left z-10">
            <h2 className="text-white text-5xl font-black uppercase italic leading-none">{sport.name}</h2>
            <div className="h-2 w-20 bg-red-600 mt-4"></div>
          </div>
        </div>

        {/* Right side: Details */}
        <div className="w-full lg:w-2/3 p-6 md:p-12 overflow-y-auto bg-white text-left">

          {/* About Section */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-blue-900 mb-4 border-b-2 border-gray-100 pb-2">About the Sport</h3>
            <p className="text-gray-600 text-lg leading-relaxed">{sport.description}</p>
          </section>

          {/* Mentors Section - UPDATED */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 border-b-2 border-gray-100 pb-2">Our Mentors</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {sport.coaches?.map((person, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <Image src={person.img} alt={person.name} fill className="object-cover rounded-xl shadow-inner bg-gray-200" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 leading-tight text-lg">{person.name}</h4>
                    <p className="text-red-600 text-[10px] font-black uppercase tracking-widest mt-1">{person.role}</p>

                    {/* Achievement Tag */}
                    <div className="mt-2 mb-3">
                       <span className="text-blue-800 font-bold text-[11px] bg-blue-100 px-3 py-1 rounded-full inline-block shadow-sm">
                         🏆 {person.achievement}
                       </span>
                    </div>

                    {/* Social & Contact Buttons */}
                    <div className="flex items-center gap-3">
                      {person.phone && (
                        <a href={`tel:${person.phone}`} className="p-2 bg-white rounded-lg border border-gray-200 text-gray-600 hover:text-green-600 hover:shadow-md transition-all" title="Call Mentor">
                          <FaPhone size={14} />
                        </a>
                      )}
                      {person.fb && (
                        <a href={person.fb} target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-lg border border-gray-200 text-gray-600 hover:text-blue-600 hover:shadow-md transition-all" title="Facebook Profile">
                          <FaFacebook size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Players Section */}
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 border-b-2 border-gray-100 pb-2">Meet Our Athletes</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-6">
              {sport.players?.map((player, i) => (
                <div key={i} className="flex flex-col items-center group">
                  <div className="relative w-20 h-20 mb-3 overflow-hidden rounded-full ring-4 ring-blue-50 group-hover:ring-red-100 transition-all duration-300 shadow-lg">
                    <Image src={player.img} alt={player.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <p className="text-xs font-black text-gray-800 text-center leading-tight uppercase tracking-tighter">{player.name}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
