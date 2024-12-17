import doctorImage from '../../assets/Doctor.png'
import './ChooseUs.css'
import cross from '../../assets/cross.png'
import logo from '../../assets/logo-2.png'
export default function ChooseUs() {
    return (
        <div className="choose-container">
            {/* Left Section */}
            <div className="text-section">
                <p className="why-choose-us" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <img src={logo} alt="" />
                    WHY CHOOSE US
                </p>
                <h1 className="main-heading">
                    We Remain Continuously Available For Your Health Services
                </h1>

                <div className="service">
                    <div className="service-item">
                        <div className="number-circle">01</div>
                        <div className="service-text">
                            <h3>Compassionate & Expert Care</h3>
                            <p>
                                Our team of dedicated healthcare professionals combines years of
                                experience with a genuine commitment to providing.
                            </p>
                        </div>
                    </div>

                    <div className="service-item">
                        <div className="number-circle">02</div>
                        <div className="service-text">
                            <h3>Patient-Centered Approach</h3>
                            <p>
                                Your health and well-being are our top priorities. We take the time
                                to listen to your concerns, answer your questions.
                            </p>
                        </div>
                    </div>

                    <div className="service-item">
                        <div className="number-circle">
                            03
                        </div>
                        <div className="service-text">
                            <h3>Personalized Treatment Plans</h3>
                            <p>
                                We understand that every patient is unique, and their healthcare needs
                                may vary. That&apos;s why we create individualized treatment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="image-section">
                <img src={doctorImage} alt="Doctor" className="doctor-image" />
                <img src={cross} alt="cross" className='cross' />
            </div>
        </div>
    )
}
