import TopImage from "@/components/templates/Home/TopImage/TopImage";
import AboutUs from "@/components/templates/Home/AboutUs/AboutUs";
import OurServices from "@/components/templates/Home/OurServices/OurServices";

export default function Home() {
  return (
      <div className="mb-200">
        <div className="container">
          <TopImage/>
          <AboutUs/>
        </div>
        <OurServices/>
      </div>
  );
}
