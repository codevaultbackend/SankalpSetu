"use client";

import { useState } from "react";
import Image from "next/image";

const blogs = [
  {
    images: ["/HeroBg.png", "/HeroBg1.png", "/HeroBg1.png"],
    title: "Jaipur",
  },
  {
    images: ["/HeroBg.png", "/HeroBg1.png"],
    title: "Patna",
  },
  {
    images: ["/HeroBg.png", "/HeroBg1.png"],
    title: "Siwan",
  },
  {
    images: ["/HeroBg.png", "/HeroBg.png", "/HeroBg.png"],

    title: "Gajipur",
  },
  {
    images: ["/HeroBg.png", "/HeroBg.png"],
    title: "Ludhiyana",
  },
  {
    images: [
      "/HeroBg.png",
      "/HeroBg.png",
      "/HeroBg.png",
      "/HeroBg.png",
      "/HeroBg.png",
      "/HeroBg.png",
    ],
    title: "GuruGram",
  },
];

export default function BlogGrid() {
  const [selectedBlog, setSelectedBlog] = useState<number | null>(null);

  const openModal = (index: number) => setSelectedBlog(index);
  const closeModal = () => setSelectedBlog(null);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, index) => (
            <article
              key={index}
              className="bg-[#F9F9FB] max-w-[352px] rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => openModal(index)}
            >
              <div className="relative h-[220px] w-full">
                <Image
                  src={blog.images[0]}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-[24px] leading-[32px] font-semibold text-gray-900 text-center">
                  {blog.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* FULLSCREEN MODAL */}
      {selectedBlog !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-auto  max-[600px]:p-0"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-5xl bg-white rounded-xl p-6 overflow-y-auto max-h-[90vh] max-[600px]:max-h-[100vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="fixed top-4 z-40 bg-white w-[31px] h-[31px] rounded-[67%] right-4 text-gray-600 hover:text-gray-900 text-3xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>

            {/* Image Gallery: always 2 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {blogs[selectedBlog].images.map((img, i) => (
                <div
                  key={i}
                  className="relative w-full h-[300px] sm:h-[400px] rounded-xl overflow-hidden"
                >
                  <Image
                    src={img}
                    alt={`Image ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
