"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">

        {/* Logo */}
        <img
          src="../SankalpSetuLogo.png"
          className="h-[55px] object-cover"
          alt="SankalpSetu"
        />

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-[#0B0706] no-underline">
            Home
          </Link>

          <Link href="/About" className="text-sm font-medium text-gray-500 hover:text-[#0B0706] no-underline">
            About us
          </Link>

          <Link href="/what-we-do" className="text-sm font-medium text-gray-500 hover:text-[#0B0706] no-underline">
            What We Do
          </Link>

          <Link href="/media" className="text-sm font-medium text-gray-500 hover:text-[#0B0706] no-underline">
            Media
          </Link>

          <Link href="/contact" className="text-sm font-medium text-gray-500 hover:text-[#0B0706] no-underline">
            Contact
          </Link>

          <Link
            href="/donate"
            className="ml-4 rounded-md bg-[#1C1D28] px-5 py-2 text-sm font-semibold text-white no-underline hover:bg-black transition"
          >
            Donate
          </Link>
        </nav>

        {/* Hamburger Button (Mobile & Tablet) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-2xl"
          aria-label="Toggle Menu"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      {/* Mobile / Tablet Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-100">
          <nav className="flex flex-col gap-4 px-6 py-4 bg-white">
            <Link href="/" onClick={() => setIsOpen(false)} className="text-sm font-medium text-[#0B0706]">
              Home
            </Link>

            <Link href="/About" onClick={() => setIsOpen(false)} className="text-sm font-medium text-gray-600">
              About us
            </Link>

            <Link href="/what-we-do" onClick={() => setIsOpen(false)} className="text-sm font-medium text-gray-600">
              What We Do
            </Link>

            <Link href="/media" onClick={() => setIsOpen(false)} className="text-sm font-medium text-gray-600">
              Media
            </Link>

            <Link href="/contact" onClick={() => setIsOpen(false)} className="text-sm font-medium text-gray-600">
              Contact
            </Link>

            <Link
              href="/donate"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-block rounded-md bg-[#1C1D28] px-5 py-2 text-sm font-semibold text-white text-center hover:bg-black transition"
            >
              Donate
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
