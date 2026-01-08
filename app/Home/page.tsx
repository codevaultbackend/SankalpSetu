import Hero from "../Components/layout/Hero";
import AboutSection from "./Components/section/AboutSection";
import ContributeBanner from "./Components/section/ContributeBanner";
import DonationBreakdown from "./Components/section/DonationBreakdown";
import EventsSection from "./Components/section/EventsSection";
import ServicesGrid from "./Components/section/ServicesGrid";
import WhatWeDid from "./Components/section/WhatWeDid";
import WhatWeDo from "./Components/section/WhatWeDo";

export default function HomeContent(){
    return(
        <>
        <Hero />
        <AboutSection />
        <WhatWeDo/>
        <ServicesGrid />
        <WhatWeDid />
        <DonationBreakdown />
        <ContributeBanner />
        <EventsSection />

        </>
    )
}