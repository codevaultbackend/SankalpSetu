"use client";

import { useState } from "react";
import Stepper from "./components/Stepper";
import OrganizationStep from "./components/OrganizationStep";
import ContactStep from "./components/ContactStep";
import DocumentsStep from "./components/DocumentsStep";
import ReviewStep from "./components/ReviewStep";
import Success from "./components/Success";
import { NgoFormState } from "./ngo.types";
import { ngoService } from "../services/ngo.service";

export default function NgoRegistrationPage() {
  const [step, setStep] = useState(0);
  const [success, setSuccess] = useState(false);

  const [data, setData] = useState<NgoFormState>({
    organisation_name: "",
    organisation_type: "",
    organisation_email: "",
    website: "",
    working_area: "",
    mobile: "",
    phone: "",
    address: "",
  });

  const submit = async () => {
    await ngoService.registerNgo(data);
    setSuccess(true);
  };

  if (success) return <Success />;

  return (
    <div className="min-h-screen bg-[#F9FAFB] py-10">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-14 h-14 mx-auto rounded-full bg-[#6B5F00] flex items-center justify-center text-white text-xl">
          ♥
        </div>
        <h1 className="text-2xl font-semibold mt-4">NGO Registration</h1>
        <p className="text-sm text-gray-500">
          Join Us In Making A Difference In Our Community
        </p>
      </div>

      <Stepper step={step} />

      <div className="max-w-[900px] mx-auto mt-6 px-4">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          {step === 0 && (
            <OrganizationStep data={data} setData={setData} next={() => setStep(1)} />
          )}
          {step === 1 && (
            <ContactStep
              data={data}
              setData={setData}
              next={() => setStep(2)}
              prev={() => setStep(0)}
            />
          )}
          {step === 2 && (
            <DocumentsStep
              data={data}
              setData={setData}
              next={() => setStep(3)}
              prev={() => setStep(1)}
            />
          )}
          {step === 3 && (
            <ReviewStep data={data} submit={submit} prev={() => setStep(2)} />
          )}
        </div>
      </div>
    </div>
  );
}
