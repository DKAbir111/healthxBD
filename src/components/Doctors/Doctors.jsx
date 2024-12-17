import "./Doctors.css";
import logo from '../../assets/logo-2.png'
import ReactStars from "react-rating-stars-component";
const Doctors = () => {
    const doctorsData = [
        {
            id: 1,
            name: "Dr. Dredor Smith",
            specialty: "Medicine specialist",
            rating: 3.9,
            reviews: 252,
            patients: 4895,
            hospital: "Infermedica Hospital, NYC",
            image: 'https://i.ibb.co.com/vJCNv0s/doctor-1.png',
        },
        {
            id: 2,
            name: "Dr. Amrita sen gupta",
            specialty: "General Surgeon",
            rating: 4.8,
            reviews: 599,
            patients: 1698,
            hospital: "Mediplus Hospital, NYC",
            image: 'https://i.ibb.co.com/zQhpxfS/doctor-2.png',
        },
        {
            id: 3,
            name: "Dr. Christinne Jones",
            specialty: "Pediatrist",
            rating: 4.8,
            reviews: 321,
            patients: 9375,
            hospital: "Advocate Hospital, NYC",
            image: 'https://i.ibb.co.com/nnMnvyh/doctor-3.png',
        },
    ];

    return (
        <div className="doctors-container">
            {/* Heading */}
            <div className="header">
                <p className="subheading"><img src={logo} alt="" /> OUR DOCTOR&apos;S</p>
                <h1 className="main-heading">Our Special Doctors</h1>
                <p className="description">
                    Our team of specialists is at the forefront of medical innovation. Each
                    specialist brings a unique blend of expertise, empathy, and experience to
                    ensure that your health is in the best hands:
                </p>
            </div>

            {/* Doctors Cards */}
            <div className="cards">
                {doctorsData.map((doctor) => (
                    <div className="card" key={doctor.id}>
                        <img src={doctor.image} alt={doctor.name} className="doctor-img" />
                        <h3 className="doctor-name">{doctor.name}</h3>
                        <div className="medicine">
                            <p className="doctor-specialty">{doctor.specialty}</p>
                            <div className="rating">
                                <ReactStars
                                    count={1}
                                    size={24}
                                    edit={false}
                                    value={1}
                                />
                                <span>{doctor.rating}</span> <span style={{ color: 'gray' }}>({doctor.reviews})</span>
                            </div>
                        </div>
                        <div className="card-footer">
                            <p className="patients">{doctor.patients} Patients</p>
                            <p className="hospital">{doctor.hospital}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="explore" >
                <p className="section-footer">
                    You Get Our 100+ More Doctors...{" "}
                    <a href="#" className="explore-link">
                        EXPLORE ALL DOCTORS
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Doctors;
