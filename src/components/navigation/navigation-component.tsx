import { Link } from "react-router-dom"

const Navigation = () => {
    return (
        <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav pull-right">
                <li className="active">
                    <Link to="/">Home</Link>
                </li>

                <li><Link to="/about-us">About Us</Link></li>

                <li>
                    <Link to="/contact-us">Contact</Link>
                </li>

                <li>
                    <Link to="/crm-system">Customers</Link>
                </li>

                <li>
                    <Link to="/sign-in">Sign-In / Sign-Up</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;
