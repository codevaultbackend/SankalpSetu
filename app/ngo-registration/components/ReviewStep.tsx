export default function ReviewStep({ data, submit, prev }: any) {
  return (
    <>
      {/* Title */}
      <h2 className="text-lg font-semibold mb-6">Review & Submit</h2>

      {/* Review Card */}
      <div className="bg-[#F9FAFB] border border-gray-200 rounded-xl p-6 space-y-6">
        {/* Organization Details */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            Organization Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <ReviewItem label="Organization Name" value={data.organisation_name} />
            <ReviewItem label="Organization Type" value={data.organisation_type} />
            <ReviewItem label="Email Address" value={data.organisation_email} />
            <ReviewItem label="Website" value={data.website || "—"} />
            <ReviewItem label="Primary Cause" value={data.working_area} />
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-200" />

        {/* Contact Details */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            Contact Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <ReviewItem label="Mobile Number" value={data.mobile} />
            <ReviewItem label="Phone Number" value={data.phone || "—"} />
            <ReviewItem
              label="Registered Address"
              value={data.address}
              full
            />
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-200" />

        {/* Documents */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            Uploaded Documents
          </h3>

          <div className="space-y-3 text-sm">
            <FileItem
              label="Registration Certificate"
              file={data.registration_certificate}
            />
            <FileItem label="Form 80G" file={data.form_80g} />
            <FileItem label="Form 12A" file={data.form_12a} />
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-between mt-8">
        <button className="btn-secondary" onClick={prev}>
          Previous
        </button>
        <button className="btn-primary" onClick={submit}>
          Save & Submit Application
        </button>
      </div>
    </>
  );
}

/* ---------- Small Components ---------- */

function ReviewItem({
  label,
  value,
  full = false,
}: {
  label: string;
  value: string;
  full?: boolean;
}) {
  return (
    <div className={full ? "md:col-span-2" : ""}>
      <p className="text-gray-500 text-xs mb-1">{label}</p>
      <p className="text-gray-900 font-medium">{value}</p>
    </div>
  );
}

function FileItem({ label, file }: { label: string; file?: File }) {
  return (
    <div className="flex items-center justify-between bg-white border rounded-lg px-4 py-3">
      <div>
        <p className="text-gray-800 font-medium">{label}</p>
        <p className="text-xs text-gray-500">
          {file ? file.name : "Not uploaded"}
        </p>
      </div>

      <span
        className={`text-xs font-medium px-3 py-1 rounded-full ${
          file
            ? "bg-green-100 text-green-700"
            : "bg-gray-100 text-gray-500"
        }`}
      >
        {file ? "Uploaded" : "Missing"}
      </span>
    </div>
  );
}
