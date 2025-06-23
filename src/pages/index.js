import TopImage from "@/components/templates/Home/TopImage/TopImage";
import OurAdvantages from "@/components/templates/Home/OurAdvantages/OurAdvantages";
import OurServices from "@/components/templates/Home/OurServices/OurServices";
import TrustUs from "@/components/templates/Home/TrustUs/TrustUs";
import CustomerComments from "@/components/templates/Home/CustomerComments/CustomerComments";
import LastArticles from "@/components/templates/Home/LastArticles/LastArticles";
import JoinNewsletter from "@/components/templates/Home/JoinNewsletter/JoinNewsletter";
import IntroducingProducts from "@/components/templates/Home/IntroducingProducts/IntroducingProducts";
import { Toaster } from "react-hot-toast";
export default function Home() {

  return (
    <>
      <Toaster />
      <TopImage />
      <OurAdvantages />
      <OurServices />
      <TrustUs />
      <CustomerComments />
      <LastArticles />
      <IntroducingProducts />
      <JoinNewsletter />
    </>
  );
}
