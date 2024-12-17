import PropTypes from 'prop-types';
import './ChooseUs.css';

export default function ChooseUsCard({ number, title, description }) {
    return (
        <div className="service-item">
            <div className="number-circle">{number}</div>
            <div className="service-text">
                <h3>{title}</h3>
                <p>
                    {description}
                </p>
            </div>
        </div>
    );
}

// Prop Validation
ChooseUsCard.propTypes = {
    number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
