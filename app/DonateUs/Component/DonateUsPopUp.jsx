"use client";

import React, { useState } from "react";
import { X, Copy, Download, Share2, QrCode, Landmark, Check } from "lucide-react";

export default function DonateUsPopUp({ isOpen, onClose }) {
    const [activeTab, setActiveTab] = useState("qr");
    const [copied, setCopied] = useState(false);

    const upiId = "9211621996@hdfc";
    const qrUrl =
        "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=upi://pay?pa=9211621996@hdfc";

    if (!isOpen) return null;

    /* ================= COPY WITH ANIMATION ================= */
    const handleCopy = async () => {
        await navigator.clipboard.writeText(upiId);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    /* ================= DOWNLOAD ================= */
    const handleDownload = async () => {
        const response = await fetch(qrUrl);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "sankalp-setu-qr.png";
        document.body.appendChild(a);
        a.click();
        a.remove();
    };

    /* ================= SHARE ================= */
    const handleShare = async () => {
        if (navigator.share) {
            await navigator.share({
                title: "Donate to Sankalp Setu Foundation",
                text: "Support Sankalp Setu Foundation ",
                url: qrUrl,
            });
        }
    };

    return (
        <div className="fixed max-[768px]:static sm:top-0 inset-0 bg-black/60 flex items-center justify-center z-[9999] p-4 max-[768px]:p-0">
            <div className="w-full max-w-[900px] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row animate-[fadeIn_.3s_ease]">

                {/* ================= LEFT SIDEBAR ================= */}
                <div className="w-full md:w-[324px] bg-black p-5 pr-0 space-y-4 max-[768px]:!p-4">
                    <div className="bg-[#95B562] text-white p-4 rounded-lg flex gap-1.5 lg:mr-5">
                        <div className="logo h-[40px] w-[40px] bg-white rounded-full">
                            <img src="/favicon.svg" alt="sankalpsetu" className="object-cover h-full w-full p-[10px] " />
                        </div>
                        <div className="">
                            <h2 className="font-semibold text-[15px] font-[500] text-[#FFFFFF]">
                                Sankalp Setu Foundation
                            </h2>
                            <p className="text-xs opacity-90 text-[12px] font-[400] leading-[100%]">
                                Small Donate Today, Big Impact
                            </p>
                        </div>
                    </div>

                    <div
                        onClick={() => setActiveTab("qr")}
                        className={` cursor-pointer p-3 rounded-lg rounded-br-none max-[768px]:!rounded-lg rounded-tr-none transition ${activeTab === "qr"
                            ? "bg-gray-200"
                            : "bg-white hover:bg-gray-100"
                            }`}
                    >
                        <div className="flex gap-2 items-center justify-between border-1 border-[#D1D5DC] p-2 rounded-[12px]"><div className="flex gap-2 items-center"><QrCode size={16} /> QR Code</div><i class="fa-solid fa-chevron-right"></i></div>
                    </div>

                    <div
                        onClick={() => setActiveTab("bank")}
                        className={` cursor-pointer p-3 rounded-br-none rounded-tr-none rounded-lg max-[768px]:!rounded-lg transition ${activeTab === "bank"
                            ? "bg-gray-200"
                            : "bg-white hover:bg-gray-100"
                            }`}
                    >
                        <div className="flex gap-2 items-center justify-between border-1 border-[#D1D5DC] p-2 rounded-[12px]"> <div className="flex gap-2 items-center"><Landmark size={16} /> To Bank Account</div> <i class="fa-solid fa-chevron-right"></i></div>
                    </div>
                </div>

                {/* ================= RIGHT CONTENT ================= */}
                <div className="flex-1 bg-gray-100 relative p-6 md:p-8">
                    <button
                        onClick={onClose}
                        className="absolute right-4 top-4 text-gray-500 hover:text-black"
                    >
                        <X />
                    </button>

                    <h2 className="text-lg font-semibold mb-6 text-center md:text-left">
                        Payment Option
                    </h2>


                    {/* ================= QR SECTION ================= */}
                    {activeTab === "qr" && (
                        <div className="bg-gradient-to-b from-gray-700 to-gray-900 text-white p-6 rounded-xl max-w-[380px] mx-auto shadow-lg">
                            <div className="flex justify-between items-start mb-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-[56px] h-[56px] bg-white rounded-[14px] flex items-center justify-center">
                                        <img src="/favicon.svg" className="w-[28px]" />
                                    </div>

                                    <div>
                                        <h3 className="text-[17px] font-[500]">
                                            Sankalp - Setu - QR
                                        </h3>
                                        <p className="text-[#8B92A8] text-[14px] font-[400] mt-1">
                                            Official Payment
                                        </p>
                                    </div>
                                </div>

                                <div className="text-right">
                                    <p className="text-[#6B7280] text-[12px] font-[400]">**** - 0943</p>
                                    <div className="flex items-center justify-end gap-2 mt-2">
                                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                                        <span className="text-[#10B981] text-[12px] font-[400]">Active</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-4 rounded-lg mb-4">
                                <img src={qrUrl} alt="QR Code" className="w-full" />
                            </div>

                            {/* UPI ID WITH ANIMATION */}
                            <div className="bg-gray-800 p-3 rounded-lg flex justify-between items-center mb-4 relative">
                                <span className="text-sm">{upiId}</span>

                                <button
                                    onClick={handleCopy}
                                    className="relative flex items-center justify-center"
                                >
                                    {copied ? (
                                        <Check
                                            size={18}
                                            className="text-green-400 animate-[pop_.3s_ease]"
                                        />
                                    ) : (
                                        <Copy size={16} className="hover:text-green-400" />
                                    )}
                                </button>

                                {/* Copy Toast */}
                                {copied && (
                                    <div className="absolute -top-8 right-0 bg-green-500 text-white text-xs px-2 py-1 rounded-md shadow-md animate-[fadeIn_.2s_ease]">
                                        Copied!
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3">
                                <button
                                    onClick={handleDownload}
                                    className="flex-1 bg-gray-700 hover:bg-gray-600 py-2 rounded-lg flex items-center justify-center gap-2 text-sm transition"
                                >
                                    <Download size={16} /> Download
                                </button>

                                <button
                                    onClick={handleShare}
                                    className="flex-1 bg-purple-600 hover:bg-purple-500 py-2 rounded-lg flex items-center justify-center gap-2 text-sm transition"
                                >
                                    <Share2 size={16} /> Share
                                </button>
                            </div>
                        </div>
                    )}

                    {/* ================= BANK SECTION ================= */}
                    {activeTab === "bank" && (
  <div className="bg-white w-full max-w-[480px] mx-auto p-8 rounded-2xl shadow-lg border border-gray-100">
    
    {/* Header */}
    <div className="border-b pb-4 mb-6">
      <h3 className="text-xl font-semibold text-gray-800">
        Bank Transfer Details
      </h3>
      <p className="text-sm text-gray-500 mt-1">
        Use the following details to make a direct bank transfer.
      </p>
    </div>

    {/* Bank Info */}
    <div className="space-y-5 text-sm">
      
      <div className="flex justify-between items-start border-b pb-3">
        <span className="text-gray-500">Account Name</span>
        <span className="font-medium text-gray-800 text-right">
          Sankalp Setu Foundation
        </span>
      </div>

      <div className="flex justify-between items-start border-b pb-3">
        <span className="text-gray-500">Account Number</span>
        <span className="font-medium text-gray-800 tracking-wider">
          50200117386413
        </span>
      </div>

      <div className="flex justify-between items-start border-b pb-3">
        <span className="text-gray-500">IFSC Code</span>
        <span className="font-medium text-gray-800">
          HDFC0006215
        </span>
      </div>

      <div className="flex justify-between items-start">
        <span className="text-gray-500">Bank Name</span>
        <span className="font-medium text-gray-800">
          HDFC Bank
        </span>
      </div>

    </div>

    {/* Secure Box */}
    <div className="mt-8 bg-blue-50 border border-blue-100 rounded-xl p-4 flex items-start gap-3">
      <div className="text-blue-600 text-lg">🔒</div>
      <div>
        <p className="text-sm font-medium text-blue-700">
          Secure & Verified Account
        </p>
        <p className="text-xs text-blue-600 mt-1">
          Please verify the beneficiary name before completing the transfer.
        </p>
      </div>
    </div>

  </div>
)}

                </div>
            </div>

            {/* ================= ANIMATION KEYFRAMES ================= */}
            <style jsx>{`
        @keyframes pop {
          0% { transform: scale(0.5); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </div>
    );
}
