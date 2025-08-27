import PageHead from "@/components/modules/PageHead/PageHead";
import ReservationForm from "@/components/templates/Reservation/ReservationForm";
import ReservationGuide from "@/components/templates/Reservation/ReservationGuide";
import Head from "next/head";
import { motion } from 'framer-motion';
export default function Reservation() {

    const links = ["خانه", "درباره ما", "خدمات", "تماس"];

    
	return (
		<>
			<div>
				<Head>
					<title>رزرو نوبت - پیلیسوک</title>
				</Head>
			</div>
			<PageHead title="رزرو نوبت" image="cat-2.png" />
			<div className="container">
				<ReservationGuide />
				<ReservationForm />
			</div>

            <nav className="flex justify-center space-x-8 bg-gray-900 p-4 text-white">
      {links.map((link, i) => (
        <motion.a
          key={i}
          href="#"
          whileHover={{ scale: 1.2, color: "#f472b6" }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative font-semibold"
        >
          {link}
          
        </motion.a>
      ))}
    </nav>
		</>
	);
}
