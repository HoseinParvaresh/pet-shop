import TopImage from "@/components/templates/Home/TopImage/TopImage";
import OurAdvantages from "@/components/templates/Home/OurAdvantages/OurAdvantages";
import OurServices from "@/components/templates/Home/OurServices/OurServices";
import TrustUs from "@/components/templates/Home/TrustUs/TrustUs";
import CustomerComments from "@/components/templates/Home/CustomerComments/CustomerComments";
import LastArticles from "@/components/templates/Home/LastArticles/LastArticles";
import JoinNewsletter from "@/components/templates/Home/JoinNewsletter/JoinNewsletter";
import IntroducingProducts from "@/components/templates/Home/IntroducingProducts/IntroducingProducts";
import { Toaster } from "react-hot-toast";
import { ParallaxProvider } from 'react-scroll-parallax';
import Head from 'next/head'

export default function Home() {

  return (
    <>
      <div>
        <Head>
          <title>پیلیسوک</title>
        </Head>
      </div>
      <ParallaxProvider>
        <Toaster />
        <TopImage />
        <OurAdvantages />
        <OurServices />
        <TrustUs />
        <CustomerComments />
        <LastArticles />
        <IntroducingProducts />
        <JoinNewsletter />
      </ParallaxProvider>
    </>
  );
}
