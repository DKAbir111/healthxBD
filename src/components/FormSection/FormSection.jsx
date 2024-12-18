import './FormSection.css';
import doctorImage from '../../assets/doctor-4.png'

export default function FormSection() {
    return (
        <section className="quote-form-section">
            <div className='quote-content-container'>
                <div className='quote-content'>
                    <h4 className="quote-subtitle">CONTRACT US</h4>
                    <h2 className="quote-title">Get A Quote Today</h2>
                    <p className="quote-description">
                        Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry&apos;s Standard Dummy Text Ever Since The 1500s
                    </p>
                </div>
            </div>

            <div className="quote-container">
                {/* Left Side: Doctor Image */}
                <div className="quote-image-container">
                    <img
                        src={doctorImage}
                        alt="Doctor pointing"
                        className="quote-doctor-image"
                    />
                </div>

                {/* Right Side: Form */}
                <div className="quote-form-container">


                    <form className="quote-form">
                        <div className="quote-input-group">
                            <label htmlFor="firstName" style={{ fontWeight: '400' }}>
                                First Name
                                <input
                                    type="text"
                                    id="firstName"
                                    placeholder="First name"
                                    className="quote-input"
                                />
                            </label>
                            <label htmlFor="lastName" style={{ fontWeight: '400' }}>
                                Last Name
                                <input
                                    type="text"
                                    id="lastName"
                                    placeholder="Last name"
                                    className="quote-input"
                                />
                            </label>
                        </div>
                        <label htmlFor="email" style={{ fontWeight: '400' }}>
                            Email
                            <input
                                type="email"
                                id="email"
                                placeholder="Email"
                                className="quote-input"
                            />
                        </label>
                        <label htmlFor="phone" style={{ fontWeight: '400' }}>
                            Phone Number
                            <input
                                type="tel"
                                id="phone"
                                placeholder="Phone number"
                                className="quote-input"
                            />
                        </label>
                        <label htmlFor="date" style={{ fontWeight: '400' }}>
                            Appointment Date
                            <input
                                type="date"
                                id="date"
                                className="quote-input"
                            />
                        </label>
                        <label htmlFor="message" style={{ fontWeight: '400' }}>
                            Message
                            <textarea
                                id="message"
                                rows="4"
                                placeholder="Message"
                                className="quote-textarea"
                            ></textarea>
                        </label>
                        <div className='quote-submit-button'>
                            <button type="submit" className="btn btn-primary">
                                APPOINTMENT NOW
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </section>
    );
}
