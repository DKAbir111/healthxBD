
import BannerImg from '../../assets/hero_image.png'
import './Banner.css'
export default function Banner() {
    return (
        <div >
            <main className='flex banner-container'>
                <aside className='left-banner'>
                    <h4>24/7 EMERGENCY SERVICE</h4>
                    <h2>Caring of Health Caring of You</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus voluptate obcaecati adipisci optio. Culpa ut velit odio minima perferendis.</p>
                    <div>
                        <button className='btn btn-secondary'>SEE ALL SERVICE</button>
                        <button className='btn btn-primary'>SEE ALL SERVICE</button>
                    </div>
                </aside>
                <aside>

                    <img src={BannerImg} alt="banner image" />

                </aside>
            </main>
        </div>
    )
}
