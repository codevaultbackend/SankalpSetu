"use client";

import { useState } from "react";
import { Upload } from "lucide-react";

interface DocumentsStepProps {
  data: any;
  setData: (data: any) => void;
  next: () => void;
  prev: () => void;
}

export default function DocumentsStep({
  data,
  setData,
  next,
  prev,
}: DocumentsStepProps) {

  const [touched, setTouched] = useState(false);


  // Validation
  const errors = {
    registration_certificate: !data.registration_certificate,
    form_80g: !data.form_80g,
    form_12a: !data.form_12a,
  };


  // Check if valid
  const isValid = !Object.values(errors).some(Boolean);


  // Handle Next
  const handleNext = () => {
    setTouched(true);

    if (!isValid) return;

    next();
  };


  const UploadBox = ({
    label,
    active,
    error,
    onFile,
  }: {
    label: string;
    active?: boolean;
    error?: boolean;
    onFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }) => (
    <div>

      <p className="text-sm font-medium text-gray-900 mb-2">
        {label}
      </p>

      <label
        className={`
          relative flex flex-col items-center justify-center
          h-36 sm:h-40 w-full cursor-pointer rounded-lg border-2 border-dashed
          transition p-4
          ${
            error
              ? "border-red-500 bg-red-50"
              : active
              ? "border-green-500 bg-green-100"
              : "border-gray-300 bg-white hover:border-blue-400"
          }
        `}
      >
        <Upload className="w-6 h-6 text-gray-500 mb-2" />

        <p className="text-sm text-gray-700">
          {active ? "Document uploaded" : "Click to upload or drag and drop"}
        </p>

        <p className="text-xs text-gray-500 mt-1">
          PDF or JPG (max 5MB)
        </p>

        <input
          type="file"
          accept=".pdf,.jpg,.jpeg"
          className="hidden"
          onChange={onFile}
        />
      </label>

      {/* Error */}
      {error && (
        <p className="text-red-500 text-sm mt-2">
          This document is required
        </p>
      )}

    </div>
  );


  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-sm p-4 sm:p-6">


      {/* Header */}
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Contact Details
      </h2>


      {/* Guidelines */}
      <div className="mb-6 rounded-lg border border-blue-200 bg-blue-50 p-4">

        <div className="flex items-start gap-3 max-[600px]:flex-col">

          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-100">
            <Upload className="h-4 w-4 text-blue-600" />
          </div>

          <div>

            <p className="text-sm font-semibold text-blue-700 mb-1">
              Document Guidelines:
            </p>

            <ul className="list-disc list-inside text-sm text-blue-700 space-y-1">
              <li>Upload valid government-issued certificates only</li>
              <li>Accepted formats: PDF or JPG</li>
              <li>Maximum file size: 5MB per document</li>
              <li>Ensure documents are clear and readable</li>
            </ul>

          </div>

        </div>

      </div>


      {/* Upload Sections */}
      <div className="space-y-6">

        <UploadBox
          label="Registration Certificate"
          active={!!data.registration_certificate}
          error={touched && errors.registration_certificate}
          onFile={(e) =>
            setData({
              ...data,
              registration_certificate: e.target.files?.[0],
            })
          }
        />


        <UploadBox
          label="Form 80G Certificate"
          active={!!data.form_80g}
          error={touched && errors.form_80g}
          onFile={(e) =>
            setData({
              ...data,
              form_80g: e.target.files?.[0],
            })
          }
        />


        <UploadBox
          label="Form 12A Certificate"
          active={!!data.form_12a}
          error={touched && errors.form_12a}
          onFile={(e) =>
            setData({
              ...data,
              form_12a: e.target.files?.[0],
            })
          }
        />

      </div>


      {/* Footer Buttons */}
      <div className="mt-8 flex items-center justify-between">


        {/* Previous */}
        <button
          onClick={prev}
          className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50"
        >
          ← Previous
        </button>


        {/* Next */}
        <button
          onClick={handleNext}
          disabled={!isValid}
          className={`rounded-lg px-6 py-2 text-sm font-medium
            ${
              isValid
                ? "bg-black text-white hover:bg-gray-900"
                : "bg-gray-400 text-gray-200 cursor-not-allowed"
            }
          `}
        >
          Next →
        </button>


      </div>

    </div>
  );
}
