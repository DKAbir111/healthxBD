import "./Footer.css";
import logo from '../../assets/logo-2.png'
import { FaAngleRight } from "react-icons/fa6";
import { FaFacebook, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Left Section */}
                <div className="footer-section contact">
                    <div className="footer-title" style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={logo} alt="Logo image" />
                        <h2>Health</h2>
                    </div>
                    <p>Sahibabad, Ghaziabad, Uttar Pradesh 201005</p>
                    <p>+1-887******78787</p>
                    <p>info@demohelp.com</p>
                    <div className="social-icons">
                        <span className="footer-icon"> <FaFacebook /></span>
                        <span className="footer-icon"> <FaTwitter /></span>
                        <span className="footer-icon"> <FaYoutube /></span>
                        <span className="footer-icon"> <FaPinterest /></span>

                    </div>
                </div>

                {/* Quick Links */}
                <div className="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><FaAngleRight /> About Us</li>
                        <li><FaAngleRight />  Our Pricing</li>
                        <li> <FaAngleRight /> Our Gallery</li>
                        <li> <FaAngleRight /> Appointment</li>
                        <li> <FaAngleRight /> Privacy Policy</li>
                    </ul>
                </div>

                {/* Departments */}
                <div className="footer-section department">
                    <h3>Department</h3>
                    <ul>
                        <li><FaAngleRight />  Orthology</li>
                        <li><FaAngleRight />  Neurology</li>
                        <li> <FaAngleRight /> Dental Care</li>
                        <li> <FaAngleRight /> Opthalmology</li>
                        <li> <FaAngleRight /> Cardiology</li>
                    </ul>
                </div>

                {/* Useful Links */}
                <div className="footer-section useful-links">
                    <h3>Useful Links</h3>
                    <ul>
                        <li> <FaAngleRight /> About Us</li>
                        <li> <FaAngleRight /> Our Blog</li>
                        <li> <FaAngleRight /> Our Gallery</li>
                        <li> <FaAngleRight /> Appointment</li>
                        <li> <FaAngleRight /> Privacy Policy</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>Copyright ©2024 Health.com. All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
