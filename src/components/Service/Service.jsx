import './Service.css'
import logo from '../../assets/logo-2.png'
import { useEffect, useState } from 'react'
import ServiceCard from './ServiceCard'
export default function Service() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [])
    console.log(data)
    return (
        <section className="service-container">
            <div className='service-content'>
                <h3 style={{ color: '#004990', display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center', gap: '5px' }}><img src={logo} alt="" /> Our Service</h3>
                <h2 className='section-title'>Our Mediax specialties
                    service</h2>
            </div>
            <div className='service-card-container'>
                {
                    data.map(datum => <ServiceCard key={datum.id} datum={datum} />)
                }
            </div>
        </section>
    )
}
