import DonateCrousel from "./Component/DonateCrousel"
import DonateHero from "./Component/DonateHero"
import DonateHeroBanner2 from "./Component/DonateHeroBanner2"
import JoinCommunitySection from "./Component/JoinCommunitySection"
import TrustedCompanies from "./Component/TrustedCompanies"
export default function DonateUs(){
    return(
        <>
        <div className="max-w-[1440px] mx-auto">
        <DonateHero />
        <DonateHeroBanner2 />
        <DonateCrousel />
        <TrustedCompanies />
        <JoinCommunitySection />
            </div>
        </>
    )
}