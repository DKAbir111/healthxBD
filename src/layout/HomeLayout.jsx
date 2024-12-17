import Banner from "../components/Banner/Banner";
import Navbar from "../components/Navbar/Navbar";
import Service from "../components/Service/Service";

export default function HomeLayout() {
    return (
        <div>
            <Navbar />
            <Banner />
            <Service />
        </div>
    )
}
