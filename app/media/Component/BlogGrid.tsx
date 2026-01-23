"use client";

import { useState } from "react";
import Image from "next/image";

const blogs = [
  {
    images: ["https://res.cloudinary.com/ddcy9noqo/image/upload/v1769166404/WhatsApp_Image_2026-01-23_at_16.32.32_erhrea.jpg", "https://res.cloudinary.com/ddcy9noqo/image/upload/v1769166403/WhatsApp_Image_2026-01-23_at_16.34.16_jlgsyl.jpg","https://res.cloudinary.com/ddcy9noqo/image/upload/v1769166404/WhatsApp_Image_2026-01-23_at_16.33.28_znfi5n.jpg","https://res.cloudinary.com/ddcy9noqo/image/upload/v1769166471/WhatsApp_Image_2026-01-23_at_16.37.17_jsn7fh.jpg"],
    title: "Gurgaon",
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
