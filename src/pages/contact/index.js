import PageHead from "@/components/modules/PageHead/PageHead";
import ContactForm from "@/components/templates/Contact/ContactForm";
import ContactInfo from "@/components/templates/Contact/ContactInfo";
import dynamic from 'next/dynamic';

export default function Contact() {


    const ContactMap = dynamic(() => import('@/components/templates/Contact/ContactMap'), {
        ssr: false,
    });

    return (
        <div className="mb-20">
            <PageHead title="تماس با ما" image="cat-1.png" />
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10">
                <ContactInfo />
                <ContactForm />
                <ContactMap />
            </div>
        </div>
    );
}