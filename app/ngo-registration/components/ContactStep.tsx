export default function ContactStep({ data, setData, next, prev }: any) {
  const errors = {
    mobile: !data.mobile,
    address: !data.address,
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-[#F1F8F4] px-8 py-6">
        <h2 className="text-xl font-semibold text-gray-800">Contact Details</h2>
        <p className="text-sm text-gray-500 mt-1">Step 2 of 4</p>
      </div>

      {/* Form */}
      <div className="px-8 py-8 space-y-6">
        {/* Mobile */}
        <Field label="Mobile Number *" error={errors.mobile}>
          <div className={inputWrapper(errors.mobile)}>
            <span className="text-gray-400">
              <i className="fa-solid fa-phone"></i>
            </span>
            <input
              className="flex-1 bg-transparent outline-none"
              placeholder="+91 9876543210"
              value={data.mobile}
              onChange={(e) => setData({ ...data, mobile: e.target.value })}
            />
          </div>
        </Field>

        {/* Phone */}
        <Field label="Phone Number (Optional)">
          <div className={inputWrapper(false)}>
            <span className="text-gray-400">
              <i className="fa-solid fa-phone"></i>
            </span>
            <input
              className="flex-1 bg-transparent outline-none"
              placeholder="+91 22 12345678"
              value={data.phone}
              onChange={(e) => setData({ ...data, phone: e.target.value })}
            />
          </div>
        </Field>

        {/* Address */}
        <Field label="Registered Address *" error={errors.address}>
          <div className={textareaWrapper(errors.address)}>
            <span className="text-gray-400 mt-1"><i className="fa-solid fa-location-dot"></i></span>
            <textarea
              className="flex-1 bg-transparent outline-none resize-none h-32"
              placeholder="Enter complete registered address with city, state, and pincode"
              value={data.address}
              onChange={(e) => setData({ ...data, address: e.target.value })}
            />
          </div>
        </Field>
      </div>

      {/* Footer */}
      <div className="border-t px-8 py-6 flex justify-between items-center">
        <button
          onClick={prev}
          className="px-6 py-2 rounded-lg border text-gray-500 flex items-center gap-2"
        >
          ← Previous
        </button>

        <button
          onClick={next}
          className="bg-[#0F172A] text-white px-6 py-2 rounded-lg flex items-center gap-2"
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
      {error && <p className="text-red-500 text-sm mt-2">{errorText}</p>}
    </div>
  );
}

function inputWrapper(error?: boolean) {
  return `
    flex items-center gap-3 rounded-lg px-4 py-3 bg-gray-100
    ${error ? " " : "border border-transparent"}
  `;
}

function textareaWrapper(error?: boolean) {
  return `
    flex gap-3 rounded-lg px-4 py-3 bg-gray-100
    ${error ? "" : "border border-transparent"}
  `;
}
