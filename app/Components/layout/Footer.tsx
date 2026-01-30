"use client";

import Image from "next/image";
import { contactService } from "@/app/services/contact.service";
import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [form, setForm] = useState({
    email: "",
  });

  const footerLinks = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About us",
      href: "/About",
    },
    {
      label: "What We Do",
      href: "/what-we-do",
    },
    {
      label: "Media",
      href: "/media",
    },
    {
      label: "EventPage",
      href: "/EventPage",
    },
  ];

  const SocialMedia = [
    {
      label: "TWITTER",
      href: "https://x.com/SankalpSetu",
    },

    {
      label: "FACEBOOK",
      href: "https://www.facebook.com/profile.php?id=61583230627609",
    },
    {
      label: "INSTAGRAM",
      href: "https://www.instagram.com/sankalpsetu_official/",
    },
  ];

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const hadleSubscribe = async () => {
    setError("");
    setSuccess("");

    if (!form.email) {
      setError("Email is required");
      return;
    }

    try {
      setLoading(true);

      const res = await contactService.submitContact({
        full_name: "Newsletter Subscriber",
        phone: "N/A",
        email: form.email,
        resone: "Newsletter Subscription",
        city: "N/A",
        message: "Subscribed from footer",
      });

      setSuccess(res.message);
      setForm({ email: "" });
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="relative bg-[#1c1b1b]  text-white overflow-hidden max-w-[1440px] mx-auto">
      {/* Background Text */}
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute right-6 sm:right-24 top-0
         sm:top-16 text-[80px] sm:text-[120px] lg:text-[200px] font-bold tracking-[0.2em] text-white/5 max-[600px]:text-[40px] ">
          SANKALP
        </span>
        <span className="absolute right-6 sm:right-24 bottom-10 sm:bottom-24 text-[80px] sm:text-[120px] lg:text-[200px] font-bold tracking-[0.2em] text-white/5 ">
          SETU
        </span>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-12 lg:py-[51px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          {/* LEFT */}
          <div className="max-w-full lg:max-w-md">
            <div className="flex flex-col gap-3 mb-6 lg:mb-8">
              <Image
                src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769168057/ss_page_assets/tuxk3zhj7xz8qpg6n8pw.png"
                alt="Sankalp Setu"
                width={60}
                height={71}
              />
              <span className="text-[26px] sm:text-[28px] lg:text-[32px] font-bold tracking-wide">
                SANKALP SETU FOUNDATION
              </span>
            </div>

            <p className="text-[14px] sm:text-[15px] leading-[1.8] text-white/80 mb-8 lg:mb-10">
              Behind every program is a person. Behind every number is a name.
              Behind every success is a story worth telling. Subscribe to meet
              the youth we're empowering, the communities we're serving, and the
              real change your support creates. No corporate jargon—just honest
              impact from the field.
            </p>

            {/* EMAIL INPUT */}
            <div className="border border-white/60 px-3 w-full lg:max-w-[70%]">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="EMAIL TO SUBSCRIBE"
                className="w-full bg-transparent outline-none placeholder:text-white tracking-[0.15em] h-[54px] text-sm"
              />
            </div>

            {error && <p className="text-red-400 text-xs mt-2">{error}</p>}
            {success && (
              <p className="text-green-400 text-xs mt-2">{success}</p>
            )}

            <button
              onClick={hadleSubscribe}
              disabled={loading}
              className="uppercase tracking-[0.2em] !mt-8 lg:mt-[40px] text-[15px] lg:text-[16px] font-bold border-b border-white pb-1 disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 gap-12 sm:gap-20 lg:gap-32">
            <div>
              <h4 className="tracking-[0.3em] !mb-6 lg:mb-10 text-sm">MAIN</h4>
              <ul className="space-y-4 lg:space-y-6 text-sm tracking-[0.15em] p-0">
                {footerLinks.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="!no-underline !text-[#fff] "
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="tracking-[0.3em] !mb-6 lg:mb-10 text-sm">SOCIAL</h4>
              <ul className="space-y-4 lg:space-y-6 text-sm tracking-[0.15em] p-0">
                {SocialMedia.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="!no-underline !text-[#fff] "
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
