import PageHead from "@/components/modules/PageHead/PageHead";
import ReservationForm from "@/components/templates/Reservation/ReservationForm";
import ReservationGuide from "@/components/templates/Reservation/ReservationGuide";
import Head from 'next/head'
export default function Reservation() {

    return (
        <>
            <div>
                <Head>
                    <title>Reservation</title>
                </Head>
            </div>
            <PageHead title="رزرو نوبت" image="cat-2.png" />
            <div className="container">
                <ReservationGuide />
                <ReservationForm />
            </div>
        </>
    );
}