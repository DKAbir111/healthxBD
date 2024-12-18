import doctorImage from '../../assets/Doctor.png'
import './ChooseUs.css'
import cross from '../../assets/cross.png'
import logo from '../../assets/logo-2.png'
import ChooseUsCard from './ChooseUsCard'
export default function ChooseUs() {
    return (
        <section className='choose-wrapper'>
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
                        <ChooseUsCard number={'01'} title={'Compassionate & Expert Care'} description={'Our team of dedicated healthcare professionals combines years of experience with a genuine commitment to providing.'} />
                        <ChooseUsCard
                            number={'02'}
                            title={'Patient-Centered Approach'}
                            description={
                                'Your health and well-being are our top priorities. We take the time to listen to your concerns, answer your questions.'
                            }
                        />
                        <ChooseUsCard
                            number={'03'}
                            title={'Personalized Treatment Plans'}
                            description={
                                'We understand that every patient is unique, and their healthcare needs may vary. That\'s why we create individualized treatment.'
                            }
                        />

                    </div>
                </div>

                {/* Right Section */}
                <div className="image-section">
                    <img src={doctorImage} alt="Doctor" className="doctor-image" />
                    <img src={cross} alt="cross" className='cross' />
                </div>
            </div>
        </section>
    )
}
