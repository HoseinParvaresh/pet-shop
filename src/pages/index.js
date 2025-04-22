import TopImage from "@/components/templates/Home/TopImage/TopImage";
import AboutUs from "@/components/templates/Home/AboutUs/AboutUs";
import OurServices from "@/components/templates/Home/OurServices/OurServices";
import TrustUs from "@/components/templates/Home/TrustUs/TrustUs";

export default function Home() {

  return (
      <div className="mb-200">
        <div></div>
        <div className="container">
          <TopImage/>
          <AboutUs/>
        </div>
        <OurServices/>
        <TrustUs/>
      </div>
  );
}
