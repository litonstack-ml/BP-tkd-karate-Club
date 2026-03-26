"use client";
import { useState } from "react";

export default function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

  const handleLogin = async (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      fetchMessages();
    } else {
      alert("Wrong password!");
    }
  };

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/messages");
      const result = await res.json();
      if (result.success) setMessages(result.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
        <form onSubmit={handleLogin} className="bg-slate-900 p-8 rounded-2xl border border-white/10 w-full max-w-md">
          <h1 className="text-2xl font-bold text-red-600 mb-6 text-center italic">ADMIN LOGIN</h1>
          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 bg-slate-800 rounded-xl mb-4 text-white outline-none border border-white/5 focus:border-red-600"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full bg-red-600 py-4 rounded-xl font-bold text-white hover:bg-red-700 transition uppercase">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10 border-b border-white/10 pb-6">
          <h1 className="text-3xl font-black text-red-600 uppercase italic">Admin Panel</h1>
          <button onClick={() => setIsLoggedIn(false)} className="bg-slate-800 px-4 py-2 rounded-lg hover:bg-red-900 transition text-sm">Logout</button>
        </div>

        {loading ? (
          <p className="text-center text-gray-400">Loading...</p>
        ) : (
          <div className="grid gap-6">
            {messages.length === 0 ? <p className="text-center text-gray-500">কোনো মেসেজ নেই।</p> :
              messages.map((msg) => (
                <div key={msg._id} className="bg-slate-900/50 p-6 rounded-2xl border border-white/5 shadow-lg">
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-[10px] text-red-500 font-bold uppercase mb-1">Name</p>
                      <h3 className="text-lg font-bold text-yellow-400">{msg.name}</h3>
                    </div>
                    <div>
                      <p className="text-[10px] text-red-500 font-bold uppercase mb-1">Phone</p>
                      <p className="font-bold">{msg.phone}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-red-500 font-bold uppercase mb-1">Email</p>
                      <p className="text-sm text-blue-400">{msg.email}</p>
                    </div>
                  </div>
                  <div className="bg-black/40 p-4 rounded-xl">
                    <p className="text-gray-300 italic">"{msg.message || 'No message'}"</p>
                  </div>
                </div>
              ))
            }
          </div>
        )}
      </div>
    </div>
  );
}
