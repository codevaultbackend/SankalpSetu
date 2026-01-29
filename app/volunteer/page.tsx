"use client";

import { useState } from "react";
import { ReactNode } from "react";
import { volunteerService } from "../services/volunteer.service";

interface VolunteerFormState {
  full_name: string;
  phone: string;
  email: string;
  age: string;
  gender: string;
  address: string;
  skill: string[];
  availability: string[];
  interest: string[];
  skill_note: string;
  document_front: File | null;
  document_back: File | null;
}



interface SectionProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

interface TwoColProps {
  children: ReactNode;
}

interface InputProps {
  label: string;
  name: string;
  required?: boolean;
  onChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >;
}

interface SelectProps {
  label: string;
  name: string;
  required?: boolean;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}

interface TextareaProps {
  label: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

interface UploadBoxProps {
  label: string;
  onFile: (file: File | null) => void;
}

interface CheckboxGridProps {
  label: string;
  items: string[];
  onToggle: (value: string) => void;
}


export default function VolunteerPage() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<VolunteerFormState>({
    full_name: "",
    phone: "",
    email: "",
    age: "",
    gender: "",
    address: "",
    skill: [],
    availability: [],
    interest: [],
    skill_note: "",
    document_front: null,
    document_back: null,
  });

  /* ---------------- HANDLERS ---------------- */

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const toggleCheckbox = (
    key: "skill" | "availability" | "interest",
    value: string
  ) => {
    setForm((p) => ({
      ...p,
      [key]: p[key].includes(value)
        ? p[key].filter((v) => v !== value)
        : [...p[key], value],
    }));
  };

  const handleFile = (
    key: "document_front" | "document_back",
    file: File | null
  ) => {
    setForm((p) => ({ ...p, [key]: file }));
  };

  /* ---------------- SUBMIT ---------------- */

  const handleSubmit = async () => {
    if (
      !form.full_name ||
      !form.phone ||
      !form.email ||
      !form.document_front ||
      !form.document_back
    ) {
      alert("All required fields are mandatory");
      return;
    }

    setLoading(true);

    try {
      const fd = new FormData();

      // 🔥 EXACT BACKEND FIELD NAMES
      fd.append("full_name", form.full_name);
      fd.append("phone", form.phone);
      fd.append("email", form.email);
      fd.append("age", form.age);
      fd.append("gender", form.gender);
      fd.append("address", form.address);
      fd.append("skill_note", form.skill_note);

      fd.append("skill", form.skill.join(", "));
      fd.append("availability", form.availability.join(", "));
      fd.append("interest", form.interest.join(", "));

      fd.append("document_front", form.document_front);
      fd.append("document_back", form.document_back);

      await volunteerService.submitVolunteer(fd);

      alert("Volunteer registered successfully ");
    } catch (err: any) {
      alert(err.message || "Submission failed");
    } finally {
      setLoading(false);
    }
  };

  /* ---------------- UI ---------------- */

  return (
    <section className="min-h-screen bg-[#F3FBF6] py-16 px-4 max-[600px]:px-2">
      {/* HEADER */}
      <div className="text-center mb-10">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#7A6A00]">
          <span className="text-white text-xl">♡</span>
        </div>
        <h1 className="text-3xl font-semibold text-[#1F2937]">
          Volunteer Registration
        </h1>
        <p className="text-gray-500 mt-2">
          Join hands to create lasting impact.
        </p>
      </div>

      {/* FORM CARD */}
      <div className="mx-auto max-w-3xl rounded-xl bg-white shadow-lg p-8 space-y-10 max-[600px]:px-4">
        {/* PERSONAL INFO */}
        <Section title="Personal Information">
          <Input name="full_name" label="Full Name" required onChange={handleChange} />
          <TwoCol>
            <Input name="phone" label="Phone Number" required onChange={handleChange} />
            <Input name="email" label="Email Address" required onChange={handleChange} />
          </TwoCol>
          <TwoCol>
            <Input name="age" label="Age" required onChange={handleChange} />
            <Select name="gender" label="Gender" required onChange={handleChange} />
          </TwoCol>
          <Input name="address" label="Address" required onChange={handleChange} />
        </Section>

        {/* DOCUMENTS */}
        <Section
          title="Identity Documents"
          subtitle="Please upload a valid government-issued ID (both front and back)"
        >
          <TwoCol>
            <UploadBox
              label="Document Front"
              onFile={(f) => handleFile("document_front", f)}
            />
            <UploadBox
              label="Document Back"
              onFile={(f) => handleFile("document_back", f)}
            />
          </TwoCol>
        </Section>

        {/* DETAILS */}
        <Section title="Volunteer Details">
          <CheckboxGrid
            label="Skills & Expertise"
            items={[
              "Teaching/Tutoring",
              "Healthcare",
              "Technology/IT",
              "Construction/Manual Labor",
              "Cooking/Food Service",
              "Administration",
              "Fundraising",
              "Counseling",
              "Other",
            ]}
            onToggle={(v) => toggleCheckbox("skill", v)}
          />

          <Textarea
            label="Additional Skills or Notes"
            name="skill_note"
            onChange={handleChange}
          />

          <CheckboxGrid
            label="Availability"
            items={[
              "Weekday Mornings",
              "Weekday Afternoons",
              "Weekday Evenings",
              "Weekend Mornings",
              "Weekend Afternoons",
              "Weekend Evenings",
            ]}
            onToggle={(v) => toggleCheckbox("availability", v)}
          />

          <CheckboxGrid
            label="Areas of Interest"
            items={[
              "Working with Children",
              "Working with Elderly",
              "Animal Welfare",
              "Environmental Conservation",
              "Community Development",
              "Education",
              "Health & Wellness",
              "Arts & Culture",
            ]}
            onToggle={(v) => toggleCheckbox("interest", v)}
          />
        </Section>

        {/* SUBMIT */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full rounded-lg bg-[#7BC47F] py-3 font-semibold text-white hover:bg-[#6bb36f] transition"
        >
          {loading ? "Submitting..." : "Submit Application"}
        </button>
      </div>

      <p className="text-center text-sm text-gray-500 mt-6">
        By submitting this form, you agree to our terms and conditions.
      </p>
    </section>
  );
}

/* ---------------- UI COMPONENTS ---------------- */

function Section({ title, subtitle, children }: any) {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="font-semibold text-[#1F2937]">{title}</h2>
        {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      </div>
      {children}
    </div>
  );
}

function TwoCol({ children }: any) {
  return <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{children}</div>;
}

function Input({ label, name, required, onChange }: any) {
  return (
    <div>
      <label className="text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        name={name}
        onChange={onChange}
        className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
      />
    </div>
  );
}

function Select({ label, name, required, onChange }: any) {
  return (
    <div>
      <label className="text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        name={name}
        onChange={onChange}
        className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
      >
        <option value="">Select...</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>
    </div>
  );
}

function Textarea({ label, name, onChange }: any) {
  return (
    <div>
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <textarea
        name={name}
        onChange={onChange}
        rows={4}
        className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2"
      />
    </div>
  );
}

function UploadBox({ label, onFile }: any) {
  return (
    <div>
      <label className="text-sm font-medium text-gray-700">
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        type="file"
        className="hidden"
        id={label}
        onChange={(e) => onFile(e.target.files?.[0] || null)}
      />
      <label
        htmlFor={label}
        className="mt-2 flex h-32 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 text-sm text-gray-500 p-[20px]"
      >
        ⬆ Click to upload or drag and drop
        <span className="text-xs mt-1">PNG, JPG, PDF up to 10MB</span>
      </label>
    </div>
  );
}

function CheckboxGrid({ label, items, onToggle }: any) {
  return (
    <div>
      <p className="text-sm font-medium text-gray-700 mb-2">
        {label} <span className="text-red-500">*</span>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
        {items.map((item: string) => (
          <label key={item} className="!flex items-center gap-2">
            <input type="checkbox" onChange={() => onToggle(item)} />
            {item}
          </label>
        ))}
      </div>
    </div>
  );
}
