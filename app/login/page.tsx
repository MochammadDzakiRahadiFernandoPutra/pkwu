"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-[#ccc] p-8 rounded-lg shadow-lg w-[350px]">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">Login</h2>
        
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Alamat email"
            className="w-full p-3 rounded-md bg-[#eee] border-none text-black placeholder-gray-500 focus:ring-2 focus:ring-blue-500 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Masukkan password"
            className="w-full p-3 rounded-md bg-[#eee] border-none text-black placeholder-gray-500 focus:ring-2 focus:ring-blue-500 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors mt-4"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-black font-medium">
          Belum punya akun?{" "}
          <Link href="/register" className="text-blue-700 underline hover:text-blue-900">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}