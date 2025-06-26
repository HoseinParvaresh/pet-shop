import PageHead from "@/components/modules/PageHead/PageHead";
import ReservationForm from "@/components/templates/Reservation/ReservationForm";
export default function Reservation() {
    return (
        <>
            <PageHead title="رزرو نوبت" image="cat-2.png"/>
            <ReservationForm/>
        </>
    );
}