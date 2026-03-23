"use client";
import { FaFacebook, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

          {/* Column 1: Brand & About */}
          <div className="space-y-4">
            <h2 className="text-2xl font-black tracking-tighter italic">
              KUSTI <span className="text-red-600">BARRACK</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
              আমরা শুধু মার্শাল আর্ট শিখাই না, আমরা শৃঙ্খলা, আত্মরক্ষা এবং আত্মবিশ্বাস তৈরি করি। আমাদের সাথে যুক্ত হয়ে আপনার শারীরিক ও মানসিক শক্তি বৃদ্ধি করুন।
            </p>
            <div className="flex justify-center md:justify-start gap-4 text-xl text-gray-400">
              <a href="#" className="hover:text-red-600 transition-colors"><FaFacebook /></a>
              <a href="#" className="hover:text-red-600 transition-colors"><FaInstagram /></a>
              <a href="#" className="hover:text-red-600 transition-colors"><FaYoutube /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-yellow-400 uppercase tracking-widest">Quick Links</h3>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#sports" className="hover:text-white transition-colors">Martial Arts</a></li>
              <li><a href="#achievements" className="hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Our Gallery</a></li>
            </ul>
          </div>

          {/* Column 3: Training Hours */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-yellow-400 uppercase tracking-widest">Training Hours</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex justify-between md:justify-start md:gap-4 border-b border-white/5 pb-2">
                <span className="font-bold text-white">Sat-Thu (Morning):</span> 6:00 AM - 8:00 AM
              </li>
              <li className="flex justify-between md:justify-start md:gap-4 border-b border-white/5 pb-2">
                <span className="font-bold text-white">Sat-Thu (Afternoon):</span> 4:00 PM - 6:00 PM
              </li>
              <li className="flex justify-between md:justify-start md:gap-4">
                <span className="font-bold text-red-600 uppercase text-xs">Closed on National Holidays</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© {currentYear} BP TAEKWONDO & KARATE CLUB. All rights reserved.</p>
          <p>
            Developed with ❤️ by <span className="text-white font-bold italic">Md Liton Hosain</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
