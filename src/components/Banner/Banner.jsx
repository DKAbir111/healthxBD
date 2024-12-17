
import { FaSearch } from 'react-icons/fa'
import BannerImg from '../../assets/banner-image.png'
import './Banner.css'
import { CiLocationOn } from "react-icons/ci";
import logo from '../../assets/logo-2.png'
export default function Banner() {
    return (
        <div className='banner-wrapper'>
            <main className='flex banner-container'>
                <aside className='left-banner'>
                    <h4 className='sub-title' style={{ display: 'flex', alignItems: 'center' }}> <img src={logo} alt="" /> 24/7 EMERGENCY SERVICE</h4>
                    <h2 className='banner-title'>Caring of <span className='highlight'>Health</span> Caring of You</h2>
                    <p className='section-content'>A brief statement outlining the purpose and mission of the clinic. This can include
                        the commitment to patient care, community health.</p>
                    <div className='banner-button'>
                        <button className='btn btn-secondary'>SEE ALL SERVICE</button>
                        <button className='btn btn-primary'>SEE ALL SERVICE</button>
                    </div>
                </aside>
                <aside className='image-container'>

                    <img src={BannerImg} alt="banner-image" className='banner-image' />

                </aside>
            </main>
            <div className='sub-banner-container'>
                <div className='sub-banner'>
                    <div className="search-container">
                        <FaSearch className="search-icon" />
                        <input type="text" className="banner-input" placeholder="Ex. Doctor, Hospital" />
                    </div>
                    <div className="search-container">
                        <FaSearch className="search-icon" />
                        <input type="text" className="banner-input" placeholder="Ex. Surgeon,Cardiologist" />
                    </div>
                    <div className="search-container">
                        < CiLocationOn className="search-icon" />
                        <input type="text" className="banner-input" placeholder="Set Your Location" />
                    </div>
                    <div className='banner-search'>
                        <button className='btn btn-primary' style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><FaSearch />  SEARCH</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
