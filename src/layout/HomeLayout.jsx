import Banner from "../components/Banner/Banner";
import ChooseUs from "../components/ChooseUs/ChooseUs";
import Doctors from "../components/Doctors/Doctors";
import Navbar from "../components/Navbar/Navbar";
import Service from "../components/Service/Service";

export default function HomeLayout() {
    return (
        <div>
            <Navbar />
            <Banner />
            <Service />
            <ChooseUs />
            <Doctors />
        </div>
    )
}
