import TopImage from "@/components/templates/Home/TopImage/TopImage";
import AboutUs from "@/components/templates/Home/AboutUs/AboutUs";
import OurServices from "@/components/templates/Home/OurServices/OurServices";
import TrustUs from "@/components/templates/Home/TrustUs/TrustUs";
import CustomerComments from "@/components/templates/Home/CustomerComments/CustomerComments";
import LastArticles from "@/components/templates/Home/LastArticles/LastArticles";
import JoinNewsletter from "@/components/templates/Home/JoinNewsletter/JoinNewsletter";
import IntroducingProducts from "@/components/templates/Home/IntroducingProducts/IntroducingProducts";

export default function Home() {

  return (
      <>
        <TopImage/>
        <AboutUs/>
        <OurServices/>
        <TrustUs/>
        <CustomerComments/>
        <LastArticles/>
        <IntroducingProducts/>
        <JoinNewsletter/>
      </>
  );
}
