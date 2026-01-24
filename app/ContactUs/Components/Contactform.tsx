"use client";

import { useState } from "react";
import Image from "next/image";
import { contactService } from "../../services/contact.service";

export default function Contactform() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    resone: "",
    city: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (
      !form.full_name ||
      !form.email ||
      !form.phone ||
      !form.resone ||
      !form.city
    ) {
      setError("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);
      const res = await contactService.submitContact(form);
      setSuccess(res.message);
      setForm({
        full_name: "",
        email: "",
        phone: "",
        resone: "",
        city: "",
        message: "",
      });
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="relative w-full bg-[#EFF7F2] py-24 select-none ">
      <img
        src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769168055/ss_page_assets/qyzl9ewgxz764wtal91z.png"
        className="absolute left-0 top-12 w-[220px] h-auto   "
        alt="contactArrow"
      />
      <img
        src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769168055/ss_page_assets/rsoxurj1l2p4m9rundqp.png"
        className="absolute right-0 top-12 w-[220px] h-auto  "
        alt="contactArrow"
      />

      <div className="absolute left-0 top-1/3 grid grid-cols-6 gap-2 opacity-20">
        {Array.from({ length: 36 }).map((_, i) => (
          <span key={i} className="w-1 h-1 bg-gray-600 rounded-full" />
        ))}
      </div>

      <div className="absolute right-0 bottom-1/4 grid grid-cols-6 gap-2 opacity-20">
        {Array.from({ length: 36 }).map((_, i) => (
          <span key={i} className="w-1 h-1 bg-gray-600 rounded-full" />
        ))}
      </div>

      <div className="relative max-w-[1050px] mx-auto px-6 pt-[35px] bg-[#EFF7F2]">
        <img
          src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769168055/ss_page_assets/vudzotnvdg6m24kkmla5.png"
          alt="Sankalp_image"
          className="absolute top-0 w-[131px] h-[263px] left-0  "
        />
        <img
          src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769168056/ss_page_assets/o9rgdtu5rphvakh9smfe.png"
          alt="Sankalp_image"
          className="absolute top-0 w-[131px] h-[263px] right-0 "
        />
        <img
          src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769168056/ss_page_assets/t7lmrrznkpr2ebgj9pmh.png"
          alt="Sankalp_image"
          className="absolute bottom-0 h-[131px] w-[263px] left-0  "
        />
        <img
          src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769168056/ss_page_assets/t7lmrrznkpr2ebgj9pmh.png"
          alt="Sankalp_image"
          className="absolute bottom-0 h-[201px] w-[263px] right-0 rotate-[180deg]"
        />
        <div className="relative grid lg:grid-cols-[420px_1fr] max-[650px]:block !h-full bg-[#EAF6F3] rounded-2xl overflow-hidden ">
          <div className="bg-[#F4FBF9] p-10 max-[650px]:p-[20px]">
            <h2 className="text-3xl font-semibold text-gray-900">
              Connect with us
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Let’s create impact together
            </p>

            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="text-sm font-medium">Full name *</label>
                <input
                  name="full_name"
                  value={form.full_name}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-emerald-400"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Business email *</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-emerald-400"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Phone</label>
                <div className="flex gap-2 mt-1">
                  <select className="rounded-md border border-gray-300 px-3 py-2">
                    <option>+91</option>
                  </select>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="flex-1 rounded-md border border-gray-300 px-4 py-2"
                    placeholder="Enter your contact number"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">City *</label>
                <input
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2"
                  placeholder="Enter your city"
                />
              </div>

              <div>
                <label className="text-sm font-medium">
                  Reason for contact *
                </label>
                <select
                  name="resone"
                  value={form.resone}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2"
                >
                  <option>Select</option>
                  <option>General Inquiry</option>
                  <option>Partnership</option>
                  <option>Support</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium">
                  How can we help you?
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2"
                  placeholder="Enter your message here"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-4 inline-flex rounded-full bg-emerald-500 px-8 py-2 text-white font-medium shadow hover:opacity-90 disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              {success && <p className="text-green-500 text-sm">{success}</p>}
            </form>
          </div>

          <div className="relative flex items-center max-h-[592px] w-full m-auto justify-center  bg-[#fff] max-[650px]:hidden ">
            <Image
              src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769083950/ss_page_assets/spn1zkqkllhhqvmhhlmw.png"
              alt="Bihar Map"
              width={592}
              height={92}
              className="relative z-10 max-h-[492px]  max-w-full"
            />

            <span className="absolute top-[38%] left-[48%] bg-white px-4 py-1 text-sm font-bold shadow">
              HAJIPUR
            </span>
            <span className="absolute bottom-[38%] left-[32%] bg-white px-4 py-1 text-sm font-bold shadow">
              PATNA
            </span>
          </div>
        </div>
      </div>
      <img
        src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769168055/ss_page_assets/jcxvhtwrh1fyjkafxcj0.png"
        className="absolute left-0 bottom-12 w-auto h-[198px] max-[650px]:hidden"
        alt="contactArrow"
      />
      <img
        src="https://res.cloudinary.com/ddcy9noqo/image/upload/v1769168055/ss_page_assets/yl99avlhkwjxad0u2hyk.png"
        className="absolute right-0 bottom-12 w-auto h-[198px] max-[650px]:hidden"
        alt="contactArrow"
      />
    </section>
  );
}
