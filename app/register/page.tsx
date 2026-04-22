"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  const years = Array.from({ length: 76 }, (_, i) => new Date().getUTCFullYear() - i);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="bg-[#ccc] p-8 rounded-lg shadow-lg w-full max-w-md text-black">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">Register</h2>

        <form className="space-y-4 text-black">
          <div className="flex gap-3">
            <input type="text" placeholder="First name" className="w-1/2 p-3 rounded-md bg-[#eee] text-black placeholder-gray-500 outline-none" />
            <input type="text" placeholder="Last name" className="w-1/2 p-3 rounded-md bg-[#eee] text-black placeholder-gray-500 outline-none" />
          </div>

          <input type="email" placeholder="Email address" className="w-full p-3 rounded-md bg-[#eee] text-black placeholder-gray-500 outline-none" />
          <input type="password" placeholder="Enter password" className="w-full p-3 rounded-md bg-[#eee] text-black placeholder-gray-500 outline-none" />

          <div className="space-y-2">
            <label className="text-sm font-bold text-black">Date of birth</label>
            <div className="flex gap-2">
              <select className="flex-1 p-3 rounded-md bg-[#eee] text-black outline-none cursor-pointer">
                {days.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
              <select className="flex-1 p-3 rounded-md bg-[#eee] text-black outline-none cursor-pointer">
                {months.map((m, i) => <option key={m} value={i + 1}>{m}</option>)}
              </select>
              <select className="flex-1 p-3 rounded-md bg-[#eee] text-black outline-none cursor-pointer">
                {years.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors mt-4">
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-black font-medium">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-700 underline hover:text-blue-900">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}