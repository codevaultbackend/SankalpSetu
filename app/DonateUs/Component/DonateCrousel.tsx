"use client";

import { useState, useEffect } from "react";

/* ---------------- SLIDES DATA ---------------- */

const slides = [
  {
    tag: "Donate",
    title: "Empower Lives Through Your Donation",
    desc: "Support our NGO’s mission to provide education, food, and healthcare to underprivileged communities. Your donation creates real, measurable impact.",
    date: "Ongoing Campaign",

    images: {
      main: "/ngo-heping1.jpg",
      left: "/ngo-heping2.jpg",
      right: "/ngo-heping3.jpg",
    },
  },

  {
    tag: "Support",
    title: "Help Us Educate and Protect Future Generations",
    desc: "Your contribution helps children access quality education, nutritious meals, and a safe environment to grow, learn, and dream bigger.",
    date: "Education & Child Welfare",

     images: {
      main: "/ngo-heping1.jpg",
      left: "/ngo-heping2.jpg",
      right: "/ngo-heping3.jpg",
    },
  },

  {
    tag: "Impact",
    title: "Together We Create Lasting Change",
    desc: "Every donation supports sustainable development programs, women empowerment initiatives, and emergency relief for families in need.",
    date: "Community Development",

     images: {
      main: "/ngo-heping1.jpg",
      left: "/ngo-heping2.jpg",
      right: "/ngo-heping3.jpg",
    },
  },
];


/* ---------------- COMPONENT ---------------- */

export default function TravelCarousel({
    open,
    setOpen,
}: {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const [index, setIndex] = useState(0);

    /* Auto Play (Optional) */
    useEffect(() => {
        const timer = setInterval(() => {
            next();
        }, 7000);

        return () => clearInterval(timer);
    }, [index]);


    const next = () => {
        setIndex((prev) => (prev + 1) % slides.length);
    };

    const prev = () => {
        setIndex((prev) =>
            prev === 0 ? slides.length - 1 : prev - 1
        );
    };

    const slide = slides[index];

    return (
        <section className="w-full bg-white py-20 overflow-hidden">


            <div className="max-w-7xl mx-auto px-4">


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">


                    {/* ================= LEFT ================= */}
                    <div className="space-y-6 transition-all duration-500">


                        {/* Main Heading */}
                    

                        {/* Slide Card */}
                        <div className="max-w-sm space-y-4">


                            {/* Tag */}
                            <span className="inline-block px-3 py-1 border rounded-full text-xs font-medium text-gray-700">
                                {slide.tag}
                            </span>


                            {/* Title */}
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-black line-clamp-3">
                                {slide.title}
                            </h2>


                            {/* Description */}
                            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                                {slide.desc}
                            </p>


                            {/* Date */}
                            <div className="flex items-center gap-2 text-gray-500 text-sm">

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                </svg>

                                {slide.date}

                            </div>


                            {/* Controls */}
                            <div className="flex items-center gap-3 pt-2">


                                <button
                                    onClick={prev}
                                    className="w-10 h-10 rounded-lg border border-gray-300
                             flex items-center justify-center
                             hover:bg-gray-100 transition"
                                >
                                    ←
                                </button>


                                <button
                                    onClick={next}
                                    className="w-10 h-10 rounded-lg bg-indigo-600 text-white
                             flex items-center justify-center
                             hover:bg-indigo-700 transition"
                                >
                                    →
                                </button>


                            </div>

                        </div>

                    </div>


                    {/* ================= RIGHT ================= */}
                    <div className="grid grid-cols-2 gap-4 sm:gap-6 transition-all duration-500">


                        {/* Main */}



                        {/* Left */}
                        <div className="rounded-2xl overflow-hidden shadow">

                            <img
                                src={slide.images.left}
                                alt="Left"
                                className="w-full h-[180px] sm:h-[220px] object-cover"
                            />

                        </div>

                        <div className="row-span-2 rounded-2xl overflow-hidden shadow">

                            <img
                                src={slide.images.main}
                                alt="Main"
                                className="w-full h-full sm:h-[260px] lg:h-full object-cover"
                            />

                        </div>

                        {/* Right */}
                        <div className="rounded-2xl overflow-hidden shadow">

                            <img
                                src={slide.images.right}
                                alt="Right"
                                className="w-full h-[180px] sm:h-[220px] object-cover"
                            />

                        </div>


                    </div>

                </div>

            </div>

        </section>
    );
}
