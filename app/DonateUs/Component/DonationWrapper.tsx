"use client";

import { useState } from "react";
import DonateHero from "./DonateHero";
import DonateCrousel from "./DonateCrousel";
import DonateHeroBanner from "./DonateHeroBanner2";
import JoinCommunitySection from "./JoinCommunitySection";
import TrustedCompanies from "./TrustedCompanies";
import DonateUsPopUp from "./DonateUsPopUp";

export default function DonationWrapper() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <DonateHero open={open} setOpen={setOpen} />
      <DonateHeroBanner open={open} setOpen={setOpen} />
      <DonateCrousel open={open} setOpen={setOpen} />
      <TrustedCompanies open={open} setOpen={setOpen} />
      <JoinCommunitySection open={open} setOpen={setOpen} />
      <DonateUsPopUp isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
