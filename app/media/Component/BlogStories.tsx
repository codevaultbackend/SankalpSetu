import Image from "next/image";
import Link from "next/link";

type Blog = {
  id: number;
  title: string;
  image: string;
  category: string;
  author: string;
  date: string;
};

const blogs: Blog[] = [
  {
    id: 1,
    title: "From Sketch to Masterpiece: Artistry",
    image: "/postStories.png",
    category: "Create",
    author: "Nirma Duhan",
    date: "11 Jun 2024",
  },
  {
    id: 2,
    title: "Fashion Forward: Trends, Tips and Timeless",
    image: "/postStories.png",
    category: "Style",
    author: "Cynthia Bosch",
    date: "08 Feb 2024",
  },
  {
    id: 3,
    title: "Flavours from Around the Globe: Culinary",
    image: "/postStories.png",
    category: "Taste",
    author: "Nirma Duhan",
    date: "11 Jun 2024",
  },
  {
    id: 4,
    title: "Gardening Tips: From Seedlings to Blossoms",
    image: "/postStories.png",
    category: "Grow",
    author: "Cynthia Bosch",
    date: "08 Feb 2024",
  },
];

export default function BlogStories() {
  return (
    <section className="w-full bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Sankalp Setu Blog & Stories</h2>
          <Link
            href="/blogs"
            className="text-sm text-gray-500 hover:text-black transition"
          >
            View All →
          </Link>
        </div>

        <div className="h-px bg-gray-200 mb-6" />

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= BLOG CARD ================= */

function BlogCard({ blog }: { blog: Blog }) {
  return (
    <Link
      href={`/blog/${blog.id}`}
      className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
    >
      {/* IMAGE */}
      <div className="relative h-[560px] w-[560px]">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
        />
        {/* GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      {/* CATEGORY BADGE */}
      <span className="absolute top-4 left-4 bg-white text-xs font-medium px-3 py-1 rounded-full shadow">
        {blog.category}
      </span>

      {/* CONTENT */}
      <div className="absolute bottom-4 left-4 right-4 text-white">
        <h3 className="text-base font-semibold leading-snug">
          {blog.title}
        </h3>

        <div className="flex items-center gap-2 mt-2 text-xs text-gray-200">
          <span>By {blog.author}</span>
          <span className="h-1 w-1 bg-gray-300 rounded-full" />
          <span>{blog.date}</span>
        </div>
      </div>
    </Link>
  );
}
