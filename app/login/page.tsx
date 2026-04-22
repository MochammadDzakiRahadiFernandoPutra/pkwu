"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login dengan:", { email, password });
    // Masukkan logika login kamu di sini
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-[#ccc] p-8 rounded-lg shadow-lg w-[350px]">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Alamat email"
            className="w-full p-3 rounded-md bg-[#eee] border-none focus:ring-2 focus:ring-blue-400 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Masukkan password"
            className="w-full p-3 rounded-md bg-[#eee] border-none focus:ring-2 focus:ring-blue-400 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors mt-4"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-700">
          Belum punya akun?{" "}
          <Link href="/register" className="text-blue-600 underline hover:text-blue-800">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}