import BlogGrid from "./Component/BlogGrid";
import BlogStories from "./Component/BlogStories";
import GeometricSection from "./Component/GeometricSection";
import GreateFeature from "./Component/GreateFeature";
import HeroSection from "./Component/HeroSection";
import NetworkVisual from "./Component/NetworkVisual";

export default function Media() {
  return (
    <div className="select-none">
      <HeroSection />
      <GreateFeature />
      {/* <NetworkVisual /> */}
      <GeometricSection />
      <BlogGrid />
      {/* <BlogStories /> */}
    </div>
  );
}
