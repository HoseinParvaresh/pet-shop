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
export default function Home() {

  // Swal.fire({
  //   text: "سایت هنوز در مرحله توسعه قرار داره و ممکنه ظاهرش یا فیچر هاش در ادامه تغییر کنه",
  //   icon: "info"
  // });

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
