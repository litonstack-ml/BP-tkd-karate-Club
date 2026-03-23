"use client";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-red-600 uppercase italic">Get In Touch</h2>
          <p className="text-gray-400 mt-4 text-lg">Contact us for admission or any inquiries</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left Side: Contact Info */}
          <div className="space-y-8">
            <div className="bg-slate-900/50 p-8 rounded-3xl border border-white/5 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center text-red-600">
                    <FaPhone />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 uppercase font-bold">Call Us</p>
                    <p className="text-lg font-bold">+880 1610557623</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-600">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 uppercase font-bold">Email Us</p>
                    <p className="text-lg font-bold">liton73024@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center text-green-600">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 uppercase font-bold">Location</p>
                    <p className="text-lg font-bold">Rajarbagh Police Line,Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10 pt-8 border-t border-white/10 flex gap-4">
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-all"><FaFacebook /></a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-all"><FaInstagram /></a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-all"><FaYoutube /></a>
              </div>
            </div>
          </div>

          {/* Right Side: Quick Message Form */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-slate-900">Send us a Message</h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" className="w-full p-4 bg-gray-100 rounded-xl text-slate-900 outline-none focus:ring-2 focus:ring-red-600 transition" required />
                <input type="tel" placeholder="Phone Number" className="w-full p-4 bg-gray-100 rounded-xl text-slate-900 outline-none focus:ring-2 focus:ring-red-600 transition" required />
              </div>
              <input type="email" placeholder="Email Address" className="w-full p-4 bg-gray-100 rounded-xl text-slate-900 outline-none focus:ring-2 focus:ring-red-600 transition" />
              <textarea placeholder="Describe yourself" rows="4" className="w-full p-4 bg-gray-100 rounded-xl text-slate-900 outline-none focus:ring-2 focus:ring-red-600 transition resize-none"></textarea>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-4 rounded-xl transition-all uppercase tracking-widest shadow-lg shadow-red-600/30 active:scale-95">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
