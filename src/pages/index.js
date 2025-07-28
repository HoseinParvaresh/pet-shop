import TopImage from "@/components/templates/Home/TopImage/TopImage";
import OurAdvantages from "@/components/templates/Home/OurAdvantages/OurAdvantages";
import OurServices from "@/components/templates/Home/OurServices/OurServices";
import TrustUs from "@/components/templates/Home/TrustUs/TrustUs";
import CustomerComments from "@/components/templates/Home/CustomerComments/CustomerComments";
import LastArticles from "@/components/templates/Home/LastArticles/LastArticles";
import JoinNewsletter from "@/components/templates/Home/JoinNewsletter/JoinNewsletter";
import IntroducingProducts from "@/components/templates/Home/IntroducingProducts/IntroducingProducts";
import { Toaster } from "react-hot-toast";
import Swal from 'sweetalert2'
import { ParallaxProvider } from 'react-scroll-parallax';
import { useState, useEffect } from "react";

export default function Home() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {

  }, [])

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => {
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  // Swal.fire({
  //   text: "سایت هنوز در مرحله توسعه قرار داره و ممکنه ظاهرش یا فیچر هاش در ادامه تغییر کنه",
  //   icon: "info"
  // });

  return (
    <>
      {
        loading &&
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <svg id="loading" className="w-full h-full">
            <text className="font-Morabba 2xs:font-MorabbaBold" x="50%" y="50%" textAnchor="middle">
              پیلیسوک
            </text>
          </svg>
        </div>
      }
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
