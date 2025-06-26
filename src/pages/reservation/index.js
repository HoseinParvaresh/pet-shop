import PageHead from "@/components/modules/PageHead/PageHead";
import ReservationForm from "@/components/templates/Reservation/ReservationForm";
import ReservationGuide from "@/components/templates/Reservation/ReservationGuide";
export default function Reservation() {
    return (
        <>
            <PageHead title="رزرو نوبت" image="cat-2.png" />
            <div className="container">
                <ReservationGuide />
                <ReservationForm />
            </div>
        </>
    );
}