import TopImage from "@/components/templates/Home/TopImage/TopImage";
import AboutUs from "@/components/templates/Home/AboutUs/AboutUs";
import OurServices from "@/components/templates/Home/OurServices/OurServices";
import TrustUs from "@/components/templates/Home/TrustUs/TrustUs";
import { useEffect } from "react";
import { customScroll } from "@/Utility/UtilityFunction";
import CustomerComments from "@/components/templates/Home/CustomerComments/CustomerComments";
import LastArticles from "@/components/templates/Home/LastArticles/LastArticles";
import JoinNewsletter from "@/components/templates/Home/JoinNewsletter/JoinNewsletter";

export default function Home() {
  useEffect(() => {
    window.addEventListener('scroll',() => {
      customScroll("#cat-scroll")
    })
  }, [])

  return (
      <div>
        <img id="cat-scroll" className="fixed z-50 -right-20 top-0 w-20 hidden xl:block" src="/images/cat-1.png" alt="cat-scroll"/>
        <TopImage/>
        <AboutUs/>
        <OurServices/>
        <TrustUs/>
        <CustomerComments/>
        <LastArticles/>
        <JoinNewsletter/>
      </div>
  );
}
