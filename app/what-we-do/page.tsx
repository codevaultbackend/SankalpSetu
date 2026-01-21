import NewsSection from "../About/Components/NewsSection";
import EventsSection from "../Home/Components/section/EventsSection";
import FeaturesSection from "./Component/FeaturesSection";
import WhatWeDoHero from "./Component/WhatWeDoHero";

export default function WhatWeDo(){
    return(
        <>
        <WhatWeDoHero />
        <FeaturesSection />
        <NewsSection />
        <EventsSection />
        </>
    )
}