import './Service.css'
import PropTypes from 'prop-types'
export default function ServiceCard({ datum }) {
    return (
        <div className="card">
            <div className='card-image'>
                <img src={datum.image} alt="" />
            </div>
            <h4 style={{ fontWeight: '500' }}>{datum.title}</h4>
            <p style={{ color: '#788094' }}>{datum.doctors}+ Doctors</p>
            <button className='btn btn-primary'> READ MORE </button>
        </div>
    )
}

ServiceCard.propTypes = {
    datum: PropTypes.object.isRequired,
}