"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  // Generate data untuk select (seperti logic di javascript.js kamu)
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 76 }, (_, i) => currentYear - i); // 1950 - sekarang

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
      <div className="bg-[#ccc] p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Register</h2>

        <form className="space-y-4">
          <div className="flex gap-3">
            <input type="text" placeholder="First name" className="w-1/2 p-3 rounded-md bg-[#eee] outline-none" required />
            <input type="text" placeholder="Last name" className="w-1/2 p-3 rounded-md bg-[#eee] outline-none" required />
          </div>

          <input type="email" placeholder="Email address" className="w-full p-3 rounded-md bg-[#eee] outline-none" required />
          <input type="password" placeholder="Enter password" className="w-full p-3 rounded-md bg-[#eee] outline-none" required />

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Date of birth</label>
            <div className="flex gap-2">
              <select className="flex-1 p-3 rounded-md bg-[#eee] outline-none">
                {days.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
              <select className="flex-1 p-3 rounded-md bg-[#eee] outline-none">
                {months.map((m, i) => <option key={m} value={i + 1}>{m}</option>)}
              </select>
              <select className="flex-1 p-3 rounded-md bg-[#eee] outline-none">
                {years.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors mt-4">
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-700">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 underline hover:text-blue-800">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}