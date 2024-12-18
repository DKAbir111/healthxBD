import { Link } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
    return (
        <div className="error-page">
            <div className="error-container">
                <h1 className="error-code">404</h1>
                <h2 className="error-title">Oops! Page Not Found</h2>
                <p className="error-message">
                    It seems the page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
                </p>
                <Link to="/" className="error-button">
                    Go Back to Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
