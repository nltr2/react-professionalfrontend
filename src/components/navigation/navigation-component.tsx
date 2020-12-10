import { Link } from "react-router-dom"

const Navigation = () => {
    return (
        <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav pull-right">
                <li className="active">
                    <Link to="/">Home</Link>
                </li>

                <li><Link to="/about-us">About Us</Link></li>

                <li className="dropdown">
                    <a href="/" className="dropdown-toggle" data-toggle="dropdown">More Pages <b className="caret"></b></a>
                    <ul className="dropdown-menu">
                        <li><a href="sidebar-left.html">Left Sidebar</a></li>
                        <li className="active"><a href="sidebar-right.html">Right Sidebar</a></li>
                    </ul>
                </li>

                <li>
                    <Link to="/contact-us">Contact</Link>
                </li>

                <li>
                    <Link to="/sign-in">Sign-In / Sign-Up</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;
