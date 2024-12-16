import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './Navbar.css'
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
export default function Navbar() {
    return (
        <div className='container'>
            <nav className='flex nav-bar'>
                <div>
                    <img src={logo} alt="Logo of Health x" className='logo' />
                </div>
                <ul className='flex nav-link'>
                    <li>
                        <Link>   Find Doctors</Link>
                    </li>
                    <li><Link> Hospitals</Link> </li>
                    <li>
                        <Link>About Us</Link>
                    </li>
                    <li>
                        <Link>Service</Link>
                    </li>
                    <li>
                        <Link>Contact</Link>
                    </li>
                </ul>
                <div className='flex-end flex'>
                    <span className='icon'>
                        <IoSearch />
                    </span>
                    <span className='icon'>
                        <MdOutlineShoppingCart />
                    </span>
                    <button className='btn btn-primary'>APPOINTMENT NOW</button>
                </div>
            </nav>
        </div>
    )
}
