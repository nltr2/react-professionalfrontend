import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Aboutus } from '../aboutus';
import { ContactUs } from '../contactus';
import { Footer } from "../footer";
import { Header } from "../header";
import { Home } from '../home';
import { Signin } from '../signin';

const Layout = () => {
    return (
        <>
            <Router>
                <div>
                    <Header />

                    <Switch>
                        <Route path="/" exact><Home title="AWESOME, CUSTOMIZABLE, REACT" /></Route>

                        <Route path="/about-us">
                            <Aboutus />
                        </Route>

                        <Route path="/contact-us">
                            <ContactUs />
                        </Route>

                        <Route path="/sign-in">
                            <Signin />
                        </Route>
                    </Switch>

                    < Footer />
                </div>
            </Router>
        </>
    );
};

export default Layout;
