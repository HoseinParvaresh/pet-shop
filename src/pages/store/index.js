import SectionName from "@/components/templates/Store/SectionName/SectionName";
import Sidebar from "@/components/templates/Store/Sidebar/Sidebar";
import Content from "@/components/templates/Store/Content/Content";

export default function index() {

    return (
        <div className="container mt-10">
            <SectionName/>
            <section className="grid grid-cols-12 gap-y-5 md:gap-x-7">
                <Sidebar/>
                <Content/>
            </section>
        </div>
    );
}