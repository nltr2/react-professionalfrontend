const Navigation = () => {
    return (
        <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav pull-right">
                <li className="active"><a href="#">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">More Pages <b className="caret"></b></a>
                    <ul className="dropdown-menu">
                        <li><a href="sidebar-left.html">Left Sidebar</a></li>
                        <li className="active"><a href="sidebar-right.html">Right Sidebar</a></li>
                    </ul>
                </li>
                <li><a href="contact.html">Contact</a></li>
                <li><a className="btn" href="signin.html">SIGN IN / SIGN UP</a></li>
            </ul>
        </div>
    );
};

export default Navigation;
