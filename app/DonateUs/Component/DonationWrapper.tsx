"use client";

import { useState } from "react";
import DonateHero from "./DonateHero";
import DonateCrousel from "./DonateCrousel";
import DonateHeroBanner from "./DonateHeroBanner2";
import JoinCommunitySection from "./JoinCommunitySection";
import TrustedCompanies from "./TrustedCompanies";
import DonateUsPopUp from "./DonateUsPopUp";

export default function DonationWrapper() {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  return (
    <>
      {/* Donation Page */}
      {!isPopupOpen && (
        <>
          <DonateHero
            open={isPopupOpen}
            setOpen={setIsPopupOpen}
          />
          <DonateHeroBanner
            open={isPopupOpen}
            setOpen={setIsPopupOpen}
          />
          <DonateCrousel
            open={isPopupOpen}
            setOpen={setIsPopupOpen}
          />
          <TrustedCompanies  />
          <JoinCommunitySection
            open={isPopupOpen}
            setOpen={setIsPopupOpen}
          />
        </>
      )}

      {/* Popup */}
      {isPopupOpen && (
        <DonateUsPopUp
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
        />
      )}
    </>
  );
}