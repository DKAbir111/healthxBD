import Banner from "../components/Banner/Banner";
import ChooseUs from "../components/ChooseUs/ChooseUs";
import Doctors from "../components/Doctors/Doctors";
import Footer from "../components/Footer/Footer";
import FormSection from "../components/FormSection/FormSection";
import Navbar from "../components/Navbar/Navbar";
import Service from "../components/Service/Service";

export default function HomeLayout() {
    return (
        <div>
            <nav>
                <Navbar />
            </nav>
            <main>
                <Banner />
                <Service />
                <ChooseUs />
                <Doctors />
                <FormSection />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}
