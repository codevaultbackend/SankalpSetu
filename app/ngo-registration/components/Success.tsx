export default function Success() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] flex justify-center py-16 px-4">
      {/* Card */}
      <div className="w-full max-w-[900px] bg-white rounded-2xl shadow-lg">
        {/* Header strip */}
        <div className="bg-[#F1F8F4] rounded-t-2xl px-6 py-4 text-sm text-gray-600">
          Save & Submit Application
        </div>

        {/* Content */}
        <div className="px-6 md:px-12 py-14 text-center">
          {/* Success Icon */}
          <div className="relative mx-auto w-24 h-24">
            <div className="w-24 h-24 rounded-full bg-green-500 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            {/* Confetti dot */}
            <span className="absolute -top-1 right-3 text-yellow-400 text-xl">
              ✨
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-semibold text-gray-900 mt-6">
            Registration Successful!
          </h2>

          {/* Subtitle */}
          <p className="text-gray-500 mt-2 text-sm">
            Thank you for registering with us,{" "}
            <span className="text-green-600 font-medium">
              SankalpSetu Foundation
            </span>
          </p>

          {/* Status Box */}
          <div className="mt-8 mx-auto max-w-[560px] bg-[#F6FFFA] border border-green-200 rounded-xl p-6 text-left space-y-4">
            {/* Item 1 */}
            <div className="flex gap-3">
              <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-semibold">
                1
              </div>
              <div>
                <p className="font-medium text-gray-900">
                  Confirmation Email Sent
                </p>
                <p className="text-sm text-gray-500">
                  We've sent a confirmation email to Sankalpsetu97@gmail.com
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex gap-3">
              <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-semibold">
                2
              </div>
              <div>
                <p className="font-medium text-gray-900">
                  Application Under Review
                </p>
                <p className="text-sm text-gray-500">
                  Our team will review your application within 3–5 business days
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex gap-3">
              <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-semibold">
                3
              </div>
              <div>
                <p className="font-medium text-gray-900">
                  Approval Notification
                </p>
                <p className="text-sm text-gray-500">
                  You'll receive an email once your application is approved
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <p className="text-xs text-gray-400 mt-10">
            Need help? Contact us at{" "}
            <span className="text-blue-600 cursor-pointer">
              support@ngo-platform.com
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
