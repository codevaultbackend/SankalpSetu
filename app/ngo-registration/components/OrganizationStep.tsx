import { useState } from "react";

export default function OrganizationStep({ data, setData, next }: any) {

  const [touched, setTouched] = useState(false);

  // Validation
  const errors = {
    organisation_name: !data.organisation_name?.trim(),
    organisation_type: !data.organisation_type?.trim(),
    organisation_email: !data.organisation_email?.trim(),
    working_area: !data.working_area?.trim(),
  };

  // Check if form is valid
  const isValid = !Object.values(errors).some(Boolean);


  // Handle Next
  const handleNext = () => {
    setTouched(true);

    if (!isValid) return;

    next();
  };


  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

      {/* Header */}
      <div className="bg-[#F1F8F4] px-8 py-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Organization Details
        </h2>
        <p className="text-sm text-gray-500 mt-1">Step 1 of 4</p>
      </div>


      {/* Form */}
      <div className="px-8 py-8 space-y-6">


        {/* Organization Name */}
        <Field
          label="Organization Name *"
          error={touched && errors.organisation_name}
          errorText="Organization name is required"
        >
          <input
            className={inputClass(touched && errors.organisation_name)}
            placeholder="Enter your organization name"
            value={data.organisation_name}
            onChange={(e) =>
              setData({ ...data, organisation_name: e.target.value })
            }
          />
        </Field>


        {/* Organization Type */}
        <Field
          label="Organization Type *"
          error={touched && errors.organisation_type}
          errorText="Please select organization type"
        >
          <select
            className={inputClass(touched && errors.organisation_type)}
            value={data.organisation_type}
            onChange={(e) =>
              setData({ ...data, organisation_type: e.target.value })
            }
          >
            <option value="">Select organization type</option>
            <option value="Trust">Trust</option>
            <option value="Society">Society</option>
            <option value="Section 8">Section 8</option>
          </select>
        </Field>


        {/* Email */}
        <Field
          label="Organization Email *"
          error={touched && errors.organisation_email}
          errorText="Email is required"
        >
          <div className={inputWrapper(touched && errors.organisation_email)}>
            <span className="text-gray-400">✉</span>

            <input
              className="flex-1 bg-transparent outline-none"
              placeholder="organization@example.com"
              type="email"
              value={data.organisation_email}
              onChange={(e) =>
                setData({ ...data, organisation_email: e.target.value })
              }
            />
          </div>
        </Field>


        {/* Website (Optional) */}
        <Field label="Website (Optional)">
          <input
            className="w-full rounded-lg bg-gray-100 px-4 max-[600px]:px-1 py-3 text-gray-500"
            placeholder="https://www.example.com"
            value={data.website}
            onChange={(e) =>
              setData({ ...data, website: e.target.value })
            }
          />
        </Field>


        {/* Working Area */}
        <Field
          label="Working Area / Cause *"
          error={touched && errors.working_area}
          errorText="Please select working area"
        >
          <select
            className={inputClass(touched && errors.working_area)}
            value={data.working_area}
            onChange={(e) =>
              setData({ ...data, working_area: e.target.value })
            }
          >
            <option value="">Select your primary cause</option>
            <option value="Education">Education</option>
            <option value="Health">Health</option>
            <option value="Environment">Environment</option>
          </select>
        </Field>

      </div>


      {/* Footer */}
      <div className="border-t px-8 py-6 flex justify-between items-center">

        {/* Previous */}
        <button
          disabled
          className="px-6 py-2 rounded-lg border text-gray-400 cursor-not-allowed"
        >
          ← Previous
        </button>


        {/* Next */}
        <button
          onClick={handleNext}
          disabled={!isValid}
          className={`px-6 py-2 rounded-lg flex items-center gap-2
            ${
              isValid
                ? "bg-[#0F172A] text-white hover:bg-[#020617]"
                : "bg-gray-400 text-gray-200 cursor-not-allowed"
            }
          `}
        >
          Next
          <span>→</span>
        </button>

      </div>

    </div>
  );
}


/* ---------- Helpers ---------- */

function Field({
  label,
  error,
  errorText,
  children,
}: {
  label: string;
  error?: boolean;
  errorText?: string;
  children: React.ReactNode;
}) {
  return (
    <div>

      <label className="block text-sm font-medium mb-2 text-gray-800">
        {label}
      </label>

      {children}

      {error && (
        <p className="text-red-500 text-sm mt-2">
          {errorText}
        </p>
      )}

    </div>
  );
}


function inputClass(error?: boolean) {
  return `
    w-full rounded-lg px-4 max-[600px]:px-1 py-3 bg-gray-50 outline-none
    border
    ${error ? "border-red-500" : "border-gray-300"}
  `;
}


function inputWrapper(error?: boolean) {
  return `
    flex items-center gap-3 rounded-lg px-4 py-3 bg-gray-50
    border
    ${error ? "border-red-500" : "border-gray-300"}
  `;
}
