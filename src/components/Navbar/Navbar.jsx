import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi"; // Menu and Close icons

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="container">
            <nav className="flex nav-bar">
                {/* Logo */}
                <div>
                    <img src={logo} alt="Logo of Health x" className="logo" />
                </div>

                {/* Hamburger Menu Icon */}
                <div className="hamburger" onClick={toggleMenu}>
                    {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                </div>

                {/* Navigation Links */}
                <ul className={`nav-link flex ${menuOpen ? "active" : ""}`}>
                    <li>
                        <Link to="/">Find Doctors</Link>
                    </li>
                    <li>
                        <Link to="/hospitals">Hospitals</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/services">Service</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>

                {/* Right Side Icons and Button */}
                <div className="flex-end flex">
                    <span className="icon">
                        <IoSearch />
                    </span>
                    <span className="icon">
                        <MdOutlineShoppingCart />
                        <span className="marker">5</span>
                    </span>
                    <button className="btn btn-primary">APPOINTMENT NOW</button>
                </div>
            </nav>
        </div>
    );
}
