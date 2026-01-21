"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  const navLinkBase =
    "relative !text-[16px] !font-[500] !text-[#0B0706] !no-underline";

  const underlineBase =
    "absolute left-0 -bottom-1 h-[2px] w-full bg-[#1C1D28] scale-x-0 origin-left transition-transform duration-300 ease-out";

  const underlineActive = "scale-x-100";

  return (
    <header className="w-full border-b border-gray-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
        {/* Logo */}
        <Link href='/'>
          <img
            src="../SankalpSetuLogo.png"
            className="max-[600px]:h-[44px] max-[600px]:w-[44px] h-[54px] w-auto object-cover "
            alt="SankalpSetu"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8 outline-0">
          {[
            { name: "Home", href: "/" },
            { name: "About us", href: "/About" },
            { name: "What We Do", href: "/what-we-do" },
            { name: "Media", href: "/media" },
            { name: "EventPage", href: "/EventPage" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${navLinkBase} group`}
            >
              {item.name}

              {/* Animated underline */}
              <span
                className={`${underlineBase} group-hover:scale-x-100 ${
                  isActive(item.href) ? underlineActive : ""
                }`}
              />
            </Link>
          ))}

          <Link
            href="/ContactUs"
            className="ml-4 rounded-md bg-[#1C1D28] h-[43px] w-[115px] py-2 text-sm font-semibold text-white !no-underline hover:bg-black transition text-center"
          >
            Contact Us
          </Link>
        </nav>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden !text-2xl"
          aria-label="Toggle Menu"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      {/* Mobile / Tablet Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-100">
          <nav className="flex flex-col gap-4 px-6 py-4 bg-white">
            {[
              { name: "Home", href: "/" },
              { name: "About us", href: "/About" },
              { name: "What We Do", href: "/what-we-do" },
              { name: "Media", href: "/media" },
              { name: "EventPage", href: "/EventPage" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`relative text-sm font-medium ${
                  isActive(item.href) ? "text-[#1C1D28]" : "text-gray-600"
                }`}
              >
                {item.name}

                {/* Active indicator */}
                {isActive(item.href) && (
                  <span className="absolute left-0 -bottom-1 h-[2px] w-6 bg-[#1C1D28]" />
                )}
              </Link>
            ))}

            <Link
              href="/ContactUs"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-block rounded-md bg-[#1C1D28] px-5 py-2 text-sm font-semibold text-white text-center hover:bg-black transition  "
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
