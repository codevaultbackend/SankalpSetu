import EventsSection from "../Home/Components/section/EventsSection";
import AboutNonProfitSection from "./Components/AboutNonProfitSection";
import AwardsRecognitions from "./Components/AwardsRecognitions";
import BoardOfTrustees from "./Components/BoardOfTrustees";
import NewsSection from "./Components/NewsSection";

export default function About() {

    return(
        <>
        <AboutNonProfitSection />
        {/* <AwardsRecognitions /> */}
        <BoardOfTrustees/>
        <NewsSection />
        <EventsSection />
        </>
    )
}